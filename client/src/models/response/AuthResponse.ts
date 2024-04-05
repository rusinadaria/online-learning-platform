import {IUser} from '../IUser'
import {Tokens} from '../Tokens'

export interface AuthResponse {
    tokens: Tokens;
    user: IUser;
}