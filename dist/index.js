"use strict";
require("materialize-css");
// export {Materialize,MaterializeOptions} from "./materialize";
var materialize_directive_1 = require("./materialize-directive");
exports.MaterializeDirective = materialize_directive_1.MaterializeDirective;
var materialize_module_1 = require("./materialize-module");
exports.MaterializeModule = materialize_module_1.MaterializeModule;
Waves.displayEffect();
function toast() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    Materialize.toast.apply(Materialize, args);
}
exports.toast = toast;
