import { dependencies } from "dependencies/Dependeencies";

export function fetchLogin(email, password) {
    const { loginService } = dependencies;

    return loginService.login(email, password);
}