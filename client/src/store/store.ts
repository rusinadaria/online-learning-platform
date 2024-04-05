import { makeAutoObservable } from 'mobx';
import {IUser} from '../models/IUser'
import AuthService from '../services/AuthService';
import IsLogged from '../services/useAuth';

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor () {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async registration(username: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(username, email, password);
            console.log(response);
            console.log(response.data.tokens.accessToken);
            localStorage.setItem('token', response.data.tokens.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.tokens.accessToken);
            console.log(response);
            console.log(response.data.tokens.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            //const redirect = IsLogged();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    // async useAuth() {
    //     try {

    //     } catch (e) {

    //     }
    // }

}