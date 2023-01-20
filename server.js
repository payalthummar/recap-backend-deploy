//Common JS
const express = require("express");

require("dotenv").config();
const app = express();
require("colors");
const connectDB = require("./dbinit");
connectDB();
//Express provides methods to specify what function is called for a particular HTTP
// verb ( GET , POST , SET , etc.) and URL pattern ("Route"),
//and methods to specify what template ("view") engine is used,
//where template files are located, and what template to use to render a response

const PORT = 8080 || process.env.PORT;

//middleware req,res cycle
const carRoutes = require("./routes/car");
//when you send the data app.post/app.put you need express.json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use("/cars", carRoutes);
app.get("/", (req, res) => {
  res.send("Hello JWT");
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
