const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // IMPORTANT: Replace with your own email service provider's details
  const transporter = nodemailer.createTransport({
    service: "gmail", // e.g., 'gmail', 'yahoo', 'outlook'
    auth: {
      user: "siddy0041@gmail.com", // Your email address
      pass: "vpdwwxmckirvbicv", // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: "your-email@gmail.com", // The email address where you want to receive messages
    subject: `New message from ${name}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Something went wrong.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C to stop the server`);
});
