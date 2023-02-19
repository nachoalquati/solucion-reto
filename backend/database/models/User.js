module.exports = (sequelize, DataTypes) => {

    let alias = "User"

    let cols = {

        id: {

            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true

        },
        
        email: {

            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },

        name: {

            type: DataTypes.STRING(50),
            allowNull: false,
        },
        
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }

    }

    let config = {

        timestamps: false,
        underscored: false,
        tableName: "users"
    }


    const Usuarios = sequelize.define(alias, cols, config)


    return Usuarios

}