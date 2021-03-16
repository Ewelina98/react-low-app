import { ajax } from "rxjs/ajax";
import { ChaptersService } from "../services/ChaptersService";
import { SectionsService } from "../services/SectionsService";
import { ArticlesService } from "../services/ArticlesService";
import { NetworkingService } from "../services/NetworkingService";
import { DefinitionsService } from "../services/DefinitionsService";
import { baseUrl } from "services/config";
import { LoginService } from "services/LoginService";
import { CountriesService } from "services/CountriesService";
import { UsersService } from "services/UsersService";

const networkingService = new NetworkingService(baseUrl, ajax);

export const dependencies = {
    loginService: new LoginService(networkingService),
    chaptersService: new ChaptersService(networkingService),
    articlesService: new ArticlesService(networkingService),
    sectionsService: new SectionsService(networkingService),
    definitionsService: new DefinitionsService(networkingService),
    countriesService: new CountriesService(networkingService),
    usersService: new UsersService(networkingService),
}