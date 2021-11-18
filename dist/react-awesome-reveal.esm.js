import { Children } from 'react';
import { isFragment } from 'react-is';
import { keyframes, css, ClassNames, jsx as jsx$1 } from '@emotion/react';
import { InView } from 'react-intersection-observer';
import { jsx, Fragment } from '@emotion/react/jsx-runtime';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var distance = '5%';
function getDistance() {
  return distance;
}
function setDistance(customDistance) {
  distance = customDistance;
}

var _templateObject;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInLeft.css}
 */

var fadeInLeft = /*#__PURE__*/keyframes(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(-", ", 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

function isEmpty(object) {
  return object === null || object === undefined;
}
function isStringLike(object) {
  return typeof object === "string" || typeof object === "number" || typeof object === "boolean";
}

var _templateObject$1;
function getAnimationCss(_ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1000 : _ref$duration,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$timingFunction = _ref.timingFunction,
      timingFunction = _ref$timingFunction === void 0 ? "ease" : _ref$timingFunction,
      _ref$keyframes = _ref.keyframes,
      keyframes = _ref$keyframes === void 0 ? fadeInLeft : _ref$keyframes,
      _ref$iterationCount = _ref.iterationCount,
      iterationCount = _ref$iterationCount === void 0 ? 1 : _ref$iterationCount;
  return css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n    animation-delay: ", "ms;\n    animation-name: ", ";\n    animation-direction: normal;\n    animation-fill-mode: both;\n    animation-iteration-count: ", ";\n  "])), duration, timingFunction, delay, keyframes, iterationCount);
}

var _templateObject$2, _templateObject2;
var hiddenCss = /*#__PURE__*/css(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  opacity: 0;\n"])));
var textBaseCss = /*#__PURE__*/css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: inline-block;\n  white-space: pre;\n"])));

var Reveal = function Reveal(_ref) {
  var _ref$cascade = _ref.cascade,
      cascade = _ref$cascade === void 0 ? false : _ref$cascade,
      _ref$damping = _ref.damping,
      damping = _ref$damping === void 0 ? 0.5 : _ref$damping,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1000 : _ref$duration,
      _ref$fraction = _ref.fraction,
      fraction = _ref$fraction === void 0 ? 0 : _ref$fraction,
      _ref$keyframes = _ref.keyframes,
      keyframes = _ref$keyframes === void 0 ? fadeInLeft : _ref$keyframes,
      _ref$triggerOnce = _ref.triggerOnce,
      triggerOnce = _ref$triggerOnce === void 0 ? false : _ref$triggerOnce,
      revealCss = _ref.css,
      className = _ref.className,
      style = _ref.style,
      childClassName = _ref.childClassName,
      childStyle = _ref.childStyle,
      _children = _ref.children,
      onVisibilityChange = _ref.onVisibilityChange;

  if (isEmpty(_children)) {
    return null;
  }

  if (isStringLike(_children)) {
    var stringifiedChildren = String(_children);
    return cascade ? jsx(InView, {
      threshold: fraction,
      triggerOnce: triggerOnce,
      onChange: onVisibilityChange,
      children: function children(_ref2) {
        var inView = _ref2.inView,
            ref = _ref2.ref;
        return jsx("div", {
          ref: ref,
          css: [revealCss, textBaseCss],
          className: className,
          style: style,
          children: stringifiedChildren.split("").map(function (_char, index) {
            return jsx("span", {
              css: inView ? getAnimationCss({
                keyframes: keyframes,
                delay: delay + index * duration * damping,
                duration: duration
              }) : hiddenCss,
              className: childClassName,
              style: childStyle,
              children: _char
            }, index);
          })
        });
      }
    }) : jsx(Reveal, {
      delay: delay,
      duration: duration,
      fraction: fraction,
      keyframes: keyframes,
      triggerOnce: triggerOnce,
      css: revealCss,
      className: className,
      style: style,
      children: stringifiedChildren
    });
  }

  if (isFragment(_children)) {
    return jsx(InView, {
      threshold: fraction,
      triggerOnce: triggerOnce,
      onChange: onVisibilityChange,
      children: function children(_ref3) {
        var inView = _ref3.inView,
            ref = _ref3.ref;
        return jsx("div", {
          ref: ref,
          css: inView ? [revealCss, getAnimationCss({
            keyframes: keyframes,
            delay: delay,
            duration: duration
          })] : hiddenCss,
          className: className,
          style: style,
          children: _children
        });
      }
    });
  }

  return jsx(Fragment, {
    children: Children.map(_children, function (node, index) {
      var nodeElement = node;
      var nodeCss = nodeElement.props.css ? [nodeElement.props.css] : [];
      nodeCss.push(getAnimationCss({
        keyframes: keyframes,
        delay: delay + (cascade ? index * duration * damping : 0),
        duration: duration
      }));

      switch (nodeElement.type) {
        case "ol":
        case "ul":
          return jsx(ClassNames, {
            children: function children(_ref4) {
              var cx = _ref4.cx;
              return jsx$1(nodeElement.type, _extends({}, nodeElement.props, {
                className: cx(className, nodeElement.props.className),
                style: _extends({}, style, nodeElement.props.style)
              }), jsx(Reveal, {
                cascade: cascade,
                damping: damping,
                delay: delay,
                duration: duration,
                fraction: fraction,
                keyframes: keyframes,
                triggerOnce: triggerOnce,
                css: revealCss,
                childClassName: childClassName,
                childStyle: childStyle,
                children: nodeElement.props.children
              }));
            }
          });

        case "li":
          return jsx(InView, {
            threshold: fraction,
            triggerOnce: triggerOnce,
            onChange: onVisibilityChange,
            children: function children(_ref5) {
              var inView = _ref5.inView,
                  ref = _ref5.ref;
              return jsx(ClassNames, {
                children: function children(_ref6) {
                  var cx = _ref6.cx;
                  return jsx$1(nodeElement.type, _extends({}, nodeElement.props, {
                    ref: ref,
                    css: inView ? [revealCss].concat(nodeCss) : hiddenCss,
                    className: cx(childClassName, nodeElement.props.className),
                    style: _extends({}, childStyle, nodeElement.props.style)
                  }));
                }
              });
            }
          });

        default:
          return jsx(InView, {
            threshold: fraction,
            triggerOnce: triggerOnce,
            onChange: onVisibilityChange,
            children: function children(_ref7) {
              var inView = _ref7.inView,
                  ref = _ref7.ref;
              return jsx("div", {
                ref: ref,
                css: inView ? [revealCss].concat(nodeCss) : hiddenCss,
                className: className,
                style: style,
                children: jsx(ClassNames, {
                  children: function children(_ref8) {
                    var cx = _ref8.cx;
                    return jsx$1(nodeElement.type, _extends({}, nodeElement.props, {
                      className: cx(childClassName, nodeElement.props.className),
                      style: _extends({}, childStyle, nodeElement.props.style)
                    }));
                  }
                })
              });
            }
          });
      }
    })
  });
};

var _templateObject$3;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/bounce.css}
 */

var bounce = /*#__PURE__*/keyframes(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  20%,\n  53%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n"])));

var _templateObject$4;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/flash.css}
 */

var flash = /*#__PURE__*/keyframes(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n"])));

var _templateObject$5;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/headShake.css}
 */

var headShake = /*#__PURE__*/keyframes(_templateObject$5 || (_templateObject$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n"])));

var _templateObject$6;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/heartBeat.css}
 */

var heartBeat = /*#__PURE__*/keyframes(_templateObject$6 || (_templateObject$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  0% {\n    transform: scale(1);\n  }\n\n  14% {\n    transform: scale(1.3);\n  }\n\n  28% {\n    transform: scale(1);\n  }\n\n  42% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n"])));

var _templateObject$7;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/jello.css}
 */

var jello = /*#__PURE__*/keyframes(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  11.1%,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n"])));

var _templateObject$8;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/pulse.css}
 */

var pulse = /*#__PURE__*/keyframes(_templateObject$8 || (_templateObject$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));

var _templateObject$9;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/rubberBand.css}
 */

var rubberBand = /*#__PURE__*/keyframes(_templateObject$9 || (_templateObject$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));

var _templateObject$a;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/shake.css}
 */

var shake = /*#__PURE__*/keyframes(_templateObject$a || (_templateObject$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n"])));

var _templateObject$b;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/shakeX.css}
 */

var shakeX = /*#__PURE__*/keyframes(_templateObject$b || (_templateObject$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n"])));

var _templateObject$c;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/shakeY.css}
 */

var shakeY = /*#__PURE__*/keyframes(_templateObject$c || (_templateObject$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(0, 10px, 0);\n  }\n"])));

var _templateObject$d;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/swing.css}
 */

var swing = /*#__PURE__*/keyframes(_templateObject$d || (_templateObject$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n"])));

var _templateObject$e;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/tada.css}
 */

var tada = /*#__PURE__*/keyframes(_templateObject$e || (_templateObject$e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));

var _templateObject$f;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/attention_seekers/wobble.css}
 */

var wobble = /*#__PURE__*/keyframes(_templateObject$f || (_templateObject$f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

function getAttentionSeekerKeyframesAndCss(effect) {
  switch (effect) {
    case "flash":
      return [flash];

    case "headShake":
      return [headShake, {
        animationTimingFunction: "ease-in-out"
      }];

    case "heartBeat":
      return [heartBeat, {
        animationTimingFunction: "ease-in-out"
      }];

    case "jello":
      return [jello, {
        transformOrigin: "center"
      }];

    case "pulse":
      return [pulse, {
        animationTimingFunction: "ease-in-out"
      }];

    case "rubberBand":
      return [rubberBand];

    case "shake":
      return [shake];

    case "shakeX":
      return [shakeX];

    case "shakeY":
      return [shakeY];

    case "swing":
      return [swing, {
        transformOrigin: "top center"
      }];

    case "tada":
      return [tada];

    case "wobble":
      return [wobble];

    case "bounce":
    default:
      return [bounce, {
        transformOrigin: "center bottom"
      }];
  }
}

var AttentionSeeker = function AttentionSeeker(_ref) {
  var _ref$effect = _ref.effect,
      effect = _ref$effect === void 0 ? "bounce" : _ref$effect,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["effect"]);

  var _getAttentionSeekerKe = getAttentionSeekerKeyframesAndCss(effect),
      keyframes = _getAttentionSeekerKe[0],
      animationCss = _getAttentionSeekerKe[1];

  return jsx(Reveal, _extends({
    keyframes: keyframes,
    css: animationCss
  }, otherProps));
};

var _templateObject$g;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_entrances/bounceIn.css}
 */

var bounceIn = /*#__PURE__*/keyframes(_templateObject$g || (_templateObject$g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n"])));

var _templateObject$h;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_entrances/bounceInDown.css}
 */

var bounceInDown = /*#__PURE__*/keyframes(_templateObject$h || (_templateObject$h = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0) scaleY(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$i;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_entrances/bounceInLeft.css}
 */

var bounceInLeft = /*#__PURE__*/keyframes(_templateObject$i || (_templateObject$i = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$j;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_entrances/bounceInRight.css}
 */

var bounceInRight = /*#__PURE__*/keyframes(_templateObject$j || (_templateObject$j = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$k;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_entrances/bounceInUp.css}
 */

var bounceInUp = /*#__PURE__*/keyframes(_templateObject$k || (_templateObject$k = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$l;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOut.css}
 */

var bounceOut = /*#__PURE__*/keyframes(_templateObject$l || (_templateObject$l = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"])));

var _templateObject$m;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOutDown.css}
 */

var bounceOutDown = /*#__PURE__*/keyframes(_templateObject$m || (_templateObject$m = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"])));

var _templateObject$n;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOutLeft.css}
 */

var bounceOutLeft = /*#__PURE__*/keyframes(_templateObject$n || (_templateObject$n = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0) scaleX(2);\n  }\n"])));

var _templateObject$o;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOutRight.css}
 */

var bounceOutRight = /*#__PURE__*/keyframes(_templateObject$o || (_templateObject$o = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0) scaleX(2);\n  }\n"])));

var _templateObject$p;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOutUp.css}
 */

var bounceOutUp = /*#__PURE__*/keyframes(_templateObject$p || (_templateObject$p = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  20% {\n    transform: translate3d(0, -10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0) scaleY(3);\n  }\n"])));

function getBounceKeyframes(reverse, direction) {
  switch (direction) {
    case "down":
      return reverse ? bounceOutDown : bounceInDown;

    case "left":
      return reverse ? bounceOutLeft : bounceInLeft;

    case "right":
      return reverse ? bounceOutRight : bounceInRight;

    case "up":
      return reverse ? bounceOutUp : bounceInUp;

    default:
      return reverse ? bounceOut : bounceIn;
  }
}

var Bounce = function Bounce(_ref) {
  var direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["direction", "reverse"]);

  return jsx(Reveal, _extends({
    keyframes: getBounceKeyframes(reverse, direction)
  }, otherProps));
};

var _templateObject$q;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeIn.css}
 */

var fadeIn = /*#__PURE__*/keyframes(_templateObject$q || (_templateObject$q = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"])));

var _templateObject$r;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInBottomLeft.css}
 */

var fadeInBottomLeft = /*#__PURE__*/keyframes(_templateObject$r || (_templateObject$r = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(-", ", ", ", 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$s;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInBottomRight.css}
 */

var fadeInBottomRight = /*#__PURE__*/keyframes(_templateObject$s || (_templateObject$s = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(", ", ", ", 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$t;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInDown.css}
 */

var fadeInDown = /*#__PURE__*/keyframes(_templateObject$t || (_templateObject$t = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$u;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInDownBig.css}
 */

var fadeInDownBig = /*#__PURE__*/keyframes(_templateObject$u || (_templateObject$u = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$v;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInLeftBig.css}
 */

var fadeInLeftBig = /*#__PURE__*/keyframes(_templateObject$v || (_templateObject$v = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$w;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInRight.css}
 */

var fadeInRight = /*#__PURE__*/keyframes(_templateObject$w || (_templateObject$w = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(", ", 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$x;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInRightBig.css}
 */

var fadeInRightBig = /*#__PURE__*/keyframes(_templateObject$x || (_templateObject$x = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$y;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInTopLeft.css}
 */

var fadeInTopLeft = /*#__PURE__*/keyframes(_templateObject$y || (_templateObject$y = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(-", ", -", ", 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$z;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInTopRight.css}
 */

var fadeInTopRight = /*#__PURE__*/keyframes(_templateObject$z || (_templateObject$z = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(", ", -", ", 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$A;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInUp.css}
 */

var fadeInUp = /*#__PURE__*/keyframes(_templateObject$A || (_templateObject$A = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$B;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInUpBig.css}
 */

var fadeInUpBig = /*#__PURE__*/keyframes(_templateObject$B || (_templateObject$B = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$C;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOut.css}
 */

var fadeOut = /*#__PURE__*/keyframes(_templateObject$C || (_templateObject$C = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"])));

var _templateObject$D;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutBottomLeft.css}
 */

var fadeOutBottomLeft = /*#__PURE__*/keyframes(_templateObject$D || (_templateObject$D = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-", ", ", ", 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$E;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutBottomRight.css}
 */

var fadeOutBottomRight = /*#__PURE__*/keyframes(_templateObject$E || (_templateObject$E = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(", ", ", ", 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$F;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutDown.css}
 */

var fadeOutDown = /*#__PURE__*/keyframes(_templateObject$F || (_templateObject$F = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n"])));

var _templateObject$G;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutDownBig.css}
 */

var fadeOutDownBig = /*#__PURE__*/keyframes(_templateObject$G || (_templateObject$G = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n"])));

var _templateObject$H;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutLeft.css}
 */

var fadeOutLeft = /*#__PURE__*/keyframes(_templateObject$H || (_templateObject$H = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-", ", 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$I;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutLeftBig.css}
 */

var fadeOutLeftBig = /*#__PURE__*/keyframes(_templateObject$I || (_templateObject$I = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n"])));

var _templateObject$J;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutRight.css}
 */

var fadeOutRight = /*#__PURE__*/keyframes(_templateObject$J || (_templateObject$J = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(", ", 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$K;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutRightBig.css}
 */

var fadeOutRightBig = /*#__PURE__*/keyframes(_templateObject$K || (_templateObject$K = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n"])));

var _templateObject$L;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutTopLeft.css}
 */

var fadeOutTopLeft = /*#__PURE__*/keyframes(_templateObject$L || (_templateObject$L = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-", ", -", ", 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$M;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutTopRight.css}
 */

var fadeOutTopRight = /*#__PURE__*/keyframes(_templateObject$M || (_templateObject$M = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(", ", -", ", 0);\n  }\n"])), /*#__PURE__*/getDistance(), /*#__PURE__*/getDistance());

var _templateObject$N;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutUp.css}
 */

var fadeOutUp = /*#__PURE__*/keyframes(_templateObject$N || (_templateObject$N = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n"])));

var _templateObject$O;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutUpBig.css}
 */

var fadeOutUpBig = /*#__PURE__*/keyframes(_templateObject$O || (_templateObject$O = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n"])));

function getFadeKeyframes(big, reverse, direction) {
  switch (direction) {
    case "bottom-left":
      return reverse ? fadeOutBottomLeft : fadeInBottomLeft;

    case "bottom-right":
      return reverse ? fadeOutBottomRight : fadeInBottomRight;

    case "down":
      return big ? reverse ? fadeOutDownBig : fadeInDownBig : reverse ? fadeOutDown : fadeInDown;

    case "left":
      return big ? reverse ? fadeOutLeftBig : fadeInLeftBig : reverse ? fadeOutLeft : fadeInLeft;

    case "right":
      return big ? reverse ? fadeOutRightBig : fadeInRightBig : reverse ? fadeOutRight : fadeInRight;

    case "top-left":
      return reverse ? fadeOutTopLeft : fadeInTopLeft;

    case "top-right":
      return reverse ? fadeOutTopRight : fadeInTopRight;

    case "up":
      return big ? reverse ? fadeOutUpBig : fadeInUpBig : reverse ? fadeOutUp : fadeInUp;

    default:
      return reverse ? fadeOut : fadeIn;
  }
}

var Fade = function Fade(_ref) {
  var _ref$big = _ref.big,
      big = _ref$big === void 0 ? false : _ref$big,
      direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      _ref$customDistance = _ref.customDistance,
      customDistance = _ref$customDistance === void 0 ? undefined : _ref$customDistance,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["big", "direction", "reverse", "customDistance"]);

  if (customDistance) {
    setDistance(customDistance);
  }

  return jsx(Reveal, _extends({
    keyframes: getFadeKeyframes(big, reverse, direction)
  }, otherProps));
};

var _templateObject$P;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/flippers/flip.css}
 */

var flip = /*#__PURE__*/keyframes(_templateObject$P || (_templateObject$P = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n"])));

var _templateObject$Q;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/flippers/flipInX.css}
 */

var flipInX = /*#__PURE__*/keyframes(_templateObject$Q || (_templateObject$Q = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n"])));

var _templateObject$R;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/flippers/flipInY.css}
 */

var flipInY = /*#__PURE__*/keyframes(_templateObject$R || (_templateObject$R = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n"])));

var _templateObject$S;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/flippers/flipOutX.css}
 */

var flipOutX = /*#__PURE__*/keyframes(_templateObject$S || (_templateObject$S = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n"])));

var _templateObject$T;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/flippers/flipOutY.css}
 */

var flipOutY = /*#__PURE__*/keyframes(_templateObject$T || (_templateObject$T = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n"])));

function getFlipKeyframes(reverse, direction) {
  switch (direction) {
    case "horizontal":
      return reverse ? flipOutX : flipInX;

    case "vertical":
      return reverse ? flipOutY : flipInY;

    default:
      return flip;
  }
}

var Flip = function Flip(_ref) {
  var direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["direction", "reverse"]);

  var animationCss = {
    backfaceVisibility: "visible"
  };
  return jsx(Reveal, _extends({
    keyframes: getFlipKeyframes(reverse, direction),
    css: animationCss
  }, otherProps));
};

var _templateObject$U;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/hinge.css}
 */

var hinge = /*#__PURE__*/keyframes(_templateObject$U || (_templateObject$U = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  0% {\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n"])));

var _templateObject$V;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/jackInTheBox.css}
 */

var jackInTheBox = /*#__PURE__*/keyframes(_templateObject$V || (_templateObject$V = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"])));

var _templateObject$W;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/rollIn.css}
 */

var rollIn = /*#__PURE__*/keyframes(_templateObject$W || (_templateObject$W = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translate3d(-", ", 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$X;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/rollOut.css}
 */

var rollOut = /*#__PURE__*/keyframes(_templateObject$X || (_templateObject$X = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(", ", 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n"])), /*#__PURE__*/getDistance());

var Hinge = function Hinge(props) {
  var animationCss = {
    transformOrigin: "top left"
  };
  return jsx(Reveal, _extends({
    keyframes: hinge,
    css: animationCss
  }, props));
};

var JackInTheBox = function JackInTheBox(props) {
  return jsx(Reveal, _extends({
    keyframes: jackInTheBox
  }, props));
};

function getRollKeyframes(reverse) {
  return reverse ? rollOut : rollIn;
}

var Roll = function Roll(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["reverse"]);

  return jsx(Reveal, _extends({
    keyframes: getRollKeyframes(reverse)
  }, otherProps));
};

var _templateObject$Y;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_entrances/rotateIn.css}
 */

var rotateIn = /*#__PURE__*/keyframes(_templateObject$Y || (_templateObject$Y = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));

var _templateObject$Z;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_entrances/rotateInDownLeft.css}
 */

var rotateInDownLeft = /*#__PURE__*/keyframes(_templateObject$Z || (_templateObject$Z = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));

var _templateObject$_;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_entrances/rotateInDownRight.css}
 */

var rotateInDownRight = /*#__PURE__*/keyframes(_templateObject$_ || (_templateObject$_ = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));

var _templateObject$$;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_entrances/rotateInUpLeft.css}
 */

var rotateInUpLeft = /*#__PURE__*/keyframes(_templateObject$$ || (_templateObject$$ = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));

var _templateObject$10;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_entrances/rotateInUpRight.css}
 */

var rotateInUpRight = /*#__PURE__*/keyframes(_templateObject$10 || (_templateObject$10 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));

var _templateObject$11;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOut.css}
 */

var rotateOut = /*#__PURE__*/keyframes(_templateObject$11 || (_templateObject$11 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n"])));

var _templateObject$12;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOutDownLeft.css}
 */

var rotateOutDownLeft = /*#__PURE__*/keyframes(_templateObject$12 || (_templateObject$12 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n"])));

var _templateObject$13;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOutDownRight.css}
 */

var rotateOutDownRight = /*#__PURE__*/keyframes(_templateObject$13 || (_templateObject$13 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n"])));

var _templateObject$14;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOutUpLeft.css}
 */

var rotateOutUpLeft = /*#__PURE__*/keyframes(_templateObject$14 || (_templateObject$14 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n"])));

var _templateObject$15;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOutUpRight.css}
 */

var rotateOutUpRight = /*#__PURE__*/keyframes(_templateObject$15 || (_templateObject$15 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n"])));

function getRotateKeyframesAndCss(reverse, direction) {
  switch (direction) {
    case "bottom-left":
      return reverse ? [rotateOutDownLeft, {
        transformOrigin: "left bottom"
      }] : [rotateInDownLeft, {
        transformOrigin: "left bottom"
      }];

    case "bottom-right":
      return reverse ? [rotateOutDownRight, {
        transformOrigin: "right bottom"
      }] : [rotateInDownRight, {
        transformOrigin: "right bottom"
      }];

    case "top-left":
      return reverse ? [rotateOutUpLeft, {
        transformOrigin: "left bottom"
      }] : [rotateInUpLeft, {
        transformOrigin: "left bottom"
      }];

    case "top-right":
      return reverse ? [rotateOutUpRight, {
        transformOrigin: "right bottom"
      }] : [rotateInUpRight, {
        transformOrigin: "right bottom"
      }];

    default:
      return reverse ? [rotateOut, {
        transformOrigin: "center"
      }] : [rotateIn, {
        transformOrigin: "center"
      }];
  }
}

var Rotate = function Rotate(_ref) {
  var direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["direction", "reverse"]);

  var _getRotateKeyframesAn = getRotateKeyframesAndCss(reverse, direction),
      keyframes = _getRotateKeyframesAn[0],
      animationCss = _getRotateKeyframesAn[1];

  return jsx(Reveal, _extends({
    keyframes: keyframes,
    css: animationCss
  }, otherProps));
};

var _templateObject$16;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_entrances/slideInDown.css}
 */

var slideInDown = /*#__PURE__*/keyframes(_templateObject$16 || (_templateObject$16 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, -", ", 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$17;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_entrances/slideInLeft.css}
 */

var slideInLeft = /*#__PURE__*/keyframes(_templateObject$17 || (_templateObject$17 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(-", ", 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$18;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_entrances/slideInRight.css}
 */

var slideInRight = /*#__PURE__*/keyframes(_templateObject$18 || (_templateObject$18 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(", ", 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$19;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_entrances/slideInUp.css}
 */

var slideInUp = /*#__PURE__*/keyframes(_templateObject$19 || (_templateObject$19 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));

var _templateObject$1a;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutDown.css}
 */

var slideOutDown = /*#__PURE__*/keyframes(_templateObject$1a || (_templateObject$1a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, ", ", 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$1b;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutLeft.css}
 */

var slideOutLeft = /*#__PURE__*/keyframes(_templateObject$1b || (_templateObject$1b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-", ", 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$1c;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutRight.css}
 */

var slideOutRight = /*#__PURE__*/keyframes(_templateObject$1c || (_templateObject$1c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(", ", 0, 0);\n  }\n"])), /*#__PURE__*/getDistance());

var _templateObject$1d;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutUp.css}
 */

var slideOutUp = /*#__PURE__*/keyframes(_templateObject$1d || (_templateObject$1d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -", ", 0);\n  }\n"])), /*#__PURE__*/getDistance());

function getSlideKeyframes(reverse, direction) {
  switch (direction) {
    case "down":
      return reverse ? slideOutDown : slideInDown;

    case "right":
      return reverse ? slideOutRight : slideInRight;

    case "up":
      return reverse ? slideOutUp : slideInUp;

    case "left":
    default:
      return reverse ? slideOutLeft : slideInLeft;
  }
}

var Slide = function Slide(_ref) {
  var direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["direction", "reverse"]);

  return jsx(Reveal, _extends({
    keyframes: getSlideKeyframes(reverse, direction)
  }, otherProps));
};

var _templateObject$1e;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_entrances/zoomIn.css}
 */

var zoomIn = /*#__PURE__*/keyframes(_templateObject$1e || (_templateObject$1e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n"])));

var _templateObject$1f;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_entrances/zoomInDown.css}
 */

var zoomInDown = /*#__PURE__*/keyframes(_templateObject$1f || (_templateObject$1f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

var _templateObject$1g;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_entrances/zoomInLeft.css}
 */

var zoomInLeft = /*#__PURE__*/keyframes(_templateObject$1g || (_templateObject$1g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

var _templateObject$1h;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_entrances/zoomInRight.css}
 */

var zoomInRight = /*#__PURE__*/keyframes(_templateObject$1h || (_templateObject$1h = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

var _templateObject$1i;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_entrances/zoomInUp.css}
 */

var zoomInUp = /*#__PURE__*/keyframes(_templateObject$1i || (_templateObject$1i = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

var _templateObject$1j;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_exits/zoomOut.css}
 */

var zoomOut = /*#__PURE__*/keyframes(_templateObject$1j || (_templateObject$1j = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n"])));

var _templateObject$1k;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_exits/zoomOutDown.css}
 */

var zoomOutDown = /*#__PURE__*/keyframes(_templateObject$1k || (_templateObject$1k = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

var _templateObject$1l;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_exits/zoomOutLeft.css}
 */

var zoomOutLeft = /*#__PURE__*/keyframes(_templateObject$1l || (_templateObject$1l = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n  }\n"])));

var _templateObject$1m;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_exits/zoomOutRight.css}
 */

var zoomOutRight = /*#__PURE__*/keyframes(_templateObject$1m || (_templateObject$1m = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n  }\n"])));

var _templateObject$1n;
/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/zooming_exits/zoomOutUp.css}
 */

var zoomOutUp = /*#__PURE__*/keyframes(_templateObject$1n || (_templateObject$1n = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));

function getZoomKeyframes(reverse, direction) {
  switch (direction) {
    case "down":
      return reverse ? zoomOutDown : zoomInDown;

    case "left":
      return reverse ? zoomOutLeft : zoomInLeft;

    case "right":
      return reverse ? zoomOutRight : zoomInRight;

    case "up":
      return reverse ? zoomOutUp : zoomInUp;

    default:
      return reverse ? zoomOut : zoomIn;
  }
}

var Zoom = function Zoom(_ref) {
  var direction = _ref.direction,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["direction", "reverse"]);

  return jsx(Reveal, _extends({
    keyframes: getZoomKeyframes(reverse, direction)
  }, otherProps));
};

export default Reveal;
export { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom };
//# sourceMappingURL=react-awesome-reveal.esm.js.map
