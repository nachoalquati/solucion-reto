const bcrypt = require('bcryptjs');
const { sequelize } = require('../database/models');


const clientController = {
    list: (req, res) => {

        sequelize.query(`
        select * from clients
        order by id desc
        `)

        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })



    },
    createNewClient: (req, res) => {

        if(req.body.name.length<1){
            return res.status(400).json({
                error: 'Debe ingresar un nombre.'
            })
           }
    if(req.body.email.length<1){
            return res.status(400).json({
                error: 'Debe ingresar un email.'
            })
        }

       if(req.body.phone.length<6){
        return res.status(400).json({
            error: 'Debe ingresar un teléfono  válido y mayor o igual a 6 numeros.'
        })
       }

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