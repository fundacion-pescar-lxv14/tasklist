import { Router } from "express"
import * as Auth from "../controllers/auth.js"
const authRouter = Router();

authRouter.get  ('/',       Auth.Home    ); 
authRouter.post ('/login',  Auth.Validate); 
authRouter.post ('/signin', Auth.Register); 

export default authRouter;