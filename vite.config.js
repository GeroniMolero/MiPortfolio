import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MiPortfolio/', // Asegúrate de reemplazar [nombre-del-repo] con el nombre real de tu repositorio
})
