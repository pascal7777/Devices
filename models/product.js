const mongoose = require('mongoose');
const Expression = require('./expression');
const { Schema } = mongoose;

const productSchema = new Schema({
    type: {
        type: String
    },
    cat: {
        type: String
    },
    cat2: {
        type: String
    },
    cat3: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    intended_use: {
        type: String
    },
    demand: {
        type: Number,
        min: 0
    }, 
    close: {
        type: Date
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    editor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    expressions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expression'
        }
    ],
},
    { timestamps: true }
);

productSchema.post('findOneAndDelete', async function (product) {
    if (product.expressions.length) {
        await Expression.deleteMany({ _id: { $in: product.expressions } })
    }
})

const Product = mongoose.model('Product', productSchema);



module.exports = Product; 