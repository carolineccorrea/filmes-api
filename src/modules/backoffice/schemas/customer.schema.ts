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
            title: {
                type: String,
                required: true
            },
            year: {
                type: String,
                required: false
            },
            rated: {
                type: String,
                required: false
            },
            released: {
                type: String,
                required: false
            },
            runtime: {
                type: String,
                required: false
            },
            genre: {
                type: String,
                required: false
            },
            director: {
                type: String,
                required: false
            },
            writer: {
                type: String,
                required: false
            },
            actors: {
                type: String,
                required: false
            },
            plot: {
                type: String,
                required: false
            },
            language: {
                type: String,
                required: false
            },
            country: {
                type: String,
                required: false
            },
            awards: {
                type: String,
                required: false
            },
            poster: {
                type: String,
                required: false
            },
            ratings: [{
                Source: String,
                Value: String,
                required: false
            }],
            metascore: {
                type: String,
                required: false
            },
            imdbrating: {
                type: String,
                required: false
            },
            imdbvotes: {
                type: String,
                required: false
            },
            imdbid: {
                type: String,
                required: false
            },
            type: {
                type: String,
                required: false
            },
            dvd: {
                type: String,
                required: false
            },
            boxoffice: {
                type: String,
                required: false
            },
            production: {
                type: String,
                required: false
            },
            website: {
                type: String,
                required: false
            },
            response: {
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