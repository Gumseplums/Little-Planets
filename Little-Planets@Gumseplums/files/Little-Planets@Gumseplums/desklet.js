const Desklet = imports.ui.desklet;
const GLib = imports.gi.GLib;
const St = imports.gi.St;

const UUID = "Little-Planets@Gumseplums";
const DESKLET_ROOT = imports.ui.deskletManager.deskletMeta[UUID].path;

function MyDesklet(metadata, desklet_id) {
    this.init(metadata, desklet_id)
}

function main(metadata, desklet_id) {
    return new MyDesklet(metadata, desklet_id);
}

MyDesklet.prototype = {
    _proto_: Desklet.Desklet.prototype,


	_init: function(metadata, desklet_id){
	    Desklet.Desklet.prototype._init.call(this, metadata);

    //do the settings thing

    this.settings = new Settings.DeskletSettings(this, this.metadata["uuid"], desklet_id);

    this.settings.bindPropert(Settings.BindingDirection.IN, "planet-size", "planetSize", this.on_settings_changed);
    

    }
}    