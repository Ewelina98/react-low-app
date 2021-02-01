export class ArticlesService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    getArticles(page) {
        return this.networkingService.getJSON('api/articles?page=' + page);
    }

    getArticle(id) {
        return this.networkingService.getJSON('/api/articles/' + id);
    }
}