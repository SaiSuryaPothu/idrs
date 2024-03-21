// const express = require("express")
// const cors = require("cors")
// const router = require("./Routes/messagerouter.js")
// const app = express()
// require('dotenv').config()
// const connectdb = require("./database/db.js")
// app.use(express.json())

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// app.use("/api/v1/message",router)
// app.get("/",(req,res)=>{
//     res.send("Setup competed")
// })
// //  connectdb().then(() => {
// //     app.listen(process.env.PORT, () => {
// //         console.log(`Running successfully on port ${process.env.PORT}`);
// //     })
// // });
// connectdb().then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`server is running at port: ${process.env.PORT}`);
//     });
//   });

const express = require("express");
const cors = require("cors");
const router = require("./Routes/messagerouter.js");
const app = express();
require('dotenv').config();
const connectdb = require("./database/db.js");

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use("/api/v1/message", router);

app.get("/", (req, res) => {
  res.send("Kindly redirect to the link https://aware-sundress-fox.cyclic.app/api/v1/message/contact");
});

connectdb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
  });
});
