'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../styles/modal.less');

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.setState({
          open: true
        });
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var close = this.props.close;

      this.setState({
        open: false
      });

      setTimeout(function () {
        close();
      }, 300);
    }
  }, {
    key: 'getStartPosition',
    value: function getStartPosition(startPosition) {
      var windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
      };
      //console.log(" windowSize : ", windowSize, ", startPosition : ", startPosition);
      return startPosition ? {
        left: startPosition.left - windowSize.w / 2,
        top: startPosition.top - windowSize.h / 2
      } : {
        left: 0,
        top: 0
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          close = _props.close,
          startPosition = _props.startPosition;
      var open = this.state.open;

      var _getStartPosition = this.getStartPosition(startPosition),
          left = _getStartPosition.left,
          top = _getStartPosition.top;

      return _react2.default.createElement(
        _Portal2.default,
        {
          portalId: "modal_" + Date.now(),
          className: open ? "layout content-cot modal-cot modal-cot-visible" : "layout content-cot modal-cot modal-cot-hidden" },
        _react2.default.createElement('span', {
          className: 'background',
          onClick: function onClick() {
            return _this3.close();
          } }),
        _react2.default.createElement(
          'div',
          { className: 'content-box',
            style: {
              transform: open ? 'translate(0,0) scale(1)' : 'translate(' + left + 'px,' + top + 'px) scale(0.1)',
              WebkitTransform: open ? 'translate(0,0) scale(1)' : 'translate(' + left + 'px,' + top + 'px) scale(0.1)'
            } },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

var ModalContainer = function (_React$Component2) {
  _inherits(ModalContainer, _React$Component2);

  function ModalContainer() {
    _classCallCheck(this, ModalContainer);

    return _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).apply(this, arguments));
  }

  _createClass(ModalContainer, [{
    key: 'render',
    value: function render() {
      var visible = this.props.visible;


      return visible ? _react2.default.createElement(Modal, this.props) : null;
    }
  }]);

  return ModalContainer;
}(_react2.default.Component);

exports.default = ModalContainer;
