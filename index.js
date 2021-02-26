const mongoose = require("mongoose")

// Your URI
const URI = "mongodb://localhost/example"

// Conection with flags for evade the deprecation warnings
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=>{
		console.log(`db conected on ${URI}`)
	})
	.catch(()=>console.log("Error on connection"))

