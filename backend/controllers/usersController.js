const bcrypt = require('bcryptjs');
const { counters } = require('sharp');
const db = require('../database/models');
const { sequelize } = require('../database/models');

const User = db.User
const usersController = {
    list: (req, res) => {
// This returns a list of all the users existing in the DB.
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

    //This controller recibes an email as string a name as a string and,
    // a pass as a string and hashes the password to finally insert the data,
    //into the DB.
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
        //Check that the new hashed password matches the existing one
        //and if it matches it creats a session and passes a cookie to
        // the client.
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
        //Destroys the existing session.
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