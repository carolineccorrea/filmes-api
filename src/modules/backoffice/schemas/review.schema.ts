import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: false,
        trim: true
    },
    rating: {
        type: Number,
        enum: [1,2,3,4,5],
        default: 'true'
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    Movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });