export interface Login {
  account_id: number;
  userid: string;
  user_pass: string;
  sex: string;
  email: string;
  level: number;
  state: number;
  unban_time: number;
  expiration_time: number;
  logincount: number;
  lastlogin: Date;
  last_ip: number;
}
