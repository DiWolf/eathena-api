import { Request, request, Response, response } from "express";
let _loginservice: any = null;
export class LoginController {
  constructor({LoginService}: any) {
    _loginservice = LoginService;
  }

  async getAllAccounts(req: Request, res: Response) {
    try {
      const data = await _loginservice.getAllAccounts();
      return res.send(data);
    } catch (error) {
      res.send(error);
    }
  }
}
