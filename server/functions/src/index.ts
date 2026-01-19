/**
 * Google Cloud Functions entry point
 */

import { greet } from '@game/shared';

export const helloWorld = (req: any, res: any) => {
  res.send(greet('Cloud Function'));
};
