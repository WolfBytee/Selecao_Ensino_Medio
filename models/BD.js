const Sequelize = require('sequelize')

const sequelize = new Sequelize('inscricoes_ifms', 'postgres', '123456', {  //nome do BD, usuario, senha do BD, host, linguagem-banco
    host: 'localhost',
    dialect: 'postgresql'
})

/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexão: "+erro)
})

sequelize.sync()
  .then(() => console.log('Tabela Inscricao sincronizada'))
  .catch(err => console.error('Erro sync:', err));*/

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
