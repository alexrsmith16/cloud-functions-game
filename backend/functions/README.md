# Backend Functions

Google Cloud Functions backend for the game project.

## Structure

```
backend/functions/
├── src/
│   ├── index.ts              # Main entry point, exports all functions
│   └── functions/
│       └── healthCheck.ts    # HTTP-triggered health check function
└── dist/                      # Compiled JavaScript output
```

## Functions

### healthCheck

HTTP-triggered function that responds to `GET /health` requests.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok",
  "message": "Hello, Cloud Function!",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Development

### Build

```bash
npm run build:backend
```

Compiles TypeScript to JavaScript in the `dist/` directory.

### Local Testing

Start the Functions Framework locally:

```bash
npm run start --workspace=backend/functions
```

This will start the function at `http://localhost:8080`. You can test the health endpoint:

```bash
curl http://localhost:8080/health
```

## Deployment

The `dist/` directory contains the compiled JavaScript ready for deployment to Google Cloud Functions. Each exported function in `src/index.ts` will be deployed as a separate Cloud Function.

## Shared Code

This package imports from `@game/shared` for shared types and utilities. The shared package must be built before building the backend:

```bash
npm run build:shared
npm run build:backend
```
