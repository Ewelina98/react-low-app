export class LoginService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    login(email, password) {
        const body = {
            email,
            password,
        };
        const headers = {
            'Content-type': 'application/json; charset=UTF-8',
        };

        return this.networkingService.post('login', body, headers);
    }

    logout() {
        return this.networkingService.post('logout');
    }
}