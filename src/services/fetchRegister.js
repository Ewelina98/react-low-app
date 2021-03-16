import { dependencies } from "dependencies/Dependeencies";

export function fetchRegister(data) {
    const { usersService } = dependencies;

    return usersService.createUser(data);
}