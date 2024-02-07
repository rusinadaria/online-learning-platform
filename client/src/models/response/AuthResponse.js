import IUser from "../IUser";

export default class AuthResponse {
    constructor(accessToken, refreshToken) {
        this.data ={
            accessToken,
            refreshToken,
            user: new IUser
        }
    }
}

// export const data = {
//     accessToken,
//     refreshToken,
//     user: IUser,
// }
