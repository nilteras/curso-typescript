import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicSchema } from "../schemas/music-schema";
import { validationSchema } from "middleware/schema-validation";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics",validationSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;