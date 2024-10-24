const express=require('express');
const { doctors,rx_group,rx_group_drugs,drugs,rx_associations }=require('../../models');
const { v4: uuidv4 } = require('uuid');



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
              is_morn:single_drug.is_morn,
              is_afternoon:single_drug.is_afternoon,
              is_evening:single_drug.is_evening,
              is_night:single_drug.is_night,
              dose_timing_id: single_drug.dose_timing_id,
              dose_frequency_id: single_drug.dose_frequency_id,
              is_active: single_drug.is_active,
               
            }));
            console.log("Adding Drugs: ",Adding_drugss)

            const BulkProducts=await drugs.bulkCreate(Adding_drugss);
            res.status(200).send(BulkProducts);

      }else{

        console.log(req.body, " ",Object.keys(req.body).length)
        if( Object.keys(req.body).length ===0 || !req.body.name || !req.body.drug_category_id  || !req.body.dose_timing_id || !req.body.dose_frequency_id || !req.body.is_active ) {
            throw new Error("Err occurs while sending request datas")
        }

           const drug = await drugs.create({
             id: uuidv4(),
              name: req.body.name,
              drug_category_id: req.body.drug_category_id,
              is_morn: req.body.is_morn,
              is_afternoon: req.body.is_afternoon,
              is_evening: req.body.is_evening,
              is_night: req.body.is_night,
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
    //   console.log(drug);
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
          serving_from:Date(),
          address:req.body.address,
          about:req.body.about,
          
     });

     
      
      res.status(200).send(doctor);
      console.log(doctor);
}

const addAssociation=async(req,res)=>{
    console.log(req.body)
    if( Object.keys(req.body).length ===0 || !req.body.rx_grp_Ids || !req.body.is_active  ) {
        throw new Error("Err occurs while sending request datas")
    }
    const { rx_grp_Ids } = req.body;
    
    for (const rx_grp_id of rx_grp_Ids) {
        await rx_associations.create({
            id: uuidv4(),
            rx_grp_id: rx_grp_id,
            is_active: req.body.is_active
        });
    }

      res.status(200).send("Insert RX Grps success into Association");

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

const EditDrug_in_RX=async(req,res)=>{

    // console.log(req.body)
    if( Object.keys(req.body).length ===0  ) {
        throw new Error("Err occurs while sending request datas")
    }

    if(req.body.Update_drugs){

        const {Update_drugs,Delete_drugs,insert_drugs} = req.body;
        
        for(const updates of Update_drugs) {
            const {id,updateDatas}=updates;
            await drugs.update(updateDatas,{ where: { id: id} })  
        }    
        
        const updatedGrugs= await drugs.findAll({
            where:{id:Update_drugs.map(update=> update.id) } 
        })
        res.status(200).send("Updated Success: ",updatedGrugs);
    }

    if(req.body.Delete_drugs) {

        // Type Delete_drugs -- Array
        
        const {Delete_drugs}=req.body;
        await rx_group_drugs.destroy( { where : { id: Delete_drugs }} );
         res.status(200).send("Drug Deleted Success in that RX Group...!")

    }

    if(req.body.add_drugs_into_RX) {
        
        const add_drugs_into_RX = req.body.add_drugs_into_RX;
        console.log(req.body.add_drugs_into_RX)
        if(  !add_drugs_into_RX.rx_group_id  || !add_drugs_into_RX.drug_Ids  ) {
            throw new Error("Err occurs while sending request datas")
        }
    
        const drugIds = add_drugs_into_RX.drug_Ids;
        console.log("Drugs idss : ", drugIds)
        const drugDatas = drugIds?.map(drug_idd => ({
            rx_group_id: add_drugs_into_RX.rx_group_id,
            drug_id: drug_idd
        }));

        await rx_group_drugs.bulkCreate(drugDatas)

        const drug = await rx_group_drugs.create({
              
              rx_group_id: add_drugs_into_RX.rx_group_id,
              drug_id: add_drugs_into_RX.drug_id,
    
         });
          
          res.status(200).send(drug);      
        
        // res.status(201).send()

    }

}

const getAssociation = async (req,res) =>{
    
    const Rx_associations = await rx_associations.findAll({
    
    include:[
        {

            model:rx_group,
            as:'rx_group',
  
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
         }
    ],

    })
    
    res.status(200).send(Rx_associations);
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
    addPrescription,
    EditDrug_in_RX,
    getAssociation
}


