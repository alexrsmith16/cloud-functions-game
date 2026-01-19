/**
 * HTTP API client for backend communication
 * 
 * This module contains placeholder functions for backend API calls.
 * Replace these with real game/economy API endpoints as the backend is developed.
 * 
 * All functions use standard HTTP request/response (no WebSockets).
 * Designed to be polling-friendly for game state updates.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Placeholder: Check backend health endpoint
 * 
 * TODO: Replace with real game API calls such as:
 * - GET /api/game/state - Get current game state
 * - POST /api/game/action - Submit player action
 * - GET /api/economy/resources - Get resource status
 * 
 * @returns Promise resolving to health status string
 */
export async function checkHealth(): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.status || 'ok';
  } catch (error) {
    // In development, backend may not be running yet
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Backend not reachable. Ensure Cloud Functions are deployed or local server is running.');
    }
    throw error;
  }
}
