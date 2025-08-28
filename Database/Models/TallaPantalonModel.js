/* Tabla encargada de almacenar todos los posibles valores de tallas de pantalon que pueden tener los empleados */
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TallaPantalonModel extends Model {};

//Se usa el metodo init en el cual apartir de unos parametros dados realizara el mapeo
//?La explicación basica de cada campo esta explicada en otros Modelos
TallaPantalonModel.init({

    id_talla_pantalon:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_talla_pantalon:{
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'talla_pantalon',
    timestamps: false,
    freezeTableName: true
});

module.exports = TallaPantalonModel