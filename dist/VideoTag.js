"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var videoTagString_1 = require("./videoTagString");
exports.VideoTag = function (props) { return (react_1.default.createElement("span", { dangerouslySetInnerHTML: {
        __html: videoTagString_1.videoTagString(props),
    } })); };
exports.VideoTag.defaultProps = {
    controls: true,
    muted: true,
    autoPlay: true,
    playsInline: true,
    loop: true,
};
//# sourceMappingURL=VideoTag.js.map