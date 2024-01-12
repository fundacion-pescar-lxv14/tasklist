import { Router } from "express"
import * as Task from "../controllers/tasks.js"
const taskRouter = Router();

taskRouter.post  ('/',      Task.createTask);
taskRouter.get   ('/:_id?', Task.getTasks  );
taskRouter.put   ('/:_id?', Task.updateTask);
taskRouter.delete('/:_id?', Task.deleteTask);

export default taskRouter;