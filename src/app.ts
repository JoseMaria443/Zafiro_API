import express, { Express } from 'express';

/**
 * Configuración principal de Express/Fastify
 * Aquí se configuran middlewares, rutas y configuración global
 */

export const createApp = (): Express => {
  const app = express();

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Rutas (Se agregarán después)
  // app.use('/api/activities', activitiesRoutes);
  // app.use('/api/users', usersRoutes);

  return app;
};
