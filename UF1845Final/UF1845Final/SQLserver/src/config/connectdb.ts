import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('appcursos', 'root', 'Legion-1975',{
    host: 'localhost',
    dialect: 'mysql'

});

export default sequelize;