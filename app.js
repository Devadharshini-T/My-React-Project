const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");
const leaveRoutes = require("./routes/leaveRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api", leaveRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Leave Management API is running!");
});

// Connect to MongoDB
connectDB();

// Export Express app for Vercel
module.exports = app;

// Run locally
if (require.main === module) {
  const PORT = process.env.PORT || 5050;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}