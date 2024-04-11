const routes = require("express").Router()
const Product = require("../models/Product")
const multer = require('multer');
const path = require('path');
const fs = require("fs");

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Upload files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const randomString = [...Array(50)]
      .map((i) => (~~(Math.random() * 36)).toString(36))
      .join("");
    cb(null, randomString + path.extname(file.originalname)); // Append the random string to the original file extension
  },
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

routes.post("/", upload.single("file"), async (req, res) => {
  try {
    let body = JSON.parse(req.body.data);
    body.image = "http://localhost:4019/uploads/" + req?.file?.filename;
    await Product.create(body);
    res.status(200).send({ status: 200 });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});
routes.put("/:id", upload.single("file"), async (req, res) => {
  try {
    let id = req.params.id;
    let body = JSON.parse(req.body.data);
    // If image file is uploaded, add image field to the updateFields
    if (req.file) {
      body.image = "http://localhost:4019/uploads/" + req.file.filename;
    }
    if (body.image === "") {
      delete body.image;
    }
    let updated_product = await Product.updateOne({ _id: id }, body);

    res.status(200).send({ status: 200, data: updated_product });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});

routes.put("/qty/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let old_data = await Product?.find({ _id: id });
    let findOldQty = old_data[0].quantity;
    let addedQty = req.body.quantity;
    let action = req.body.action;
    let properQty = 0;

    if (action === "buy") {
      properQty = findOldQty + addedQty;
    } else {
      if (addedQty > findOldQty) {
        return res
          .status(406)
          .send({
            status: 406,
            data: "You don't have enough quantity of product in your stock",
          });
      } else {
        properQty = findOldQty - addedQty;
      }
    }

    await Product.updateOne({ _id: id }, { quantity: properQty });

    let updatedQty = await Product?.find({ _id: id });
    res.status(200).send({ status: 200, data: updatedQty[0] });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ status: 500, error: "Internal Server Error" });
  }
});

routes.get("/", async (req, res) => {
  try {
    let all_products = await Product.find({});
    res.status(200).send({ status: 200, data: all_products });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});
routes.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let finded_product = await Product.find({ _id: id });
    res.status(200).send({ status: 200, data: finded_product[0] });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let currentProduct = await Product?.find({ _id: id });
    let parentDirectory = path.dirname(__dirname);
console.log(parentDirectory);
    // let uploadPath = path.join(__dirname, 'uploads');
    // let currentImageName =  currentProduct[0]?.image.split("/")[4];
    // let filePath = path.join(uploadPath, currentImageName); // join the path and filename
    // fs.unlink(filePath, async (err) => {
    //   if (err) {
    //     console.error("Error deleting file:", err);
    //     return;
    //   } else {
    //     console.log(`${currentImageName} was deleted successfully`);
    //   }
    //   let deletedProduct = await Product?.deleteMany({ _id: id });
    //   res.status(200).send({ status: 200, data: deletedProduct });
    // });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});

routes.get('/top/products', async (req, res) => {
  
})
module.exports = routes