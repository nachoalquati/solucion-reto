const { sequelize } = require('../database/models');


const businessController = {
    phonesByClientId: (req, res) => {

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