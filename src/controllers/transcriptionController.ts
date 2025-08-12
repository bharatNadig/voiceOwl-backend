import { Request, Response } from 'express';
import * as transcriptionService from '../services/transcriptionService';

export const postTranscription = async (req: Request, res: Response) => {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: 'audioUrl is required' });

    const record = await transcriptionService.createTranscription(audioUrl);
    res.json({ id: record._id });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const listTranscriptions = async (req: Request, res: Response) => {
  try {
    const records = await transcriptionService.getAllTranscriptions();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};