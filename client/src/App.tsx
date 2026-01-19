/**
 * Root React component
 */

import { useEffect, useState } from 'react';
import { checkHealth } from './api';

function App() {
  const [healthStatus, setHealthStatus] = useState<string>('Checking...');

  useEffect(() => {
    // Placeholder API call - replace with real game API calls
    checkHealth()
      .then((status) => {
        setHealthStatus(`Backend: ${status}`);
      })
      .catch((error) => {
        setHealthStatus(`Error: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Cloud Functions Game</h1>
      <p>{healthStatus}</p>
    </div>
  );
}

export default App;
