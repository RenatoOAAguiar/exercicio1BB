var ClienteView = Backbone.View.extend({

    events:{
        'click #btnSalvar' : 'salvar'
    },

    salvar: function salvar(){
        alert("Chegou aqui");
        console.log(this.model);
    }

});
var clienteView = new ClienteView({el:this.$('#dados'), model: new ClienteModel()});