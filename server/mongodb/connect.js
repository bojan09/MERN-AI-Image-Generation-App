import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};

export default connectDB;
