const Joi = require('joi');

module.exports.productSchema = Joi.object({
    product: Joi.object({
        type: Joi.string().allow('', null),
        cat: Joi.string().allow('', null),
        cat2: Joi.string().allow('', null),
        cat3: Joi.string().allow('', null),
        name: Joi.string().allow('', null),
        description: Joi.string().allow('', null),
        intended_use: Joi.string().allow('', null),
        close: Joi.date().allow('', null),
        demand: Joi.number().allow('', null)
    }).required()
});

module.exports.expressionSchema = Joi.object({
    expression: Joi.object({
        supplier: Joi.string().required(),
        gpuRef: Joi.string().required(),
        quotation: Joi.string().required(),
        manufacturer: Joi.string().required(),
        supCountry: Joi.string().required(),
        mfAddress: Joi.string().required(),
        mfCountry: Joi.string().required(),
        deviceModel: Joi.string().allow('', null),
        catnr: Joi.string().allow('', null),
        brandName: Joi.string().allow('', null),
        iso9001: Joi.string().allow('', null),
        number9001: Joi.string().allow('', null),
        iso9001validTo:  Joi.date().allow('', null),
        iso9001onLine: Joi.string().allow('', null),
        iaf9001: Joi.string().allow('', null),
        body9001: Joi.string().allow('', null),
        iso13485: Joi.string().allow('', null),
        number13485 : Joi.string().allow('', null),
        iso13485validTo:  Joi.date().required(),
        iso13485onLine: Joi.string().allow('', null),
        iaf13485: Joi.string().allow('', null),
        body13485: Joi.string().allow('', null),
        DOC: Joi.string().allow('', null),
        DOCType: Joi.string().allow('', null),
        DOCSign: Joi.string().allow('', null),
        DOCMdClass: Joi.string().allow('', null),
        DOCIvdClass: Joi.string().allow('', null),
        DOCEq: Joi.string().allow('', null),
        CEcert: Joi.string().allow('', null),
        numberCE: Joi.string().allow('', null),
        CEcertEq: Joi.string().allow('', null),
        CEvalidTo:  Joi.date().allow('', null),
        CEonLine: Joi.string().allow('', null),
        nBody: Joi.string().allow('', null),
        ImageLabelTag: Joi.string().allow('', null),
        otherDoc: Joi.string().allow('', null),
        status: Joi.string().allow('', null),
        condition: Joi.string().allow('', null),
    }).required(),
    deleteImages:Joi.array()
});

module.exports.checkSchema = Joi.object({
    check: Joi.object({
        rating: Joi.number().required().min(1).max(10),
        body: Joi.string().required()
    }).required()
});


module.exports.commentSchema = Joi.object({
    comment: Joi.object({
        rating: Joi.number().required().min(1).max(10),
        body: Joi.string().required()
    }).required()
});

module.exports.evaluationSchema = Joi.object({
    evaluation: Joi.object({
        rating: Joi.number().required().min(1).max(10),
        body: Joi.string().required()
    }).required()
});

module.exports.assessmentSchema = Joi.object({
    assessment: Joi.object({
        rating: Joi.number().required().min(1).max(10),
        body: Joi.string().required()
    }).required()
});

module.exports.rejectSchema = Joi.object({
    reject: Joi.object({
        body: Joi.string().required()
    }).required()
});