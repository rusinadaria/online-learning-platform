import IUser from '../models/IUser';
import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';


export default class Store {
    user = IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async registration(username, email, password) {
        try {
            const response = await AuthService.registration(username, email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}