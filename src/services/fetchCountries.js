import { dependencies } from "dependencies/Dependeencies";
import { combineLatest, concat } from "rxjs";
import { map } from "rxjs/operators";
import { Members } from "./config";

export function fetchAllCountries() {
    let page = 1;
    const total = 9;
    const countriesObs = [];

    while(page <= total){
        countriesObs.push(fetchCountries(page));
        page += 1;
    }

    return concat(
                combineLatest(...countriesObs),
           ).pipe(
                map(countriesArr => countriesArr.flat()),
                map(countries => countries.map(c => c.polishShortName)),
           );
}

function fetchCountries(page) {
    const { countriesService } = dependencies;
    return countriesService.getCountries(page).pipe(
        map(data => data[Members]),
    );
}