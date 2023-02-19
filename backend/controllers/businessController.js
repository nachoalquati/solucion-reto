const { sequelize } = require('../database/models');


const businessController = {
    phonesByClientId: (req, res) => {
// Brings all the phones that a client has by passing the id of the client.
        sequelize.query(`
        SELECT id, model, observation, clientId, status, DATE_FORMAT(admissionDate, '%d/%m/%Y %H:%i:%s') as admissionDate ,  
        CASE
        WHEN status = 1 THEN 'Pendiente de arreglo'
        WHEN status = 2 THEN 'En proceso'
        WHEN status = 3 THEN 'Arreglado'
        END as stringState
        FROM phones
        WHERE clientId = ${req.body.clientId}
        `)
        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })



    },
    repairsByPhone: (req, res) => {
//Returns a list of repairs of a single phone, you should pass the phone id.
        sequelize.query(`
        select clients.name ,  phones.model ,amount, repairs.observation , DATE_FORMAT(date, '%d/%m/%Y %H:%i:%s') as date from repairs
        inner join phones on phoneId = phones.id
        inner join clients on clients.id = clientId
        where phoneId = ${req.body.phoneId}
        order by date desc
        `)
        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })



    },
    repairsList: (req, res) => {
// Bring all the repairs that are registred in the DB.
        sequelize.query(`
        select clients.name ,  phones.model ,amount, repairs.observation , DATE_FORMAT(date, '%d/%m/%Y %H:%i:%s') as date from repairs
        inner join phones on phoneId = phones.id
        inner join clients on clients.id = clientId
        order by date desc
        `)
        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })

    },
    newPhone: (req, res) => {
// Creats a new phone, you should pass a model as a string, an observation as a string and a clientId as a number.
        if(req.body.model.length<1){
            return res.status(400).json({
                error: 'Debe ingresar un modelo.'
            })
        }
        if(req.body.observation.length<1){
            return res.status(400).json({
                error: 'Debe ingresar una observacion.'
            })
        }

        console.log(req.body.clientId);
       console.log('asdasdasdasdasd');
        sequelize.query(`
        INSERT INTO phones (model, observation, clientId, admissionDate, status)
        VALUES ('${req.body.model}', '${req.body.observation}', '${req.body.clientId}', now(), 1)
        `)
        .then(user => {
            res.status(201).json({
                status: 201,
                condition: 'Success.'
            })
        })
        .catch(e => {
            delete req.body.password
            res.status(400).json({
                status: e.original,
                error: e,
                previousData: req.body
            })
        })

    },
    assingRepair: (req, res) => {

// This endpoint get a amount as a number, an observation as a string and a phoneId as a number,
// it will asaing a repair to a phone.

        if(req.body.amount.length<1){
            return res.status(400).json({
                error: 'Debe ingresar un monto.'
            })
           }
        if(req.body.observation.length<1){
            return res.status(400).json({
                error: 'Debe ingresar una observacion.'
            })
        }

       
        sequelize.query(`
        INSERT INTO repairs (amount, observation, date, phoneId)
        VALUES (${req.body.amount}, '${req.body.observation}', now(), ${req.body.phoneId})
        `)
        .then(user => {
            res.status(201).json({
                status: 201,
                condition: 'Success.'
            })
        })
        .catch(e => {
            delete req.body.password
            res.status(400).json({
                status: e.original,
                error: e,
                previousData: req.body
            })
        })

    }
}
module.exports = businessController