# VoiceOwl Backend

Backend API for the VoiceOwl Developer Evaluation Task.

## 📌 Overview
This service:
- Accepts an audio file URL via `POST /api/transcription`
- Mocks downloading & transcribing the audio
- Stores the audio URL, transcription text, and timestamp in MongoDB
- Returns the MongoDB document ID
- Provides `GET /api/transcriptions` to list all saved transcriptions

Built with:
- **Node.js + TypeScript**
- **Express**
- **MongoDB (Mongoose)**

---

## 🚀 Setup

### 1. Clone & Install
```bash
cd voiceowl-backend
npm install
