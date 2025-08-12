import axios from 'axios';

export async function downloadAudioWithRetry(url: string, retries = 3, backoffMs = 300) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      // Here we mock by doing a HEAD or small GET. But the file download itself
      // is unnecessary for the exercise — we'll call the URL to confirm it's reachable.
      const res = await axios.head(url, { timeout: 5000 });
      if (res.status >= 200 && res.status < 400) return true;
      throw new Error(`Unusable status ${res.status}`);
    } catch (err) {
      attempt++;
      if (attempt > retries) throw err;
      // exponential backoff
      await new Promise((r) => setTimeout(r, backoffMs * Math.pow(2, attempt)));
    }
  }
  return false;
}