import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
  // Models
import Patient from "./models/Patient.js";
import Doctor from "./models/Doctor.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

  
   // Routes

    app.post("/api/patient-signup", async (req, res) => {
        try {
            const newPatient = new Patient(req.body);
            await newPatient.save();
            res.json({ success: true, message: "Patient registered successfully" });
            } catch (err) {
                res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post("/api/doctor-signup", async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.json({ success: true, message: "Doctor registered successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.get("/", (req, res) => res.send("Lihaxa Backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));