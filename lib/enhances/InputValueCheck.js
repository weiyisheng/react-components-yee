/**
 * Created by germini on 11/26/15.
 */
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

var _reactUtilsYee = require('react-utils-yee');

exports['default'] = function (ComponsedComponent) {
  return (function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

      this.state = {
        valueError: false,
        focus: false
      };
    }

    _createClass(_class, [{
      key: 'onFocus',
      value: function onFocus() {
        var onFocus = this.props.onFocus;

        this.setState({
          valueError: false,
          focus: true
        });

        if (onFocus) {
          onFocus();
        }
      }

      //check value according to type and condition
    }, {
      key: 'onBlur',
      value: function onBlur() {
        var _props = this.props;
        var onBlur = _props.onBlur;
        var value = _props.value;
        var required = _props.required;
        var type = _props.type;
        var validation = _props.validation;

        //  console.log(" value : ", value);

        this.setState({
          focus: false
        });

        //首先进行必须检查
        if (required && !_reactUtilsYee.Validation.notEmptyString(value)) {
          this.setState({ valueError: true });
        }

        //通过了必须检查 以下的所有检查均是在存在value 的情况下进行
        if (value) {
          if (type === "phoneNumber" && !_reactUtilsYee.Validation.validPhoneNumber(value)) {
            this.setState({ valueError: true });
          }

          if (validation && !validation(value)) {
            this.setState({ valueError: true });
          }
        }

        if (onBlur) {
          onBlur();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(ComponsedComponent, _extends({}, this.props, this.state, {
          onFocus: function () {
            return _this.onFocus();
          },
          onBlur: function () {
            return _this.onBlur();
          } }));
      }
    }]);

    return _class;
  })(_react2['default'].Component);
};

module.exports = exports['default'];