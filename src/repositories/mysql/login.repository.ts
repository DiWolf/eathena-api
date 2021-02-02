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

  //filtrar por id de cuenta
  public async searchAccounts(
    busqueda: number,
    criterio: string
  ): Promise<Login[]> {
    let cadena: any = null;

    switch (criterio) {
      case "1":
        cadena =
          " SELECT account_id,userid,email,level,state,lastlogin,last_ip FROM login WHERE account_id = ?  LIMIT 1 ";
        break;
      case "2":
        cadena =
          "SELECT account_id, userid,email,level,state,lastlogin,last_ip FROM login WHERE userid = ?";
        break;
      case "3":
        cadena =
          "SELECT account_id, userid,email,level,state,lastlogin,last_ip FROM login WHERE email = ?";
        break;
      case "4":
        cadena =
          "SELECT account_id, userid,email,level,state,lastlogin,last_ip FROM login WHERE last_ip = ?";
        break;
      case "5":
        cadena =
          "SELECT login.account_id,login.userid,char_id,email,level,state,lastlogin,last_ip FROM login,`char` WHERE 	login.account_id = `char`.account_id AND `char`.name LIKE ?%";
        break;
      default:
        cadena =
          "SELECT account_id,userid,email,level,state,lastlogin,last_ip FROM login WHERE account_id != 1";
        break;
    }

    const [rows] = await connector.execute(cadena, [busqueda]);

    return rows as Login[];
  }
}
