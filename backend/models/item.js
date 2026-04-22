const mongoose= require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },

        description: {
            type: String,
            required:true
        },

        price: {
            type: Number,
            required: true //I added this one
        },

    },
       {timestamps: true}
);
module.exports = mongoose.model('item',ItemSchema);

