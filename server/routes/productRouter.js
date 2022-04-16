const express = require("express");
const ProductController = require("../controllers/ProductController")
const { userAuth, authorizeRoles } = require("../middleware/adminVrf");

const router = express.Router();

router.post(
    "/admin/product/new",
    userAuth,
    authorizeRoles("admin"),
    ProductController.createProduct
  );

  router.get("/getproduct", ProductController.getProducts);
router.get("/product/category/:category", ProductController.getByCategory);
router.get("/products", ProductController.getAllProducts);
router.put(
  "/admin/product/:id",
  userAuth,
  authorizeRoles("admin"),
  ProductController.updateProduct
);
router.delete(
  "/admin/product/:id",
  userAuth,
  authorizeRoles("admin"),
  ProductController.deleteProduct
);
  module.exports = router
