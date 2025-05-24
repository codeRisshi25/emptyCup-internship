import mongoose, { Schema } from 'mongoose';

const ListingSchema = new Schema ({
    name : String,
    rating: Number,
    description: String,
    projects: Number,
    years: Number,
    price: Number,
    phNumbers: [String]
})

const Listing = mongoose.model('Listing', ListingSchema);

export default Listing;