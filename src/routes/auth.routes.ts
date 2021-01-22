import { Router } from 'express';
module.exports = function({AuthController}){
    const router = Router(); 

    router.post('/', AuthController.authenticate)

    return router;
}