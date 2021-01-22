import { Login } from "../repositories/domain/login";
let _loginrepository = null;
export class LoginService {
  constructor({ LoginRepository }) {
    _loginrepository = LoginRepository;
  }

  public async getAllAccounts(): Promise<Login[]> {
    //  console.log("desde el servicio")
    const data = await _loginrepository.getAllAccounts();

    return data;
  }
}
