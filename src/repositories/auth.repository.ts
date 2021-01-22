export interface AuthRepository {
    authenticate(userid: string, password: string): Promise<string>;
}