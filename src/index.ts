import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transcriptionRoutes from "./routes/transcriptionRoutes";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", transcriptionRoutes);

app.get("/", (_, res) => res.send("VoiceOwl API"));

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to start", err);
    process.exit(1);
  });

export default app;
