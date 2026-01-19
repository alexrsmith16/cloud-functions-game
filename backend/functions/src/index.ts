/**
 * Google Cloud Functions entry point
 * 
 * This file exports HTTP-triggered functions for deployment to Google Cloud Functions.
 * Each exported function will be available as a separate Cloud Function endpoint.
 * 
 * Function naming convention:
 * - Functions are exported with camelCase names
 * - Cloud Functions will be deployed with these exact names
 * - HTTP routes are configured in the function implementation
 */

import { healthCheck } from './functions/healthCheck';

// Export all HTTP-triggered functions
export { healthCheck };
