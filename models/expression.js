const mongoose = require('mongoose');

const Product = require('./product');
const Comment = require('./comment');
const Evaluation= require('./evaluation');
const { Schema } = mongoose;


const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const expressionSchema = new Schema({
    supplier:{
        type: String
    },
    supCountry:{
        type: String
    },
    gpuRef:{
        type: String
    },
    quotation: {
        type: String
    },
    manufacturer:{
        type: String
    },
    brandName:{
        type: String
    },
    mfAddress:{
        type: String
    },
    mfCountry:{
        type: String
    },
    deviceModel:{
        type: String
    },
    catnr:{
        type: String
    },
    iso9001:{
        type: String
    },
    number9001:{
        type: String
    },
    iaf9001:{
        type: String
    },
    iso9001validTo:{
        type: Date,
        default: new Date()
      },
    iso9001onLine:{
        type: String
    },
    body9001:{
        type: String
    },
    iso13485:{
        type: String
    },
    number13485:{
        type: String
    },
    iaf13485:{
        type: String
    },
    iso13485validTo:{
        type: Date,
        default: new Date()
      },
    iso13485onLine:{
        type: String
    },
    body13485:{
        type: String
    },
    DOC:{
        type: String
    },
    DOCType:{
        type: String
    },
    DOCSign:{
        type: String,
        enum: ['Yes','No','none']
    },
    DOCMdClass:{
        type: String,
        enum: ['I','IIa','IIb','III','IV','NA','none']
    },
    DOCIvdClass:{
        type: String,
        enum: ['A','B','C','D','NA','none']
    },
    DOCEq:{
        type: String
    },
    CEcert:{
        type: String
    },
    numberCE:{
        type: String
    },
    nBody:{
        type: String
    },
    CEcertEq:{
        type: String
    },
    CEvalidTo:{
        type: Date,
        default: new Date()
      },
    CEonLine:{
        type: String
    },
    imageLabel:{
        type: String
    },
    otherDoc:{
        type: String
    },
    status:{
        type: String, default: 'Initiated',
        enum: ['Initiated','Compliant', 'NonCompliant', 'Conditional', 'Cancelled', 'Suspended/Onhold','']
    },
    condition: {
        type: String
    },
    images: [ImageSchema],
    formulation:{
        type: String
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    editor:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
    checks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Check'
            }
        ],
    comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
    evaluations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Evaluation'
            }
        ],
    assessments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Assessment'
            }
        ],
    rejects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reject'
            }
        ],
},
    { timestamps: true }
);


expressionSchema.post('findOneAndDelete', async function (expression) {
    if (expression.comments.length) {
        await Comment.deleteMany({ _id: { $in: expression.comments } })
    }
})

expressionSchema.post('findOneAndDelete', async function (expression) {
    if (expression.evaluations.length) {
        await Evaluation.deleteMany({ _id: { $in: expression.evaluations} })
    }
})




const Expression = mongoose.model('Expression', expressionSchema);



module.exports = Expression; 



