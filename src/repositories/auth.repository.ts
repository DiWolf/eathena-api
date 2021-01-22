export interface AuthRepository {
  authenticate(userid: string, password: string): Promise<any>;
  renovarToken(usuario: any): Promise<any>;
}
