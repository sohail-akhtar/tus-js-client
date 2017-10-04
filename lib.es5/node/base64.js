"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSupported = undefined;
exports.encode = encode;

var _bufferFrom = require("buffer-from");

var _bufferFrom2 = _interopRequireDefault(_bufferFrom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function encode(data) {
  return (0, _bufferFrom2.default)(String(data)).toString("base64");
}

var isSupported = exports.isSupported = true;