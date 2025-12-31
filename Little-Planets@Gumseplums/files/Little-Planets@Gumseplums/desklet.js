const Desklet = imports.ui.desklet;

function HelloDesklet(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

HelloDesklet.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, desklet_id) {
        Desklet.Desklet.prototype._init.call(this, metadata, desklet_id);
    }
}

function main(metadata, desklet_id) {
    return new HelloDesklet(metadata, desklet_id);
}