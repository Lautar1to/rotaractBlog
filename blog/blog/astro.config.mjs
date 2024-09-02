import { defineConfig } from 'astro/config'; // Importa la función defineConfig de la configuración de Astro.
import vercel from '@astrojs/vercel'; // Importa el adaptador para Vercel.

export default defineConfig({
  output: 'server', // Define la salida del proyecto como 'server', lo que significa que será una aplicación del lado del servidor.
  adapter: vercel() // Utiliza el adaptador de Vercel para desplegar el proyecto en esta plataforma.
});