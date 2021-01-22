import { LoginRespository } from "../login.repository";
import connector from "../../common/mysql.persitence";
import { Login } from "../domain/login";
export class LoginRepository implements LoginRespository {
  //Devuelve todas las cuentas excluyendo la 1 que es el servidor
  public async getAllAccounts(): Promise<Login[]> {
    const [rows] = await connector.execute(
      "SELECT account_id,userid,email,level,state,lastlogin,last_ip FROM login WHERE account_id != 1"
    );

    return rows as Login[];
  }
}
