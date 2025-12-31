const Desklet = imports.ui.desklet;     // Gives me cinnamons desklet things
const St = imports.gi.St;               // Gives me containers and stuff.
const GLib = imports.gi.GLib;           // Glib constructs the file path
const Gio = imports.gi.Gio;             // Gio says which/what file path to follow and then load

function LittlePlanets(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

LittlePlanets.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, desklet_id) {
        Desklet.Desklet.prototype._init.call(this, metadata, desklet_id);

        this.planet = new St.Icon
        let grayPlanetFile = Gio.File.new_for_path('images/Bases/Plain/Base-Plain-Gray.png')
        let grayPlanetIcon = new Gio.FileIcon({ file: grayPlanetFile })
        this.planet.gicon = grayPlanetIcon
        this.setContent(this.planet)

    }
}

function main(metadata, desklet_id) {
    return new LittlePlanets(metadata, desklet_id);
}
