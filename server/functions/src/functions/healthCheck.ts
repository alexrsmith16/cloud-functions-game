/**
 * Health check endpoint
 * 
 * HTTP-triggered Cloud Function that responds to GET /health requests.
 * Used to verify the backend is running and accessible.
 * 
 * @param req - Express request object
 * @param res - Express response object
 */

import { Request, Response } from 'express';
import { greet } from '@game/shared';

export function healthCheck(req: Request, res: Response): void {
  // Set CORS headers for web client access
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Return health status
  res.status(200).json({
    status: 'ok',
    message: greet('Cloud Function'),
    timestamp: new Date().toISOString(),
  });
}
