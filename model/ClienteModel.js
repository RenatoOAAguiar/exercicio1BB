var ClienteModel = Backbone.Model.extend({

    urlRoot : '/',

    defaults : {
        id: 0,
        nome: '',
        sobrenome: ''
    	
    },
    
});

var ClienteModelCollection = Backbone.Collection.extend({
    url: '/',
    model: ClienteModel    
});