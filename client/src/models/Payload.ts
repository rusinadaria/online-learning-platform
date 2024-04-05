import { jwtDecode, JwtPayload } from "jwt-decode";

export interface CustomPayload extends JwtPayload {
  id: string;
}