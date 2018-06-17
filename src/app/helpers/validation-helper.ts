import { Injectable } from "@angular/core";

export class ValidationHelper{

    @Injectable()
     emailIsValid(address){
        // regex to validate email:
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(address).toLowerCase());
    }

    passwordIsValid(pass){
        if (!pass || pass.length < 6) {
            return false;
        }
        // regex to validate alphanumeric characters:
        const re = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
        return re.test(String(pass).toLowerCase());
    }
}