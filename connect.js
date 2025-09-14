import mongoose from "mongoose";

// Local MongoDB connection
const uri = "mongodb://127.0.0.1:27017/recipegramDB";

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB connection error:", err));
