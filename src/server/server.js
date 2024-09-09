import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const app = express();
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.CLIENT_URL, // Update this to your deployed client URL
}));

const port = process.env.PORT || 3000;

const { OAuth2 } = google.auth;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

app.post("/sendMail", async (req, res) => {
  const { name, email, subject, body } = req.body;
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate access token. Please try again later.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${body}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Email not sent. Please try again later.",
      });
    } else {
      console.log("Email sent:", info.response);
      return res.json({ success: true, message: "Email sent successfully!" });
    }
  });
});

app.listen(port, '0.0.0.0', () => {  // Ensure it listens on all network interfaces
  console.log(`Server is running on port ${port}`);
});
