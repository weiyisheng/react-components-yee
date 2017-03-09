'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultDuration = 200;

var DefaultDepth = 6;

var Tips = function (_React$Component) {
  _inherits(Tips, _React$Component);

  function Tips(props) {
    _classCallCheck(this, Tips);

    var _this = _possibleConstructorReturn(this, (Tips.__proto__ || Object.getPrototypeOf(Tips)).call(this, props));

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(Tips, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'onRest',
    value: function onRest() {
      var _this2 = this;

      var _props = this.props,
          duration = _props.duration,
          onDisappear = _props.onDisappear;
      var visible = this.state.visible;


      if (visible) {
        setTimeout(function () {
          _this2.setState({ visible: false });
        }, duration || DefaultDuration);
      } else {
        var element = document.getElementById(this.props.containerId);
        element ? document.body.removeChild(element) : void 0;
        if (onDisappear) {
          onDisappear();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          info = _props2.info,
          warning = _props2.warning,
          error = _props2.error,
          duration = _props2.duration;
      var visible = this.state.visible;


      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { opacity: (0, _reactMotion.spring)(visible ? 1 : 0, { stiffness: 210, damping: 20 }) },
          onRest: function onRest() {
            return _this3.onRest();
          } },
        function (_ref) {
          var opacity = _ref.opacity;
          return _react2.default.createElement(
            'div',
            { style: _extends({}, styles.cot, { zIndex: 800, opacity: opacity }) },
            _react2.default.createElement(
              'div',
              { className: "depth-" + DefaultDepth, style: _extends({}, styles.alertBox, {
                  backgroundColor: error ? _colors.BackgroundColor.error : warning ? _colors.BackgroundColor.warning : _colors.BackgroundColor.info }) },
              _react2.default.createElement(
                'p',
                { style: _extends({}, styles.alertText, { color: warning ? "#505050" : "#ffffff" }) },
                error || warning || info
              )
            )
          );
        }
      );
    }
  }]);

  return Tips;
}(_react2.default.Component);

exports.default = Tips;


var styles = {
  cot: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    // zIndex: 1060, //example-modal 的index 是 1050
    textAlign: "center"
  },
  alertBox: {
    minWidth: 288,
    maxWidth: 568,
    height: 48,
    margin: "auto",
    borderRadius: "2px"
  },
  alertText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: "48px",
    fontWeight: "500"
  }
};
