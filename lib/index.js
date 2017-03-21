'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fadeAlert = fadeAlert;
exports.tips = tips;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FadeAlert = require('./FadeAlert');

var _FadeAlert2 = _interopRequireDefault(_FadeAlert);

var _Tips = require('./Tips');

var _Tips2 = _interopRequireDefault(_Tips);

//info, warning, error : string text to show (different icon maybe)
//buttons: {cancel: {label: "cancel", onClick: () => {}}, confirm: {...}, danger: {...}}

function fadeAlert(_ref) {
  var info = _ref.info;
  var warning = _ref.warning;
  var error = _ref.error;
  var buttons = _ref.buttons;

  var containerId = "fadeAlertContainer" + Date.now();
  var p = document.getElementById(containerId);
  if (!p) {
    var p = document.createElement('div');
    p.id = containerId;
    document.body.appendChild(p);
    _reactDom2['default'].render(_react2['default'].createElement(_FadeAlert2['default'], {
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
  var info = _ref2.info;
  var warning = _ref2.warning;
  var error = _ref2.error;
  var duration = _ref2.duration;
  var onDisappear = _ref2.onDisappear;

  var containerId = "tipsContainer" + Date.now();
  var p = document.getElementById(containerId);
  if (!p) {
    var p = document.createElement('div');
    p.id = containerId;
    document.body.appendChild(p);

    _reactDom2['default'].render(_react2['default'].createElement(_Tips2['default'], {
      containerId: containerId,
      info: info,
      warning: warning,
      error: error,
      duration: duration,
      onDisappear: onDisappear }), p);
  }
}

var Modal = require('./Modal');
exports.Modal = Modal;
var Enhances = require('./enhances');
exports.Enhances = Enhances;
var Card = require('./Card');
exports.Card = Card;
var List = require('./List');
exports.List = List;
var Drawer = require('./Drawer');
exports.Drawer = Drawer;