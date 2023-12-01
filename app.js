import "dotenv/config";
import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import UserRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb+srv://lingfengxia:Comprehension365@cluster0.dvm8bcp.mongodb.net/Kanbas?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/Kanbas'
mongoose.connect(CONNECTION_STRING);
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
import session from 'express-session'
const app = express();
//app.set("trust proxy", 1);
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}
));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);