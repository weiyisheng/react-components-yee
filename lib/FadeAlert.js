'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var TextColor = {
  danger: "#D00202",
  confirm: "#3c8dbc",
  cancel: "#909090"
};

var AlertWidth = 380;

var FadeAlert = (function (_React$Component) {
  _inherits(FadeAlert, _React$Component);

  function FadeAlert(props) {
    _classCallCheck(this, FadeAlert);

    _get(Object.getPrototypeOf(FadeAlert.prototype), 'constructor', this).call(this, props);

    this.state = {
      visible: false
    };
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
      var _this = this;

      var _props = this.props;
      var info = _props.info;
      var warning = _props.warning;
      var error = _props.error;
      var buttons = _props.buttons;
      var visible = this.state.visible;

      return _react2['default'].createElement(
        _reactMotion.Motion,
        { style: { opacity: (0, _reactMotion.spring)(visible ? 1 : 0, { stiffness: 210, damping: 20 }) },
          onRest: function () {
            return _this.onRest();
          } },
        function (_ref) {
          var opacity = _ref.opacity;
          return _react2['default'].createElement(
            'div',
            { style: _extends({}, styles.cot, { opacity: opacity }) },
            _react2['default'].createElement(
              'div',
              { style: styles.backdrop },
              _react2['default'].createElement('div', { style: styles.alertTop }),
              _react2['default'].createElement(
                'div',
                { style: _extends({}, styles.alertBox) },
                _react2['default'].createElement(
                  'div',
                  { style: styles.infoBox },
                  _react2['default'].createElement(
                    'p',
                    { style: styles.info },
                    error || warning || info
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { style: styles.buttonBox },
                  (buttons || []).map(function (button) {
                    var type = button.type;
                    var label = button.label;
                    var onClick = button.onClick;

                    return _react2['default'].createElement(
                      'div',
                      { key: label,
                        style: _extends({}, styles.button, { width: AlertWidth / buttons.length }),
                        onClick: function () {
                          _this.fadeOut();onClick && onClick();
                        } },
                      _react2['default'].createElement(
                        'p',
                        { style: _extends({}, styles.buttonText, {
                            color: type === "danger" ? TextColor.danger : type === "confirm" ? TextColor.confirm : type === "cancel" ? TextColor.cancel : TextColor.cancel }) },
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
})(_react2['default'].Component);

exports['default'] = FadeAlert;

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
module.exports = exports['default'];

//考虑增加不同的icon 以区分不同的内容