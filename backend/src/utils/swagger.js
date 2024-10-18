const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const { RX_Group_inputs, RX_Group_response } = require("../schemas/RX_Groups")
const { Drug_inputs, Drugs_response } = require("../schemas/drugs")
const { associations_response, associations_inputs } = require("../schemas/associations")
const { prescription_response, prescription_inputs } = require("../schemas/prescriptions")
const { doctor_response, doctor_inputs } = require("../schemas/doctors")

const options = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "RX Groups API DOC",
          version:"0.0.1"
      },
      components: {
          securtiySchemas: {
              bearerAuth: {
                  type: "http",
                  scheme: "bearer",
                  bearerFormat: "JWT"
              }
          }
      },
      servers:[
        {
            url:'http://localhost:8050/rx'
        }
    ],
      security: [{
          bearerAuth: []
      }]
  },
  apis: ["./src/routes/router.js"],
}

const SwaggerSpec=swaggerJsdoc(options)
SwaggerSpec.components={
    schemas:{
       RX_group_inputs:RX_Group_inputs,
       RX_Group_response:RX_Group_response,
       Drug_inputs:Drug_inputs,
       Drugs_response:Drugs_response,
       associations_inputs:associations_inputs,
       associations_response:associations_response,
       prescription_inputs:prescription_inputs,
       prescription_response:prescription_response,
       doctor_inputs:doctor_inputs,
       doctor_response:doctor_response,

    }
}

const swaggerDocs=(app,port)=>{
    app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(SwaggerSpec))
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json")
        res.send(SwaggerSpec)
    })
    console.log(`Swagger Docs avilable in http://localhost:${port}/api-doc`)

}


module.exports=swaggerDocs



