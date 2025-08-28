const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class AuxMovilidadModel extends Model {};

AuxMovilidadModel.init({

    id_aux_movilidad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    monto_aux_movilidad:{
        type: DataTypes.DOUBLE,
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'aux_movilidad',
    timestamps: false,
    freezeTableName: true
});

module.exports = AuxMovilidadModel