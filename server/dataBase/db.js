const mongoose = require("mongoose");

const Connectdb = async () => {
  try {
    const DB_URL =
      process.env.DATABSE_URL ||
      `mongodb+srv://saif03:saif1234@management.g0vkq.mongodb.net/pharmacy`;
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = Connectdb