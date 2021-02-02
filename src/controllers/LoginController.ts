import { Request, request, Response, response } from "express";
let _loginservice: any = null;
export class LoginController {
  constructor({ LoginService }: any) {
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

  async searchAccounts(req: Request, res: Response) {
    try {
      const { cadena, criterio } = req.query;

      const data = await _loginservice.searchAccounts(cadena, criterio);
      return res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async setVipPlayer(req: Request, res: Response) {
    const { account_id } = req.body;

    const data = await _loginservice.setVipPlayer(account_id);
    return res.send(data);
  }

  async removeVipPlayer(req: Request, res: Response) {
    const { account_id } = req.body;
    const data = await _loginservice.removeVipPlayer(account_id);
    return res.send(data);
  }
}
