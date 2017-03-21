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

var _materialUiFlatButton = require('material-ui/FlatButton');

var _materialUiFlatButton2 = _interopRequireDefault(_materialUiFlatButton);

require('../styles/tabs.less');

var TabContent = (function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent() {
    _classCallCheck(this, TabContent);

    _get(Object.getPrototypeOf(TabContent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TabContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var index = _props.index;
      var currentIndex = _props.currentIndex;

      return _react2['default'].createElement(
        'div',
        { className: "tabs-content " + (currentIndex === index ? "active" : currentIndex > index ? "content-left" : "content-right") },
        this.props.children
      );
    }
  }]);

  return TabContent;
})(_react2['default'].Component);

exports.TabContent = TabContent;

var Tabs = (function (_React$Component2) {
  _inherits(Tabs, _React$Component2);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, props);

    this.state = {
      currentIndex: 0
    };
  }

  _createClass(Tabs, [{
    key: 'renderNav',
    value: function renderNav() {
      var _this = this;

      var children = this.props.children;

      return children ? _react2['default'].createElement(
        'div',
        { className: 'tabs-nav-box' },
        children.map(function (child, index) {
          var active = _this.state.currentIndex === index;
          return _react2['default'].createElement(_materialUiFlatButton2['default'], {
            key: child.props.label,
            style: {
              height: 56,
              color: active ? "rgb(45,50,62)" : "rgba(0,0,0,0.54)"
            },
            label: child.props.label,
            onClick: function () {
              return _this.setState({ currentIndex: index });
            } });
        })
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        'div',
        { className: 'tabs-cot' },
        this.renderNav(),
        _react2['default'].createElement(
          'div',
          { className: 'tabs-content-box' },
          _react2['default'].Children.map(this.props.children, function (child, index) {
            return _react2['default'].cloneElement(child, { index: index, currentIndex: _this2.state.currentIndex });
          })
        )
      );
    }
  }]);

  return Tabs;
})(_react2['default'].Component);

exports['default'] = Tabs;