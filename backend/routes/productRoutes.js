const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controller/productControllers");

router
    .route("/")
    .get(getAllProducts)
    .post(createNewProduct);

router
    .route("/:id")
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById)

module.exports = router;
