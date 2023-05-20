import { Router } from "express";
const answerRoute = Router();
import answerController from "../controllers/answer.js";



answerRoute.post(
    "/api/answer/create",
    answerController.createAnswer
  );
  answerRoute.get(
    "/api/answer/all",
    answerController.getAnswer
  );
  answerRoute.get(
    "/api/answer/:id",
    answerController.getOneAnswer
  );
  answerRoute.put(
    "/api/answer/update/:id",
    answerController.updateAnswer
  );
  answerRoute.delete(
    "/api/answer/delete/:id",
    answerController.deleteAnswer
  );





export default answerRoute;