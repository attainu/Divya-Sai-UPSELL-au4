const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
dotenv.config();

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(client => {
    module.exports = client;
    app.listen(process.env.PORT, () => {
      console.log("Server has started");
    });
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
