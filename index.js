"use strict";
exports.__esModule = true;
exports.error = exports.warn = exports.success = exports.info = void 0;
var colorette_1 = require("colorette");
function getTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = String(date.getMilliseconds());
    switch (ms.length) {
        case 1:
            ms = '00' + ms;
            break;
        case 2:
            ms = '0' + ms;
            break;
    }
    ;
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
