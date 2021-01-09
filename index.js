"use strict";
exports.__esModule = true;
exports.error = exports.warn = exports.success = exports.info = void 0;
var colorette_1 = require("colorette");
function getTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    return h + ":" + m + ":" + s + ":" + ms;
}
function info(text) {
    return console.log(colorette_1.gray(getTime()) + " - " + colorette_1.blueBright('info') + "    - " + text);
}
exports.info = info;
function success(text) {
    return console.log(colorette_1.gray(getTime()) + " - " + colorette_1.greenBright('success') + " - " + text);
}
exports.success = success;
function warn(text) {
    return console.log(colorette_1.gray(getTime()) + " - " + colorette_1.yellowBright('warning') + " - " + text);
}
exports.warn = warn;
function error(text) {
    return console.log(colorette_1.gray(getTime()) + " - " + colorette_1.redBright('error') + "   - " + text);
}
exports.error = error;
