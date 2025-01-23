import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OWN_API_KEY as string;

if (!apiKey) {
  throw new Error('Environment variable OWN_API_KEY is not defined');
}

export function authApiKey(req: Request, res: Response, next: NextFunction): any {
  const providedApiKey = req.headers['api-key']?.toString() || req.headers['authorization']?.toString() || null;

  if (!providedApiKey) {
    return res.status(401).json({ error: 'API key is missing' });
  }

  if (providedApiKey !== apiKey) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  // If the API key is valid, pass to the next middleware or route
  next();
}
