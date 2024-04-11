const routes = require("express").Router()

routes.use("/api/admin", require("../controller/AdminController"))
routes.use("/api/product", require("../controller/ProductController"))
routes.use("/api/transaction", require("../controller/TransactionController"))

module.exports = routes