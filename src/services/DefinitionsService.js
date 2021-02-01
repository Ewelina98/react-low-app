export class DefinitionsService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    getDefinitions = (page) => {
        return this.networkingService.getJSON('api/definitions?page=' + page);
    }
}