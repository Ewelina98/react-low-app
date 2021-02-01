export class SectionsService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    getSections(page) {
        return this.networkingService.getJSON('api/sections?page' + page);
    }
    
    getSection(id) {
        return this.networkingService.getJSON('api/sections/' + id);
    }
}