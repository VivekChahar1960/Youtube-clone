import pkg from 'express';
const  express  = pkg;
import login from '../controllers/auth.js'
import  Router  from 'express';

const routes= express.Router();
routes.post('/login',login)
export default routes