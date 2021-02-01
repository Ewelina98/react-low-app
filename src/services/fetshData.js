import { of, concat, combineLatest } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { dependencies } from "../dependencies/Dependeencies";
import { ID, Members } from "../services/config";

export function fetchData() {
    return fetchAllArticles().pipe(
        switchMap(articles => {
            return fetchAllChapters().pipe(
                switchMap(chapters => {
                    return fetchAllSubChapters().pipe(
                        switchMap(subChapters => {
                            return fetchAllSections().pipe(
                                map(sections => buildArticlesCardsPresentables(sections, chapters, subChapters, articles)),
                            );
                        }),
                    );
                }),
            );
        }),
        catchError(() => of(null)),
    );
}

function buildArticlesCardsPresentables(sections, chapters, subChapters, articles) {
    return sections.map(section => ({
        section: {
            number: extractId(section[ID]),
            title: section.name,
        },
        articles: articles
            .filter(article => article.section === section[ID])
            .map(a => ({
                content: a.content,
                id: extractId(a[ID]),
                title: `Artykuł ${extractId(a[ID])}`,
            })),
        hasChapters: chapters.some(chapter => chapter.section === section[ID]),
        chapters: chapters
            .filter(chapter => chapter.section === section[ID])
            .map(chapter => {
                const articlesChapter = articles
                    .filter(a => a.chapter === chapter[ID])
                    .map(a => ({
                        content: a.content,
                        id: extractId(a[ID]),
                        title: `Artykuł ${extractId(a[ID])}`,
                    }));

                const subChaptersChapter = subChapters.filter(sub => sub.chapter === chapter[ID]);
                const isSubChapters = subChaptersChapter.length > 0;
                
                let subsWithArticles = [];
                if (isSubChapters) {
                    subsWithArticles = subChaptersChapter.map(sub => ({
                        number: sub.localNumber.toString(),
                        title: sub.name,
                        articles: articlesChapter,
                    }));
                }

                return {
                    number: chapter.localNumber.toString(),
                    title: chapter.name,
                    articles: isSubChapters ? undefined : articlesChapter,
                    subChapters: isSubChapters ? subsWithArticles : undefined,
                    hasSubChapters: isSubChapters,
                };
            }),
        }),
    );
}

function fetchAllArticles() {
    let page = 1;
    const total = 21;
    const articlesObs = [];

    while(page <= total){
        articlesObs.push(fetchArticles(page));
        page += 1;
    }

    return concat(
                combineLatest(...articlesObs),
           ).pipe(
                map(articlesArr => articlesArr.flat()),
           );
}

function fetchArticles(page) {
    const { articlesService } = dependencies;
    return articlesService.getArticles(page).pipe(
        map(data => data[Members]),
    );
}

function fetchAllChapters() {
    return fetchChapters(1).pipe(
        switchMap(data1 => {
            return fetchChapters(2).pipe(
                map(data2 => {
                    return [
                        ...data1,
                        ...data2
                    ]
                }),
            );
        })
    );
}

function fetchChapters(page) {
    const { chaptersService } = dependencies;

    return chaptersService.getChapters(page).pipe(
        map(data => data[Members]),
    );
}


function fetchAllSubChapters() {
    return fetchSubChapters(1).pipe(
        switchMap(data1 => {
            return fetchSubChapters(2).pipe(
                map(data2 => {
                    return [
                        ...data1,
                        ...data2
                    ]
                }),
            );
        })
    );
}

function fetchSubChapters(page) {
    const { chaptersService } = dependencies;

    return chaptersService.getSubChapters(page).pipe(
        map(data => data[Members]),
    );
}

function fetchAllSections() {
    const { sectionsService } = dependencies;

    return sectionsService.getSections(1).pipe(
        map(data => data[Members]),
    );
}

function extractId(strId) {
    return strId.split('s/')[1];
}