const express = require("express");
const router = express.Router()
const rx_controllers = require('../controllers/Rx_Controllers')

/**
 * @swagger
 * /addRxGrp:
 *   post:
 *     tags:
 *      - RX Groups
 *     summary: Create a new RX Group
 *     description: This endpoint returns a created rx_group from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/RX_group_inputs'
 *     responses:
 *       201:
 *         description: Create action
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/RX_Group_response'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addRxGrp',rx_controllers.addRxGrp)

/**
 * @swagger
 * /addDrug:
 *   post:
 *     tags:
 *      - Drugs
 *     summary: Create a new Drug
 *     description: This endpoint returns a created drug from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/Drug_inputs'
 *     responses:
 *       201:
 *         description: Create drug
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/Drugs_response'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addDrug',rx_controllers.addDrug)

/**
 * @swagger
 * /getDrugs:
 *   get:
 *     tags:
 *      - Drugs
 *     summary: Retrieve a list of drugs
 *     description: This endpoint returns a list of drugs from the database.
 *     responses:
 *       200:
 *         description: A list of drugs
 *         content:
 *           application/json:
 *             schemas:
 *                  drugs:
 *                   type: array
 *                   items:
 *                     type: object
*                   properties:
 *                    id:
 *                      type: integer
 *                    name:
 *                      type: string
 */

router.get('/getDrugs',rx_controllers.getDrugs)

/**
 * @swagger
 * /getRxGroups:
 *   get:
 *     tags:
 *      - RX Groups
 *     summary: Retrieve a list of RX Groups
 *     description: This endpoint returns a list of RX Groups from the database.
 *     responses:
 *       200:
 *         description: A list of RX Groups
 *         content:
 *           application/json:
 *             schemas:
 *                  rx_group:
 *                   type: array
 *                   items:
 *                     type: object
 *                   properties:
 *                    id:
 *                      type: integer
 *                    name:
 *                      type: string
 */

router.get('/getRxGroups',rx_controllers.getRxGroups)

/**
 * @swagger
 * /getRxGroups_drugs:
 *   get:
 *     tags:
 *      - RX Groups
 *     summary: Retrieve a list of RX Groups
 *     description: This endpoint returns a list of RX Groups including their drugs from the database.
 *     responses:
 *       200:
 *         description: A list of RX Groups with drugs
 *         content:
 *           application/json:
 *             schemas:
 *                  rx_group:
 *                   type: array
 *                   items:
 *                     type: object
 *                   properties:
 *                    id:
 *                      type: integer
 *                    name:
 *                      type: string
 */

router.get('/getRxGroups_drugs',rx_controllers.getRxGroups_drugs)

/**
 * @swagger
 * /edit_rx_group/{id}:
 *   put:
 *     tags:
 *      - RX Groups
 *     summary: This endpoint returns a Edited of RX Group.
 *     parameters:
*        - in: path
*          name: id   # Note the name is the same as in the path
*          required: true
*          type: integer
*          minimum: 1
*          description: The Action ID.
 *     description: Edited of RX Group.
 *     responses:
 *       200:
 *         description: Edit Rx Group
 *         content:
 *           application/json:
 *             schemas:
 *                  actions:
 *                   type: array
 *                   items:
 *                     type: object
*                   properties:
 *                    id:
 *                      type: integer
 *              
 */

router.put('/edit_rx_group/:id',rx_controllers.edit_rx_group)

/**
 * @swagger
 * /editDrug_in_RX/{id}:
 *   put:
 *     tags:
 *      - Drugs
 *     summary: This endpoint returns a Edited of Drug in the .
 *     parameters:
*        - in: path
*          name: id   # Note the name is the same as in the path
*          required: true
*          type: integer
*          minimum: 1
*          description: The Action ID.
 *     description: Edited of RX Group.
 *     responses:
 *       200:
 *         description: Edit Rx Group
 *         content:
 *           application/json:
 *             schemas:
 *                  actions:
 *                   type: array
 *                   items:
 *                     type: object
*                   properties:
 *                    id:
 *                      type: integer
 *              
 */

router.put('/editDrug_in_RX/:id',rx_controllers.editDrug_in_RX)

/**
 * @swagger
 * /delDrug_in_RX/{id}:
 *   delete:
 *     tags:
 *      - Drugs
 *     summary: This endpoint returns a Deleted succesFully msg .
 *     parameters:
*        - in: path
*          name: id   # Note the name is the same as in the path
*          required: true
*          type: integer
*          minimum: 1
*          description: The Action ID.
 *     description: Delete msg 
 *     responses:
 *       200:
 *         description: Delete success Msg
 *         content:
 *           application/json:
 *             schemas:
 *                  actions:
 *                   type: array
 *                   items:
 *                     type: object
*                   properties:
 *                    id:
 *                      type: integer
 *              
 */

router.delete('/delDrug_in_RX/:id',rx_controllers.delDrug_in_RX)

/**
 * @swagger
 * /addDrug_into_RxGrp:
 *   post:
 *     tags:
 *      - Drugs
 *     summary: Create a actual_est
 *     description: This endpoint returns a created drug into RX group from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/Actual_est_Req'
 *     responses:
 *       201:
 *         description: Create action
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/Autual_est_Responce'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addDrug_into_RxGrp',rx_controllers.addDrug_into_RxGrp)

/**
 * @swagger
 * /addDoctor:
 *   post:
 *     tags:
 *      - Doctors
 *     summary: Create a new Doctor
 *     description: This endpoint returns a created doctor from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/doctor_inputs'
 *     responses:
 *       201:
 *         description: Create a new Doctor
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/doctor_response'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addDoctor',rx_controllers.addDoctor)

/**
 * @swagger
 * /addAssociation:
 *   post:
 *     tags:
 *      - Associations
 *     summary: Create a new Association
 *     description: This endpoint returns a created association from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/associations_inputs'
 *     responses:
 *       201:
 *         description: Create association
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/associations_response'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addAssociation',rx_controllers.addAssociation)

/**
 * @swagger
 * /addPrescription:
 *   post:
 *     tags:
 *      - Prescriptions
 *     summary: Create a new Prescription
 *     description: This endpoint returns a created prescription from the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/prescription_inputs'
 *     responses:
 *       201:
 *         description: Create prescription
 *         content:
 *           application/json:
*               schema:
*                 $ref: '#/components/schemas/prescription_response'
*         403:
 *           description: Bad Request or Parameter have been missed
*         500:
 *           description: Database Query-related errors
 *              
 */

router.post('/addPrescription',rx_controllers.addPrescription)

router.post('/EditDrug_in_RX',rx_controllers.EditDrug_in_RX)

router.get('/getAssociation',rx_controllers.getAssociation)


module.exports=router
