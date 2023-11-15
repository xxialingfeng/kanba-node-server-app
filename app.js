import "dotenv/config";
import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
const app = express();
app.use(
  cors({
    origin: 'https://kanbas-node-server-app-vlfd.onrender.com', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
  })
);
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);