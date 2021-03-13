import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    document: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    movies: [
        {
            Title: {
                type: String,
                required: true
            },
            Year: {
                type: String,
                required: false
            },
            Rated: {
                type: String,
                required: false
            },
            Released: {
                type: String,
                required: false
            },
            Runtime: {
                type: String,
                required: false
            },
            Genre: {
                type: String,
                required: false
            },
            Director: {
                type: String,
                required: false
            },
            Writer: {
                type: String,
                required: false
            },
            Actors: {
                type: String,
                required: false
            },
            Plot: {
                type: String,
                required: false
            },
            Language: {
                type: String,
                required: false
            },
            Country: {
                type: String,
                required: false
            },
            Awards: {
                type: String,
                required: false
            },
            Poster: {
                type: String,
                required: false
            },
            Ratings: [{
                Source: String,
                Value: String,
                required: false
            }],
            Metascore: {
                type: String,
                required: false
            },
            imdbRating: {
                type: String,
                required: false
            },
            imdbVotes: {
                type: String,
                required: false
            },
            imdbID: {
                type: String,
                required: false
            },
            Type: {
                type: String,
                required: false
            },
            DVD: {
                type: String,
                required: false
            },
            BoxOffice: {
                type: String,
                required: false
            },
            Production: {
                type: String,
                required: false
            },
            Website: {
                type: String,
                required: false
            },
            Response: {
                type: String,
                required: false
            },
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});