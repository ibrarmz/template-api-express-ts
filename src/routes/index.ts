import express, { Router } from "express";
import { authApiKey } from "../middlewares/auth";
// import ruta from './ruta';

const router : Router = express.Router();
router.use(authApiKey);

//router.use('/ruta', ruta);

module.exports = router;