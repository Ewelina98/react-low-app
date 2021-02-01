import { ajax } from "rxjs/ajax";
import { ChaptersService } from "../services/ChaptersService";
import { SectionsService } from "../services/SectionsService";
import { ArticlesService } from "../services/ArticlesService";
import { NetworkingService } from "../services/NetworkingService";
import { DefinitionsService } from "../services/DefinitionsService";
import { baseUrl } from "services/config";

const networkingService = new NetworkingService(baseUrl, ajax);

export const dependencies = {
    chaptersService: new ChaptersService(networkingService),
    articlesService: new ArticlesService(networkingService),
    sectionsService: new SectionsService(networkingService),
    definitionsService: new DefinitionsService(networkingService),
} 