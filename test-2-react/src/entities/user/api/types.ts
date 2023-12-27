export type LoginReq = {
  email: string
};

export type LoginResponse = {
  ok: boolean;
  message?: string;
}