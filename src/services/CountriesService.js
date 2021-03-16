export class CountriesService {
    constructor(networkingService) {
        this.networkingService = networkingService;
    }

    getCountries = (page) => {
        return this.networkingService.getJSON('api/countries?page=' + page);
    }
}