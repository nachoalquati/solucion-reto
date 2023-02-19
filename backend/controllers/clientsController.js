const bcrypt = require('bcryptjs');
const { sequelize } = require('../database/models');


const clientController = {
    list: (req, res) => {

        sequelize.query(`
        select * from clients
        `)

        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })



    },
    createNewClient: (req, res) => {
       
        sequelize.query(`
        INSERT INTO clients (email, name, phone)
        VALUES ('${req.body.email}', '${req.body.name}', '${req.body.phone}')
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
module.exports = clientController