import mongoose from "mongoose";
const connectDB = () => {
    try {
        mongoose.connect(process.env.DB_URI).then((data) => {
            console.log(`MongoDB connected with server : ${data.connection.host}`)
        });
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;