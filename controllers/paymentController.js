const { v4: uuidv4 } = require("uuid");
const { Order, ProductCart } = require("../models/Order");
const User = require("../models/User");
const stripe = require("stripe")("sk_test_LwwI3XLAeIrD2CNraqBDS0nb00idmUIIe7");
const Insta = require("instamojo-nodejs");
const url = require("url");

exports.makePayment = (req, res) => {
  const { purpose, amount, buyer_name, redirect_url, email, phone } = req.body;
  Insta.setKeys(
    "test_a24b61e84b24c3a76ba8336b5b0",
    "test_716d399dd86b7cc8b12129e9749"
  );
  Insta.isSandboxMode(true);
  const data = new Insta.PaymentData();

  data.purpose = purpose;
  data.amount = amount;
  data.buyer_name = buyer_name;
  data.redirect_url = redirect_url;
  data.email = email;
  data.phone = phone;
  data.send_email = false;
  data.webhook = req.body.webhook;
  data.send_sms = false;
  data.allow_repeated_payments = false;

  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
      console.log(error);
    } else {
      // Payment redirection link at response.payment_request.longurl
      const parsedRes = JSON.parse(response);
      console.log(parsedRes.payment_request.longurl);
      res.status(200).json(parsedRes.payment_request.longurl);
    }
  });
};

exports.capturePaymentResponse = (req, res) => {
  let url_parts = url.parse(req.url, true);
  let responseData = url_parts.query;

  if (responseData.payment_id) {
    User.findById(responseData.user_id).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "No user was found in DB",
        });
      }
      let orderData = {
        transaction_id: responseData.payment_id,
        user: user,
      };
      console.log(orderData);
      const order = new Order(orderData);
      order.save((err, order) => {
        if (err) {
          return res.status(400).json({
            error: "Failed to save order",
          });
        }
        return res.redirect(
          `http://localhost:3000/payment-complete/${orderData.transaction_id}`
        );
      });
    });

    // const order = new Order(orderData);
  }
};
//STRIPE
// const { products, token, totalAmount } = req.body;
//   console.log("Product", products);
//   //   console.log("Price", product.price);
//   const idempotencyKey = uuidv4();

//   return stripe.customers
//     .create({
//       email: token.email,
//       source: token.id,
//     })
//     .then((customer) => {
//       stripe.charges.create(
//         {
//           amount: totalAmount * 100,
//           currency: "usd",
//           customer: customer.id,
//           receipt_email: token.email,
//           description: `Purchased the product`,
//           shipping: {
//             name: token.card.name,
//             address: {
//               line1: token.card.address_line1,
//               line2: token.card.address_line2,
//               city: token.card.address_city,
//               country: token.card.address_country,
//               postal_code: token.card.address_zip,
//             },
//           },
//         },
//         { idempotencyKey }
//       );
//     })
//     .then((result) => {
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .catch((err) => console.log(err));
