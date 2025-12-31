const Desklet = imports.ui.desklet;

const UUID = "Little-Planets@Gumseplums";



function MyDesklet(metadata, desklet_id) {
    this.init(metadata, desklet_id)
}

MyDesklet.prototype = {
    _proto_: Desklet.Desklet.prototype,


	_init: function(metadata, desklet_id){
	    Desklet.Desklet.prototype._init.call(this, metadata);

    }
}

function main(metadata, desklet_id) {
    return new MyDesklet(metadata, desklet_id);
}