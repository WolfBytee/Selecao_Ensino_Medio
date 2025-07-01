const DB = require("./BD")

const inscrito = DB.sequelize.define('inscrito', {
    id: {
        type: DB.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DB.Sequelize.STRING(100),
        allowNull: false
    },

    email: {
        type: DB.Sequelize.STRING(100),
        allowNull: false
    },

    data_nasc: {
        type: DB.Sequelize.DATE,
        allowNull: false
    },

    CPF: {
        type: DB.Sequelize.STRING(14),
        allowNull: false
    },

    curso_id: {
        type: DB.Sequelize.INTEGER,
        foreignKey: true
    }
})

const curso = DB.sequelize.define('curso', {
    id: {
        type: DB.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DB.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = inscrito

//inscrito.sync({force: true})
//curso.sync({force: true})    CUIDADO -> EXECUTAR ISSO EXCLUI TODOS OS DADOS NAS TABELAS