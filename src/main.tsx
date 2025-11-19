import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './cssTailwind/index.css'
import AppRoutes from './routes/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)
