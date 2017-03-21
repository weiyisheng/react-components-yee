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

var List = (function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(List, [{
    key: 'willEnter',
    value: function willEnter() {
      return {
        height: 0,
        opacity: 1
      };
    }
  }, {
    key: 'willLeave',
    value: function willLeave() {
      return {
        height: (0, _reactMotion.spring)(0),
        opacity: (0, _reactMotion.spring)(0)
      };
    }
  }, {
    key: 'getDefaultStyles',
    value: function getDefaultStyles() {
      var _props = this.props;
      var rows = _props.rows;
      var rowKey = _props.rowKey;

      return rows.map(function (row) {
        return { data: { row: row }, key: row[rowKey], style: { height: 0, opacity: 1 } };
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var _props2 = this.props;
      var rows = _props2.rows;
      var rowHeight = _props2.rowHeight;
      var rowKey = _props2.rowKey;

      return rows.map(function (row) {
        return { data: { row: row }, key: row[rowKey], style: { height: (0, _reactMotion.spring)(rowHeight, _reactMotion.presets.gentle), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) } };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props3 = this.props;
      var rows = _props3.rows;
      var renderRow = _props3.renderRow;
      var style = _props3.style;
      var className = _props3.className;
      var rowKey = _props3.rowKey;

      return _react2['default'].createElement(
        _reactMotion.TransitionMotion,
        {
          defaultStyles: this.getDefaultStyles(),
          willEnter: function () {
            return _this.willEnter();
          },
          willLeave: function () {
            return _this.willLeave();
          },
          styles: this.getStyles() },
        function (interpolatedStyles) {
          return _react2['default'].createElement(
            'div',
            { style: _extends({}, styles.cot, style), className: className },
            interpolatedStyles.map(function (_ref) {
              var data = _ref.data;
              var key = _ref.key;
              var style = _ref.style;

              return _react2['default'].createElement(
                'div',
                { key: key, style: _extends({}, styles.rowBox, style) },
                renderRow(data.row)
              );
            })
          );
        }
      );
    }
  }]);

  return List;
})(_react2['default'].Component);

List.propTypes = {
  rows: _react2['default'].PropTypes.array.isRequired,
  renderRow: _react2['default'].PropTypes.func.isRequired,
  rowHeight: _react2['default'].PropTypes.number.isRequired,
  rowKey: _react2['default'].PropTypes.string
};

List.defaultProps = {
  rowKey: "id"
};

exports['default'] = List;

var styles = {
  cot: {},
  rowBox: {}
};
module.exports = exports['default'];