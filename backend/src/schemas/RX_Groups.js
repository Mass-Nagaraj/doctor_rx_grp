
const { v4: uuidv4 } = require("uuid");

const RX_Group_inputs={
    type: "object",
    properties:{

        name:{
            type:"STRING",
            example:"Group 1"
        },
        is_active:{
            type:"boolean",
            example:"false"
        },
        
        
    },
    required: [ "name","is_active", ]
}


const RX_Group_response={
    type: "object",
    properties:{
        id:{
            type:"uuid",
            example:uuidv4()
        },
        name:{
            type:"STRING",
            example:"Group 1"
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
    required: [ "id","name","is_active","created_by","updated_by","deleted_by","createdAt","updatedAt","deletedAt" ]
}



module.exports={
    RX_Group_inputs,RX_Group_response
}

