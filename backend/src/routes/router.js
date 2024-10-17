const express = require("express");
const router = express.Router()
const rx_controllers = require('../controllers/Rx_Controllers')

router.post('/addRxGrp',rx_controllers.addRxGrp)

router.post('/addDrug',rx_controllers.addDrug)

router.get('/getDrugs',rx_controllers.getDrugs)

router.get('/getRxGroups',rx_controllers.getRxGroups)

router.get('/getRxGroups_drugs',rx_controllers.getRxGroups_drugs)

router.put('/edit_rx_group/:id',rx_controllers.edit_rx_group)

router.put('/editDrug_in_RX/:id',rx_controllers.editDrug_in_RX)

router.delete('/delDrug_in_RX/:id',rx_controllers.delDrug_in_RX)

router.post('/addDrug_into_RxGrp',rx_controllers.addDrug_into_RxGrp)

router.post('/addDoctor',rx_controllers.addDoctor)

router.post('/addAssociation',rx_controllers.addAssociation)

router.post('/addPrescription',rx_controllers.addPrescription)




module.exports=router
