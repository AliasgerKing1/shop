const routes = require("express").Router()
const Transaction = require("../models/Transaction")
const Product = require("../models/Product")

routes.post("/", async (req, res) => {
  console.log(req.body)
  return
  try {
    await Transaction.create(req.body);
    res.status(200).send({ status: 200 });
  } catch (error) {
    res.status(500).send({ status: 500 });
  }
});

routes.get("/", async (req, res) => {
try {
  let history = await Transaction.find({});
  let pr = history.products._id
  let prevData = await Product.find({_id : pr});
  res.status(200).send({ status: 200, data: {history, prevData} });
} catch (error) {
  res.status(500).send({ status: 500, error : error.message });
}
})

module.exports = routes