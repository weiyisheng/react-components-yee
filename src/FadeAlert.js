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

var AlertWidth = 380;

var FadeAlert = function (_React$Component) {
  _inherits(FadeAlert, _React$Component);

  function FadeAlert(props) {
    _classCallCheck(this, FadeAlert);

    var _this = _possibleConstructorReturn(this, (FadeAlert.__proto__ || Object.getPrototypeOf(FadeAlert)).call(this, props));

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(FadeAlert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        visible: true
      });
      //$("body").css("overflow", "hidden")
      document.body.style.overflow = "hidden";
    }
  }, {
    key: 'onRest',
    value: function onRest() {
      var duration = this.props.duration;
      var visible = this.state.visible;


      if (!visible) {
        var element = document.getElementById(this.props.containerId);
        element ? document.body.removeChild(element) : void 0;
      }
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut() {
      this.setState({
        visible: false
      });
      document.body.style.overflow = "auto";
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          info = _props.info,
          warning = _props.warning,
          error = _props.error,
          buttons = _props.buttons;
      var visible = this.state.visible;


      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { opacity: (0, _reactMotion.spring)(visible ? 1 : 0, { stiffness: 210, damping: 20 }) },
          onRest: function onRest() {
            return _this2.onRest();
          } },
        function (_ref) {
          var opacity = _ref.opacity;
          return _react2.default.createElement(
            'div',
            { style: _extends({}, styles.cot, { opacity: opacity }) },
            _react2.default.createElement(
              'div',
              { style: styles.backdrop },
              _react2.default.createElement('div', { style: styles.alertTop }),
              _react2.default.createElement(
                'div',
                { style: _extends({}, styles.alertBox) },
                _react2.default.createElement(
                  'div',
                  { style: styles.infoBox },
                  _react2.default.createElement(
                    'p',
                    { style: styles.info },
                    error || warning || info
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: styles.buttonBox },
                  (buttons || []).map(function (button) {
                    var type = button.type,
                        label = button.label,
                        _onClick = button.onClick;

                    return _react2.default.createElement(
                      'div',
                      { key: label,
                        style: _extends({}, styles.button, { width: AlertWidth / buttons.length }),
                        onClick: function onClick() {
                          _this2.fadeOut();_onClick && _onClick();
                        } },
                      _react2.default.createElement(
                        'p',
                        { style: _extends({}, styles.buttonText, {
                            color: type === "danger" ? _colors.TextColor.danger : type === "confirm" ? _colors.TextColor.confirm : type === "cancel" ? _colors.TextColor.cancel : _colors.TextColor.cancel }) },
                        label
                      )
                    );
                  })
                )
              )
            )
          );
        }
      );
    }
  }]);

  return FadeAlert;
}(_react2.default.Component);

exports.default = FadeAlert;


var styles = {
  cot: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10000,
    textAlign: "center"
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, .2)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  alertTop: {
    height: 180,
    width: 1
  },
  alertBox: {
    width: AlertWidth,
    margin: "auto",
    backgroundColor: "#fff",
    boxShadow: "0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12)"
  },
  infoBox: {
    width: AlertWidth,
    minHeight: 130,
    textAlign: "center",
    padding: "5% 10px"
  },
  info: {
    textAlign: "center",
    fontSize: 15,
    padding: "10% 0px"
  },
  buttonBox: {
    borderTop: "1px solid #dcdcdc",
    overflow: "hidden"
  },
  button: {
    height: 42,
    cursor: "pointer",
    float: "left",
    borderRight: "1px solid #dcdcdc"
  },
  buttonText: {
    fontSize: 15,
    lineHeight: "42px",
    fontWeight: "500"
  }
};
