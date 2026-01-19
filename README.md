# cloud-functions-game

TypeScript monorepo for a Google Cloud web game project.

## Structure

```
cloud-functions-game/
├── frontend/          # Web client application
├── backend/
│   └── functions/     # Google Cloud Functions
├── shared/            # Shared code between frontend and backend
├── scripts/            # Infrastructure and utility scripts
└── package.json       # Root workspace configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

This installs dependencies for all workspaces.

### Build

```bash
npm run build
```

Builds all packages. Individual packages can be built with:
- `npm run build:frontend`
- `npm run build:backend`
- `npm run build:shared`

## Workspaces

- **@game/frontend**: React + Vite web client (ES modules)
- **@game/backend-functions**: Google Cloud Functions (CommonJS)
- **@game/shared**: Shared utilities and types

## Frontend Development

The frontend is built with React + Vite.

### Development Server

```bash
npm run dev --workspace=frontend
```

Starts the Vite dev server at `http://localhost:3000`.

### Build

```bash
npm run build:frontend
```

Produces static assets in `frontend/dist/` ready for deployment.

### Preview Production Build

```bash
npm run preview --workspace=frontend
```

### API Integration

The frontend includes a placeholder API client in `frontend/src/api.ts` that demonstrates how to call backend HTTP endpoints. Replace the `checkHealth()` function with real game API calls as the backend is developed.

The API base URL can be configured via the `VITE_API_BASE_URL` environment variable (defaults to `http://localhost:8080`).

## Backend Development

The backend consists of HTTP-triggered Google Cloud Functions written in TypeScript.

### Build

```bash
npm run build:backend
```

Compiles TypeScript to JavaScript in `backend/functions/dist/`.

### Local Testing

Start the Functions Framework locally:

```bash
npm run start --workspace=backend/functions
```

This starts the function at `http://localhost:8080`. Test the health endpoint:

```bash
curl http://localhost:8080/health
```

### Functions

- **healthCheck**: HTTP endpoint at `GET /health` that returns service status

All functions are exported from `backend/functions/src/index.ts` and can import shared code from `@game/shared`.

### Deployment

The `dist/` directory contains compiled JavaScript ready for deployment to Google Cloud Functions. Each exported function will be deployed as a separate Cloud Function endpoint.

## TypeScript

The project uses TypeScript project references for proper monorepo support. Each package has its own `tsconfig.json` that extends the root configuration.