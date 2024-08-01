import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        select: false,
        minLength: [8, "Required minimum 8 characters"]
    },
});

// PASSWORD HASHING AND COMPARING
//Password hashing and saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        next();
    this.password = await bcrypt.hash(this.password, 10);
})
//Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Genarating JWT token
// JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

const User = mongoose.model("User", userSchema);
export default User;