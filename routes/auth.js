import { Router } from "express"
import * as Auth from "../controllers/auth.js"
const authRouter = Router();

authRouter.get  ('/allusers', Auth.Find  );
authRouter.post ('/login',  Auth.Validate);
authRouter.post ('/signin', Auth.Register);
authRouter.put  ('/update', Auth.Update  );

export default authRouter;