import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.post("/sendMail", async (req, res) => {
  const result = req.body;
  const [name, email, subject, body] = [
    result.name,
    result.email,
    result.subject,
    result.body,
  ];
//   console.log(result.name);
  res.json({ success: true, message: "Email sent successfully..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
