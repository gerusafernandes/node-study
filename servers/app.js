const app = require("express")()


app.get("/hello", (request, response) => {

  response.send("world")
})


app.listen(3000, () => {
    console.log("é tetra")
})