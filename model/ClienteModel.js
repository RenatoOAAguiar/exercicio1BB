var ClienteModel = Backbone.Model.extend({

    urlRoot : 'http://localhost:8080/ResteExemplo-Web/cliente',

    defaults : {
        nome: '',
        sobrenome: '',
        idade : 0
    },
    
});

var ClienteModelCollection = Backbone.Collection.extend({
    model: ClienteModel    
});