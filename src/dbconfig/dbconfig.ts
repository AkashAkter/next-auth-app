import mongoose from "mongoose";
export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    console.log(error);
  }
}
