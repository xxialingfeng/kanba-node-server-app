import Database from "../Database/index.js";
import express from 'express';
const app = express();
app.use(express.json()); 
function CourseRoutes(app) {
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    const course = Database.courses
    .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.sendStatus(204);
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { c, ...course } : c
    );
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    res.sendStatus(204);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    Database.courses = Database.courses
    .filter((c) => c._id !== id);
  });

  app.post("/api/courses", (req, res) => {
    console.log("req", req.body);
    const course = { ...req.body,
      _id: new Date().getTime().toString()};
    //Database.courses.push(course);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.send(course);
  });

  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.send(courses);

  });
}
export default CourseRoutes;