define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/jarallax/src/jarallax.esm.js",
  "./node_modules/jarallax/src/jarallax-video.esm.js",
  "./node_modules/jarallax/src/jarallax-element.esm.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_b5b376e0d96211e88bc5ef7e87676a59() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n\n      .jarallax {\n        position: relative;\n        z-index: 0;\n        height: 400px;\n        overflow: hidden;\n      }\n\n      .jarallax>.jarallax-img {\n        position: absolute;\n        object-fit: cover;\n        /* support for plugin https://github.com/bfred-it/object-fit-images */\n        font-family: \'object-fit: cover;\';\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n      }\n\n      #title_contain {\n        display: flex;\n        /* flex-direction: column; */\n        justify-content: center;\n        padding-top: 170px;\n      }\n\n      .title {\n        background: rgba(0, 0, 0, 0.3);\n        display: block;\n        padding: 20px 15px;\n        text-align: center;\n        width: 40%;\n        color: #fff;\n        font-size: 2em;\n        position: absolute;\n        border: solid 1px;\n      }\n\n      @media screen and (max-width: 900px) {\n        .title {\n          font-size: 18px;\n        }\n      }\n\n      @media screen and (max-width: 600px) {\n        .title {\n          font-size: 14px;\n        }\n      }\n    </style>\n\n    <a href="[[url]]" target$="[[_urlTarget(url)]]">\n      <div class="parallax_contain">\n        <div class="jarallax">\n          <template is="dom-if" if="[[title]]">\n            <div id="title_contain">\n              <div class="title">[[title]]</div>\n            </div>\n          </template>\n        </div>\n      </div>\n    </a>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n\n      .jarallax {\n        position: relative;\n        z-index: 0;\n        height: 400px;\n        overflow: hidden;\n      }\n\n      .jarallax>.jarallax-img {\n        position: absolute;\n        object-fit: cover;\n        /* support for plugin https://github.com/bfred-it/object-fit-images */\n        font-family: \'object-fit: cover;\';\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n      }\n\n      #title_contain {\n        display: flex;\n        /* flex-direction: column; */\n        justify-content: center;\n        padding-top: 170px;\n      }\n\n      .title {\n        background: rgba(0, 0, 0, 0.3);\n        display: block;\n        padding: 20px 15px;\n        text-align: center;\n        width: 40%;\n        color: #fff;\n        font-size: 2em;\n        position: absolute;\n        border: solid 1px;\n      }\n\n      @media screen and (max-width: 900px) {\n        .title {\n          font-size: 18px;\n        }\n      }\n\n      @media screen and (max-width: 600px) {\n        .title {\n          font-size: 14px;\n        }\n      }\n    </style>\n\n    <a href="[[url]]" target\\$="[[_urlTarget(url)]]">\n      <div class="parallax_contain">\n        <div class="jarallax">\n          <template is="dom-if" if="[[title]]">\n            <div id="title_contain">\n              <div class="title">[[title]]</div>\n            </div>\n          </template>\n        </div>\n      </div>\n    </a>\n'
      ]
    );
    _templateObject_b5b376e0d96211e88bc5ef7e87676a59 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_b5b376e0d96211e88bc5ef7e87676a59()
    ),
    is: "parallax-effect",
    properties: {
      type: { type: String, value: "image", reflectToAttribute: !0 },
      src: { type: String, value: "", reflectToAttribute: !0 },
      alt: { type: String, value: "", reflectToAttribute: !0 },
      title: { type: String, value: "", reflectToAttribute: !0 },
      url: { type: String, value: "", reflectToAttribute: !0 }
    },
    attached: function attached() {
      var targets = this.querySelectorAll(".jarallax"),
        options = { speed: 0.2, videoStartTime: 6, videoEndTime: 23 };
      switch (this.type) {
        case "image":
          options.imgSrc = this.src;
          break;
        case "video":
          options.videoSrc = this.src;
          break;
        default:
          options.imgSrc = this.src;
          break;
      }
      new Jarallax(targets, options);
    },
    _outsideLink: function _outsideLink(url) {
      if (0 != url.indexOf("http")) return !1;
      var loc = location.href,
        path = location.pathname,
        root = loc.substring(0, loc.indexOf(path));
      return 0 != url.indexOf(root);
    },
    _urlTarget: function _urlTarget(url) {
      if (url) {
        var external = this._outsideLink(url);
        if (external) {
          return "_blank";
        }
      }
      return !1;
    }
  });
});
