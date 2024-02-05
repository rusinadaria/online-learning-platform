import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponce } from "../models/response/AuthResponce";
import { response } from "express";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/login', {email, password})
    }

    static async registration(username: string, email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/registration', {username, email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}

