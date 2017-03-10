'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;
exports.fadeAlert = fadeAlert;
exports.tips = tips;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FadeAlert = require('./src/FadeAlert');

var _FadeAlert2 = _interopRequireDefault(_FadeAlert);

var _Tips = require('./src/Tips');

var _Tips2 = _interopRequireDefault(_Tips);

var _Modal = require('./src/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//info, warning, error : string text to show (different icon maybe)
//buttons: {cancel: {label: "cancel", onClick: () => {}}, confirm: {...}, danger: {...}}
function fadeAlert(_ref) {
  var info = _ref.info,
      warning = _ref.warning,
      error = _ref.error,
      buttons = _ref.buttons;

  var containerId = "fadeAlertContainer" + Date.now();
  var p = document.getElementById(containerId);
  if (!p) {
    var p = document.createElement('div');
    p.id = containerId;
    document.body.appendChild(p);
    _reactDom2.default.render(_react2.default.createElement(_FadeAlert2.default, {
      containerId: containerId,
      info: info,
      warning: warning,
      error: error,
      buttons: buttons }), p);
  }
}

//info, warning, error : string text to show (different styles)
//duration : millisecond (default: 1800)
function tips(_ref2) {
  var info = _ref2.info,
      warning = _ref2.warning,
      error = _ref2.error,
      duration = _ref2.duration,
      onDisappear = _ref2.onDisappear;

  var containerId = "tipsContainer" + Date.now();
  var p = document.getElementById(containerId);
  if (!p) {
    var p = document.createElement('div');
    p.id = containerId;
    document.body.appendChild(p);

    _reactDom2.default.render(_react2.default.createElement(_Tips2.default, {
      containerId: containerId,
      info: info,
      warning: warning,
      error: error,
      duration: duration,
      onDisappear: onDisappear }), p);
  }
}

var Modal = exports.Modal = _Modal2.default;
