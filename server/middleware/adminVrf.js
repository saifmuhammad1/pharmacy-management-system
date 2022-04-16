const catchAsyncError = require("../middleware/catchAsyncError.js");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel.js");

const userAuth = catchAsyncError(async (req, res, next) => {
  const { jwtoken } = req.cookies;

  if (!jwtoken) {
    return next(
      res.status(401).json({
        success: false,
        message: "Please Login to access this resource",
      })
    );
  }
  const Data = jwt.verify(jwtoken, process.env.JWT_SECRETCODE);
  req.user = await userModel.findById(Data.id);
  next();
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          success: false,
          message: `Role: ${req.user.role} is not allowed to access this resource.`,
        })
      );
    }
    next();
  };
};

module.exports = { userAuth, authorizeRoles };