var Batiment = require('./batimentModel')
async function list(req,res,next){
    await Batiment.find()
              .then((data,err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
    //res.end('Batiment List')
}

const create =async (req,res,next)=>{
    const { nom,nbr_niveau,description,adresse} = req.body 
    console.log(req.body.nom);
    console.log(req.params);
    await new Batiment({
        nom: nom,
        nbr_niveau: nbr_niveau,
        description: description,
        adresse:adresse
    }).save()
      .then((data, err)=>{
          if(err){
              res.status(500).json(err)
            }
            console.log(data);
      })
    
res.json('Batiment added ! nom : '+ nom + ' nbr : '+ nbr_niveau+ ' description : '+ description+ ' adresse: '+adresse)
}

const update = async (req, res, next)=>{
    await Batiment.findByIdAndUpdate(req.params.id, req.body)
              .then((data, err)=>{
                res.json(data)
              })
}

async function deleteU(req, res, next) {
    await Batiment.findByIdAndDelete(req.params.id)
              .then((data, err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
}

module.exports = { create, list, update, deleteU }