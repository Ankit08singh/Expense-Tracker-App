const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://ankitwork0812:SxYQcnRkXgL5FuSB@cluster0.9vmho.mongodb.net/"
    );
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };