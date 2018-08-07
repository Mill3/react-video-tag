(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.reactVideoTag = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
        return "<video" + classString + controls + muted + autoPlay + playsInline + loop + poster + "><source" + src + type + "></video>";
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
