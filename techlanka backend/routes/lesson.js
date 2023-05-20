import { Router } from "express";
const lessonRoute = Router();
import lessonController from "../controllers/lesson.js";



lessonRoute.post(
    "/api/lesson/create",
    lessonController.createLesson
  );
  lessonRoute.get(
    "/api/lesson/all",
    lessonController.getLesson
  );
  lessonRoute.get(
    "/api/lesson/:id",
    lessonController.getOneLesson
  );
  lessonRoute.put(
    "/api/lesson/update/:id",
    lessonController.updateLesson
  );
  lessonRoute.delete(
    "/api/lesson/delete/:id",
    lessonController.deleteLesson
  );





export default lessonRoute;