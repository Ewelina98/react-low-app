export class ChaptersService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    getChapters(page) {
        return this.networkingService.getJSON('api/chapters?page=' + page);
    }
    
    getChapter(id) {
        return this.networkingService.getJSON('api/chapters/' + id);
    }

    getSubChapters(page) {
        return this.networkingService.getJSON('api/subsections?page=' + page);
    }
    
    getSubChapter(id) {
        return this.networkingService.getJSON('api/subsections/' + id);
    }
}