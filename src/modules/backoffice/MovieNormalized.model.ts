export class MovieNormalized {
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings:string;
    metascore: string;
    imdbrating: string;
    imdbvotes: string;
    imdbid: string;
    type: string;
    dvd: string;
    boxoffice: string;
    production: string;
    website: string;
    response: string;

    constructor(movieresponse: any) {
        this.title = movieresponse.title;
        this.year = movieresponse.year;
        this.rated = movieresponse.rated;
        this.released = movieresponse.released;
        this.runtime = movieresponse.runtime;
        this.genre = movieresponse.genre;
        this.director = movieresponse.director;
        this.writer = movieresponse.writer;
        this.actors = movieresponse.actors;
        this.plot = movieresponse.plot;
        this.language = movieresponse.language;
        this.country = movieresponse.country;
        this.awards = movieresponse.awards;
        this.poster = movieresponse.poster;
        this.ratings = movieresponse.ratings;
        this.metascore = movieresponse.metascore;
        this.imdbrating = movieresponse.imdbrating;
        this.imdbvotes = movieresponse.imdbvotes;
        this.imdbid = movieresponse.imdbid;
        this.type = movieresponse.type;
        this.dvd = movieresponse.dvd;
        this.boxoffice = movieresponse.boxoffice;
        this.production = movieresponse.production;
        this.website = movieresponse.website;
        this.response = movieresponse.response;
    }


}
