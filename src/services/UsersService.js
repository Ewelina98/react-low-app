export class UsersService {
  constructor(networkingService) {
    this.networkingService = networkingService;
  }

  createUser(data) {
    const body = { ...data };
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    return this.networkingService.post("/users", body, headers);
  }
}
