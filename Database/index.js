import assert from 'console';
const courses = await import("./courses.json", {
  with: { type: "json" },
});
import modules from './modules.json' assert { type: "json" };
import assignments from './assignments.json' assert { type: "json" };
import enrollments from './enrollments.json' assert { type: "json" };
import grades from './grades.json' assert { type: "json" };
import users from './users.json' assert { type: "json" };

const data = {
  courses,
  modules,
  assignments,
  users,
  enrollments,
  grades
};

export default data;