import { Request, Response } from "express";

let _autheservice = null;
export class AuthController {
  constructor({ AuthService }) {
    _autheservice = AuthService;
  }

  async authenticate(req: Request, res: Response) {
    const { userid, user_pass } = req.body;
    const data = await _autheservice.authenticate(userid, user_pass);
    return res.send(data);
  }
}
