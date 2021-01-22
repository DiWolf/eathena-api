import { Request, Response } from "express";

let _autheservice: any = null;
export class AuthController {
  constructor({ AuthService }: any) {
    _autheservice = AuthService;
  }

  async authenticate(req: Request, res: Response) {
    const { userid, user_pass } = req.body;
    const data = await _autheservice.authenticate(userid, user_pass);
    return res.send(data);
  }
  async renovarToken(req: any, res: Response) {
    const auth = req.auth;
    const data = await _autheservice.renovarToken(auth);
    return res.send(data);
  }
}
