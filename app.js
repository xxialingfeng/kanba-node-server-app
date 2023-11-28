import "dotenv/config";
import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
import session from 'express-session'
const app = express();
app.set("trust proxy", 1);
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}
));
app.use(
    session({
      secret: "any string",
      resave: false,
      proxy: true,
      saveUninitialized: false,
      cookie: {
        sameSite: "none",
        secure: true,
      },
    })
   );
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);