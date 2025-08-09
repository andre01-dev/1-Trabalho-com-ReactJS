import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navegacao from './router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
