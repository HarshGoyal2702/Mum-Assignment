import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken"
import User from "../models/userModel.js";
// authentication middleware
export const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return next(new ErrorHandler("Please login first", 401));
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
})

// This functionality is for the application which use multiple role of user
export const authorizeRole = () => {
    return (req, res, next) => {
        if (req.user.role === "user") {
            return next(new ErrorHandler("Role : User is not allowed to access this", 400));
        }
        next();
    }
}