import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;
app.use(cors());

app.post("/sendMail", async (req, res) => {
  const result = req.body;
  const { name, email, subject, body } = result;
  console.log(result);
  res.json({ success: true, message: "Email sent successfully..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
