const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./config/Routes")
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(__dirname + "/assets"));

app.use(cors())

app.use(routes)

let port = 4019 || process.env.port

app.listen(port, ()=> {
    console.log(`server is running on port ${port} successfully!`)
})