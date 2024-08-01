import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js"
import catchAsyncError from "../middlewares/catchAsyncError.js"
import sendToken from "../utils/sendToken.js"

// Register User 
export const registerUser = catchAsyncError(async (req, res, next) => {
    console.log("HELLO")
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User already first", 400));
    }
    user = await User.create({
        email, password
    });
    sendToken(user, 201, res);
});

// UserInfo
export const userInfo = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    sendToken(user, 201, res);
});

// User Login 
export const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email)
    if (!email || !password) return next(new ErrorHandler("Please enter email and password", 400));

    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Invalid email or password", 401));

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) return next(new ErrorHandler("Invalid email or password", 401));

    sendToken(user, 200, res);
});

// Logout
export const logout = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
});