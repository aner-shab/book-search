import { Injectable } from '@angular/core';
import { CONST } from '../models/constants';
 
@Injectable()
export class AuthService {
    constructor() { }
    
    
    // not a real login authenticator


    redirectUrl: string;

    login(username: string, email: string, password: string) {
        let user = {
            username: username,
            email: email,
            password: password
        };
        sessionStorage.setItem(CONST.SESSION_STORAGE, JSON.stringify(user));
        console.log(sessionStorage.getItem(CONST.SESSION_STORAGE));
        return true;
    }
 
    logout() {
        sessionStorage.removeItem(CONST.SESSION_STORAGE);
    }

    getUser(){
        if (sessionStorage.getItem(CONST.SESSION_STORAGE) && JSON.parse(sessionStorage.getItem(CONST.SESSION_STORAGE)).username) {
            return JSON.parse(sessionStorage.getItem(CONST.SESSION_STORAGE)).username;
        }
        else {
            return "guest";
        }
    }
}