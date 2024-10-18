
const { v4: uuidv4 } = require("uuid");

const Drug_inputs={
    type: "object",
    properties:{
        name:{
            type:"string",
            example:"Group 1"
        },
        drug_category_id:{
            type:"int",
            example:"4"
        },
        dose_session_id:{
            type:"int",
            example:"4"
        },
        dose_timing_id:{
            type:"int",
            example:"4"
        },
        dose_frequency_id:{
            type:"int",
            example:"4"
        },
        is_active:{
            type:"boolean",
            example:"false"
        },
        
    },
    required: [ "name","is_active", ]
}


const Drugs_response={
    type: "object",
    properties:{
        id:{
            type:"uuid",
            example:uuidv4()
        },
        name:{
            type:"string",
            example:"Group 1"
        },
        drug_category_id:{
            type:"int",
            example:"4"
        },
        dose_session_id:{
            type:"int",
            example:"4"
        },
        dose_timing_id:{
            type:"int",
            example:"4"
        },
        dose_frequency_id:{
            type:"int",
            example:"4"
        },
        is_active:{
            type:"boolean",
            example:"false"
        },
        
        created_by:{
            type:"uuid",
            example:"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
        },
        
        updated_by:{
            type:"uuid",
            example:"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
        },
        
        deleted_by:{
            type:"uuid",
            example:"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
        },
        
        createdAt: {
            type: "string",
            format: "date-time",
            example: "2024-09-27T04:03:21.702Z"
        },
        
        updatedAt: {
            type: "string",
            format: "date-time",
            example: "2024-09-27T04:03:21.702Z"
        },

        deletedAt: {
            type: "string",
            format: "date-time",
            example: "2024-09-27T04:03:21.702Z"
        },
      
     
    },
    required: [ "id","name","is_active","drug_category_id","dose_timing_id","dose_session_id","dose_frequency_id","created_by","updated_by","deleted_by","createdAt","updatedAt","deletedAt" ]
}



module.exports={
    Drug_inputs,Drugs_response
}

