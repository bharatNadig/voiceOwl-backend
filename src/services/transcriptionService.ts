import Transcription from '../models/transcriptionModel';

export const createTranscription = async (audioUrl: string) => {
  // Mock download and transcription
  const transcriptionText = "transcribed text";

  const newTranscription = new Transcription({
    audioUrl,
    transcription: transcriptionText
  });

  return await newTranscription.save();
};

export const getAllTranscriptions = async () => {
  return await Transcription.find().sort({ createdAt: -1 });
};