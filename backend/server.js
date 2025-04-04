require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes"); // ✅ Import the user routes

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Register API routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    });

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
