
const { v4: uuidv4 } = require("uuid");

const doctor_inputs={
    type: "object",
    properties:{

        name:{
            type:"string",
            example:"Group 1"
        },
        mail_id:{
            type:"string",
            example:"rnagaraj66@gmail.com"
        },
        phone_no:{
            type:"string",
            example:"987654345"
        },
        qualification:{
            type:"string",
            example:"mbbs"
        },
        serving_from:{
            type:"date",
            example:"rnagaraj66@gmail.com"
        },
        address:{
            type:"string",
            example:"2/77, kavli nagrar,melappalayam,erode"
        },
        about:{
            type:"string",
            example:"doctor details"
        },
        is_active:{
            type:"boolean",
            example:"false"
        },
        
        
    },
    required: [ "name","is_active","mail_id","phone_no","qualification","serving_from","address","about" ]
}


const doctor_response={
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
        mail_id:{
            type:"string",
            example:"rnagaraj66@gmail.com"
        },
        phone_no:{
            type:"string",
            example:"987654345"
        },
        qualification:{
            type:"string",
            example:"mbbs"
        },
        serving_from:{
            type:"date",
            example:"rnagaraj66@gmail.com"
        },
        address:{
            type:"string",
            example:"2/77, kavli nagrar,melappalayam,erode"
        },
        about:{
            type:"string",
            example:"doctor details"
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
    required: [ "id","name","is_active","mail_id","phone_no","qualification","serving_from","address","about","created_by","updated_by","deleted_by","createdAt","updatedAt","deletedAt" ]
}



module.exports={
    doctor_inputs,doctor_response
}

