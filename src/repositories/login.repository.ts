import { Login } from "./domain/login";

export interface LoginRespository {
  getAllAccounts(): Promise<Login[]>;
  searchAccounts(busqueda: number, criterio: string): Promise<Login[]>;
  setVipPlayer(account_id: string): Promise<any>;
  removeVipPlayer(account_id: string): Promise<any>;
}
