'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _WindowSizeListener = require('./WindowSizeListener');

var _WindowSizeListener2 = _interopRequireDefault(_WindowSizeListener);

var _InputValueCheck = require('./InputValueCheck');

var _InputValueCheck2 = _interopRequireDefault(_InputValueCheck);

var Enhances = {
  WindowSizeListener: _WindowSizeListener2['default'],
  InputValueCheck: _InputValueCheck2['default']
};

exports['default'] = Enhances;
module.exports = exports['default'];