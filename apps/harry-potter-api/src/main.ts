/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {startupRoutes,databaseConnector} from './app/startup';
const app = express();
startupRoutes(app);
databaseConnector();
const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/harry-potter/api/v1`);
});
server.on('error', console.error);
