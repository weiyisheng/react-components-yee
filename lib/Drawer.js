'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/drawer.less');

var Drawer = (function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    _get(Object.getPrototypeOf(Drawer.prototype), 'constructor', this).call(this, props);

    this.state = {
      visible: false,
      open: false
    };
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.openAnimation();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible && !nextProps.visible) {
        this.closeAnimation();
      }

      if (!this.props.visible && nextProps.visible) {
        this.openAnimation();
      }
    }
  }, {
    key: 'openAnimation',
    value: function openAnimation() {
      var _this = this;

      this.setState({
        visible: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            open: true
          });
        }, 100);
      });
    }
  }, {
    key: 'closeAnimation',
    value: function closeAnimation() {
      var _this2 = this;

      this.setState({
        open: false
      }, function () {
        setTimeout(function () {
          _this2.setState({
            visible: false
          });
        }, 350);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var direction = _props.direction;
      var close = _props.close;
      var className = _props.className;
      var style = _props.style;
      var _state = this.state;
      var visible = _state.visible;
      var open = _state.open;

      return visible ? _react2['default'].createElement(
        'div',
        { className: "absolute drawer-cot " + (open ? "drawer-cot-open" : "") },
        _react2['default'].createElement('span', { className: 'absolute drawer-back',
          onClick: function () {
            return close();
          } }),
        _react2['default'].createElement(
          'div',
          {
            style: style,
            className: "absolute drawer-box " + ("drawer-box-" + direction) + " " + className },
          this.props.children
        )
      ) : null;
    }
  }]);

  return Drawer;
})(_react2['default'].Component);

Drawer.propTypes = {
  direction: _react2['default'].PropTypes.string,
  visible: _react2['default'].PropTypes.bool.isRequired,
  close: _react2['default'].PropTypes.func.isRequired
};

Drawer.defaultProps = {
  direction: "top"
};

exports['default'] = Drawer;
module.exports = exports['default'];