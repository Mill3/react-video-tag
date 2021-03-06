"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoTagString = function (props) {
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
//# sourceMappingURL=videoTagString.js.map