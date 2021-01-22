let _autherepository = null;
export class AuthService {
  constructor({ AuthRepositorySql }) {
    _autherepository = AuthRepositorySql;
  }

  public async authenticate(
    userid: string,
    user_pass: string
  ): Promise<any> {
    const data = await _autherepository.authenticate(userid, user_pass);
    if(!data){
      const error = new Error(); 
      error.status = 400; 
      error.message = "Operación no valida"
      throw error
    }
    return data;
  }
}
