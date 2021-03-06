'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var videoTagString = function (props) {
    if (props === void 0) { props = {}; }
    var classOrClassName = props.className || props.class;
    var classString = classOrClassName ? " class=\"" + classOrClassName + "\"" : "";
    var controls = props.controls ? " controls" : "";
    var muted = props.muted ? " muted" : "";
    var autoPlay = props.autoPlay ? " autoplay" : "";
    var playsInline = props.playsInline ? " playsinline" : "";
    var loop = props.loop ? " loop" : "";
    var poster = props.poster ? " poster=\"" + props.poster + "\"" : "";
    var src = props.src ? " src=\"" + props.src + "\"" : " src=\"\""; // required
    var type = props.type ? " type=\"" + props.type + "\"" : "";
    var preload = props.preload ? " preload=\"" + props.preload + "\"" : "";
    var allowfullscreen = props.allowfullscreen ? " allowfullscreen" : "";
    return "<video" + classString + controls + muted + autoPlay + playsInline + loop + poster + preload + allowfullscreen + "><source" + src + type + "></video>";
};

var VideoTag = function (props) { return (React.createElement("span", { dangerouslySetInnerHTML: {
        __html: videoTagString(props),
    } })); };
VideoTag.defaultProps = {
    controls: true,
    muted: true,
    autoPlay: true,
    playsInline: true,
    loop: true,
};

exports.videoTagString = videoTagString;
exports.VideoTag = VideoTag;
//# sourceMappingURL=index.cjs.js.map
