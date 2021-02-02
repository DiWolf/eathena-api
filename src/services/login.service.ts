import { Login } from "../repositories/domain/login";
let _loginrepository: any = null;
export class LoginService {
  constructor({ LoginRepository }: any) {
    _loginrepository = LoginRepository;
  }

  public async getAllAccounts(): Promise<Login[]> {
    //  console.log("desde el servicio")
    const data = await _loginrepository.getAllAccounts();

    return data;
  }

  public async searchAccounts(
    cadena: string,
    criterio: string
  ): Promise<Login[]> {
    //
    const data = await _loginrepository.searchAccounts(cadena, criterio);
    return data;
  }
}
