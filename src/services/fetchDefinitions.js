import { map } from "rxjs/operators";
import { dependencies } from "../dependencies/Dependeencies";
import { Members } from "../services/config";

export function fetchDefinitions(page) {
    const { definitionsService } = dependencies;

    return definitionsService.getDefinitions(page).pipe(
        map(data => data[Members]),
        map(definitions => {
            return definitions.map(d => ({
                name: d.phrase,
                explanation: d.explanation,
            }));
        }),
   );
}