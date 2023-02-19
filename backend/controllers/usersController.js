const bcrypt = require('bcryptjs');
const { counters } = require('sharp');
const db = require('../database/models');
const { sequelize } = require('../database/models');

const User = db.User
const usersController = {
    list: (req, res) => {

        sequelize.query(`
        select name, email from users
        `)
        .then(r=>{
            res.status(200).json({
                data : r[0],
                count: r[0].length
            })
        })



    },
    createNewUser: (req, res) => {
        let newUser = req.body
        let encryptedPass = bcrypt.hashSync(req.body.password, 10);

        sequelize.query(`
        INSERT INTO users (email, name, password)
        VALUES ('${req.body.email}', '${req.body.name}', '${encryptedPass}')
        `)
        .then(user => {
            res.status(201).json({
                status: 201,
                condition: 'success'
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
    login: (req, res) => {
        let userToLogin = req.body.email

        console.log(req.body.email);
        console.log(req.body.password);
        console.log(req.body);

        User.findOne({
            where: {
                email: userToLogin
            }
        })
            .then((response) => {

                if (response === null) {
                    return res.status(400).json({
                        status: 404,
                        error: 'El correo ingresado no está registrado.',
                    })
                }

                let check = bcrypt.compareSync(req.body.password, response.dataValues.password)



                if (check) {

                    req.session.userId = response.dataValues.id
                    req.session.userMail = response.dataValues.mail

                    delete response.dataValues.password

                    res.status(200).json({
                        status: 200,
                        data: response.dataValues
                    })

                }
                if (!check) {
                    res.status(401).json({
                        status: 401,
                        error: 'La contraseña ingresada es incorrecta.',
                        previousData: req.body.email
                    })

                }


            })
            .catch(error => {
                res.status(400).json({
                    status: 400,
                    error: error,
                })

            })

    },
    logout: (req, res) => {
        req.session.destroy(function (err) {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.status(201).json({
                status: 201,
                condition: 'Sesión de usuario finalizada.'
            })
        })
    }
}
module.exports = usersController