const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
//rest object
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
