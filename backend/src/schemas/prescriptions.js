
const { v4: uuidv4 } = require("uuid");

const prescription_inputs={
    type: "object",
    properties:{

        name:{
            type:"string",
            example:"Group 1"
        },
        drug_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
        },
        rx_grp_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
        },
        rx_association_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
        },
        is_active:{
            type:"boolean",
            example:"false"
        },
        
        
    },
    required: [ "name","is_active","drug_id","rx_grp_id","rx_association_id" ]
}


const prescription_response={
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
        drug_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
        },
        rx_grp_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
        },
        rx_association_id:{
            type:"uuid",
            example:"692caba1-cc50-45a5-b8d9-f5cb0171f89a"
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
    required: [ "id","name","is_active","drug_id","rx_grp_id","rx_association_id","created_by","updated_by","deleted_by","createdAt","updatedAt","deletedAt" ]
}



module.exports={
    prescription_inputs,prescription_response
}

