const userModel = require("../model/userModel.js");
const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')
const catchAsyncError=require('../middleware/catchAsyncError.js')

class UserController{
    static registration =  async(req,res) => {

      // try {
        const{name,email,password}= req.body

        console.log(req.body);

        if (!name || !email || !password) {
            return res.status(422).json({
              success: false,
              message: "please fill all the field",
            });
          }
       
           const userExist = await userModel.findOne({ email });

           if (userExist) {
            return res.status(409).json({
              success: false,
              message: "User already exist",
               });
             }

          if (password.length < 8) {
            return res.status(422).json({
              success: false,
              message: "Password should be greater than 8 character",
            });
          }

           const hashPass = await bcrypt.hash(password, 10);

             const user = await userModel.create({
              name,
              email,
              password: hashPass,
             });
     
           res.status(201).json({
              success: true,
               message: "Registered successfull",
             });
      // } catch (error) {
      //   console.log(error);
      // }

          
        
    }
    static LoginUser = async (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({
            success: false,
            message: "Please Enter Email & Password",
          });
        }
        const user = await userModel.findOne({ email }).select("+password");
    
        if (!user) {
          return res.status(401).json({
            success: false,
            message: "User is not registered",
          });
        }
    
        const compare = await bcrypt.compare(password, user.password);
    
        if (!compare) {
          return res.status(401).json({
            success: false,
            message: "Invalid Email or Password",
          });
        }
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETCODE, {
          expiresIn: process.env.JWT_EXPIRE,
        });
    
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + process.env.COOKIE_EXPIRE),
          httpOnly: true,
        });
        res.status(200).json({
          success: true,
          message: "Logged in",
          user,
          token,
        });
        
    }  
    
    static Logout = catchAsyncError(async (req, res) => {
      res.clearCookie("jwtoken");
  
      res.status(200).json({
        success: true,
        message: "Logged Out",
      });
    });  
    
    static forgotPass = catchAsyncError(async (req, res) => {

      try {
        const user = await userModel.findOne({ email: req.body.email });          
        const mailreceive = await sendMails(
          {
            email: req.body.email,
            subject: `Pharmacy management system recovery password`,
          },
          req,
          res
        );

        console.log(mailreceive);

        res.status(200).json({
          success: true,
          message: `Email send to ${user.email} successfully`,
        });
  
        if (!mailreceive) {
          return res.status(400).json({
            success: false,
            message: "Email not sent",
          });
        }
      } catch (error) {
        // user.resetPasswordToken = undefined;
        // user.resetPasswordExpire = undefined;
  
        // await user.save({ validateBeforeSave: false });
  
        return res.status(500).json({
          success: false,
          error: error
        });
      }
    });
    

}
module.exports = UserController