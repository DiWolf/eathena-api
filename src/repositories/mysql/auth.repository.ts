import { AuthRepository } from "../auth.repository";
import conector from "../../common/mysql.persitence";
const { generarJWT } = require("../../helpers/jwt.helper");
export class AuthRepositorySql implements AuthRepository {
  public async authenticate(userid: string, user_pass: string): Promise<any> {
    try {
      const [
        rows,
      ]: any[] = await conector.execute(
        "SELECT account_id,userid,level FROM login WHERE userid = ? AND user_pass = ? AND state = 0 LIMIT 1",
        [userid, user_pass]
      );

      const token = await generarJWT(
        rows[0].account_id,
        rows[0].userid,
        rows[0].level
      );
      const user = rows[0];
      const data = { token, user };

      return data;
    } catch (error) {
      console.log(error);
      throw Error("Usuario o contraseña no validos.");
    }
  }
}
