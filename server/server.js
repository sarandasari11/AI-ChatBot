import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import testRoute from "./routes/testRoute.js";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.disable("x-powered-by");

// ✅ Security Middleware
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later."
}));

// ✅ Core Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use(morgan("dev"));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoute);

// ✅ Protected Test Route
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, protected route access granted.` });
});

// ✅ Global Error Handler (Optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
