const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: String,
    required: [true, "Please Enter Product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: { type: Number, default: 0 },
  images: [
    {
      public_id: {
        type: String,
      },
      url: { type: String, required: true },
    },
  ],
  category: { type: String, required: [true, "Please Enter Product category"] },
  Stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxlength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: { type: Number, default: 0 },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const ProductModel = mongoose.model("Product", productSchema);

module.exports = { ProductModel };
