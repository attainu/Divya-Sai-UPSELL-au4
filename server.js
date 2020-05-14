const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const publicPath = path.join(__dirname, "client/build");

const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//API Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/payment");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route file

const app = express();
app.use(express.static(publicPath));

//body paser
app.use(express.json());
//cookie parser
app.use(cookieParser());
//cors
app.use(cors());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Mount routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
//err handler

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

//Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
