const express=require('express');
const { doctors,rx_group,rx_group_drugs,drugs,rx_associations }=require('../../models');
const { v4: uuidv4 } = require('uuid');
const { DATE } = require('sequelize');



const sample= async (req,res)=>{
    res.send("Datas is Processing..!");
    console.log("Datass is Processing through routes..!")
}

const addRxGrp= async (req,res)=>{
    
    try{
        if( Object.keys(req.body).length ===0 || !req.body.name || !req.body.is_active || !req.body.drugIds ) {
            throw new Error("Error occurs while sending request datas")
        }
        
        const new_RxGroup= await rx_group.create({
            id: uuidv4(),
            name:req.body.name,
            is_active:req.body.is_active
        })
        const drugIds = req.body.drugIds;
        
        const drugDatas = drugIds.map(drug_id => ({
            rx_group_id: new_RxGroup.id,
            drug_id: drug_id
        }));

        await rx_group_drugs.bulkCreate(drugDatas)
 
        res.status(201).send(new_RxGroup ," ",drugDatas)
    }
    catch(error) {
        console.log(error)
        return error
    }
}

const addDrug=async (req,res)=>{
    try{
        
        const coming_drugs=req.body;

      if(Array.isArray(coming_drugs)) {

            const Adding_drugss = coming_drugs.map(single_drug => ({
              id: uuidv4(),
              name: single_drug.name,
              drug_category_id: single_drug.drug_category_id,
              dose_session_id:single_drug.dose_session_id,
              dose_timing_id: single_drug.dose_timing_id,
              dose_frequency_id: single_drug.dose_frequency_id,
              is_active: single_drug.is_active,
               
            }));
            console.log("Adding Drugs: ",Adding_drugss)

            const BulkProducts=await drugs.bulkCreate(Adding_drugss);
            res.status(200).send(BulkProducts);

      }else{

        console.log(req.body, " ",Object.keys(req.body).length)
        if( Object.keys(req.body).length ===0 || !req.body.name || !req.body.drug_category_id || !req.body.dose_session_id || !req.body.dose_timing_id || !req.body.dose_frequency_id || !req.body.is_active ) {
            throw new Error("Err occurs while sending request datas")
        }

           const drug = await drugs.create({
             id: uuidv4(),
              name: req.body.name,
              drug_category_id: req.body.drug_category_id,
              dose_session_id: req.body.dose_session_id,
              dose_timing_id: req.body.dose_timing_id,
              dose_frequency_id: req.body.dose_frequency_id,
              is_active: req.body.is_active,

         });
          
          res.status(200).send(drug);
          console.log(drug);
      }
  
    } 
    catch(error) {
        console.log(error);
        return error
    }
}

const getDrugs=async (req,res) =>{
    
    const Get_Drugs=await drugs.findAll({})
    
    res.status(200).send(Get_Drugs);
}

const getRxGroups =async (req,res) =>{
    
    const Get_RXGroups=await rx_group.findAll({})
    
    res.status(200).send(Get_RXGroups);
}

const getRxGroups_drugs =async (req,res) =>{
    
    const Get_Drugs=await rx_group.findAll({
        include:[
            { 
                model: rx_group_drugs,
                as: 'rx_group_drugs',
                include:[
                    {
                        model:drugs,
                        as:"drugs"
                    }
                ]
            },
        ]
    })
   
    res.status(200).send(Get_Drugs);
}

const edit_rx_group=async (req,res) =>{
    const edit_id=req.params.id;
    await rx_group.update( req.body, { where : { id : edit_id } } );
    
    const Modified_Grp=rx_group.findOne( { where: {id : edit_id}} )
    res.status(200).send(await Modified_Grp)
}

const editDrug_in_RX=async (req,res) =>{
    const edit_id=req.params.id;
    await drugs.update( req.body, { where : { id : edit_id } } );
    
    const Modified_Drug=drugs.findOne( { where: {id : edit_id}} )
    res.status(200).send(await Modified_Drug)
}

const delDrug_in_RX=async (req,res) =>{
    const del_id=req.params.id;
    const Delete_drug = await rx_group_drugs.destroy( { where : { id: del_id }} );
    res.send("Drug Deleted Success in that RX Group...!")
}

const addDrug_into_RxGrp=async(req,res)=>{
    if( Object.keys(req.body).length ===0 || !req.body.rx_group_id  || !req.body.drug_id  ) {
        throw new Error("Err occurs while sending request datas")
    }

       const drug = await rx_group_drugs.create({
          
          rx_group_id: req.body.rx_group_id,
          drug_id: req.body.drug_id,

     });
      
      res.status(200).send(drug);
      console.log(drug);
}

const addDoctor=async(req,res)=>{
    if( Object.keys(req.body).length ===0 || !req.body.name  || !req.body.mail_id  ) {
        throw new Error("Err occurs while sending request datas")
    }

       const doctor = await doctors.create({
          
          name: req.body.name,
          mail_id: req.body.mail_id,
          phone_no:req.body.phone_no,
          qualification:req.body.qualification,
          serving_from:DATE(),
          address:req.body.address,
          about:req.body.about,
          
     });

     
      
      res.status(200).send(doctor);
      console.log(doctor);
}

const addAssociation=async(req,res)=>{
    console.log(req.body)
    if( Object.keys(req.body).length ===0 || !req.body.name  || !req.body.rx_grp_id || !req.body.is_active  ) {
        throw new Error("Err occurs while sending request datas")
    }

       const association = await rx_associations.create({
          id:uuidv4(),
          name: req.body.name,
          rx_grp_id: req.body.rx_grp_id,
          is_active:req.body.is_active,
            
     });

     
      
      res.status(200).send(association);
      console.log(association);
}


const addPrescription=async(req,res)=>{
    console.log(req.body)
    if( Object.keys(req.body).length ===0 || !req.body.drug_id  || !req.body.rx_group_id || !req.body.rx_association_id || !req.body.is_active  ) {
        throw new Error("Err occurs while sending request datas")
    }

       const prescription = await rx_associations.create({
          id:uuidv4(),
          drug_id: req.body.drug_id,
          rx_group_id: req.body.rx_group_id,
          rx_association_id: req.body.rx_association_id,
          is_active:req.body.is_active,
            
     });

     
      
      res.status(200).send(prescription);
      console.log(prescription);
}



module.exports={
    sample,
    addRxGrp,
    addDrug,
    getDrugs,
    getRxGroups,
    getRxGroups_drugs,
    edit_rx_group,
    editDrug_in_RX,
    delDrug_in_RX,
    addDrug_into_RxGrp,
    addDoctor,
    addAssociation,
    addPrescription
}


