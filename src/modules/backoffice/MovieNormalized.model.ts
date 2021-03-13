/*
export interface myType {
    Source: string;
    Value: string;
}
*/
/* eslint-disable @typescript-eslint/ban-types */
export class MovieNormalized {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings:string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;

    constructor(movieResponse: any) {
        this.Title = movieResponse.Title;
        this.Year = movieResponse.Year;
        this.Rated = movieResponse.Rated;
        this.Released = movieResponse.Released;
        this.Runtime = movieResponse.Runtime;
        this.Genre = movieResponse.Genre;
        this.Director = movieResponse.Director;
        this.Writer = movieResponse.Writer;
        this.Actors = movieResponse.Actors;
        this.Plot = movieResponse.Plot;
        this.Language = movieResponse.Language;
        this.Country = movieResponse.Country;
        this.Awards = movieResponse.Awards;
        this.Poster = movieResponse.Poster;
        this.Ratings = movieResponse.Ratings;
        this.Metascore = movieResponse.Metascore;
        this.imdbRating = movieResponse.imdbRating;
        this.imdbVotes = movieResponse.imdbVotes;
        this.imdbID = movieResponse.imdbID;
        this.Type = movieResponse.Type;
        this.DVD = movieResponse.DVD;
        this.BoxOffice = movieResponse.BoxOffice;
        this.Production = movieResponse.Production;
        this.Website = movieResponse.Website;
        this.Response = movieResponse.Response;
    }


}
