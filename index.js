const express = require("express")
const dotenv = require("dotenv");
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
    dotenv.config({path : ".env"})
}

const app = express()
app.listen(process.env.PORT, () => {
    console.log("Server is running at", process.env.PORT)
})
