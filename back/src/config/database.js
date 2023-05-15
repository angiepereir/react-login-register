const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const  MONGO_DB="mongodb+srv://pereiraanngy:KkEdlO9yQn1r2IfV@universidad.fkedjgf.mongodb.net/universidad?retryWrites=true&w=majority"

const connect = async () => {
  try {
    const DB = await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = DB.connection;
    console.log(`Connected to DB: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB",error);
  }
};

module.exports = { connect };
