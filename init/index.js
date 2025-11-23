const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

require("dotenv").config();

const dbUrl = process.env.MONGO_URL;

main()
  .then(() => console.log("DB initialized successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB");
  await initDB();
  await mongoose.connection.close();
  console.log("DB connection closed");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "6921474b50c4b855a9ec2832" }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};
