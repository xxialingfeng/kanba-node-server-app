import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("users", schema);
model.updateOne({username:'bob'}, {salary:100000})
export default model;