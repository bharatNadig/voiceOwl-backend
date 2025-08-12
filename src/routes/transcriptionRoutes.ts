import { Router } from 'express';
import { postTranscription, listTranscriptions } from '../controllers/transcriptionController';

const router = Router();

router.post('/transcription', postTranscription);
router.get('/transcriptions', listTranscriptions);

export default router;