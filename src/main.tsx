import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SidebarProvider } from './Context/SideBarContext.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <ThemeProvider>
  <SidebarProvider>
    <App />
  </SidebarProvider>
</ThemeProvider>
  </StrictMode>,
)
