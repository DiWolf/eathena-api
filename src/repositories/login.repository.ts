import { Login } from "./domain/login";

export interface LoginRespository {
  getAllAccounts(): Promise<Login[]>;
}
