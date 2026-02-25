import { createApp } from './app';

/**
 * Punto de entrada y arranque de la aplicación
 */

const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});
