!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).InlineAudio={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,"symbol"==typeof(r=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"))?r:String(r)),o)}var i,r}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function r(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=o(e);if(n){var l=o(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return r(this,t)}}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a,u,s=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(f,e);var o,r,s,p=l(f);function f(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(e=p.call(this)).source="",e.icon="av:play-arrow",e.playing=!1,e.canPlay=!1,e}return o=f,s=[{key:"tag",get:function(){return"inline-audio"}},{key:"properties",get:function(){return{source:{type:String,reflect:!0},icon:{type:String},playing:{type:Boolean,reflect:!0},canPlay:{type:Boolean,reflect:!0}}}},{key:"styles",get:function(){return[n.css(u||(u=c(["\n        :host {\n          display: inline;\n          vertical-align: middle;\n          color: #1a2b42;\n          max-width: 960px;\n          margin: 0 auto;\n          background-color: var(--inline-audio-background-color);\n        }\n        .container {\n          display: inline-flex;\n          align-items: center;\n          padding: 4px 4px 4px 0px;\n          background: grey;\n          border-radius: 4px;\n          min-width: 64px;\n          font-size: 18px;\n          /* cursor: pointer; */\n        }\n        .icon-spacing {\n          padding-right: 8px;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("inline-audio.umd.js",document.baseURI).href).href}}],(r=[{key:"handleProgress",value:function(){this.shadowRoot.querySelector(".player").ended&&this.audioController(!1);var e=this.shadowRoot.querySelector(".player").duration,n=this.shadowRoot.querySelector(".player").currentTime/e*100;this.shadowRoot.querySelector(".container").style.background="linear-gradient(90deg, orange 0% ".concat(n,"%, grey ").concat(n,"% 100%)")}},{key:"loadAudio",value:function(e){var n=this.shadowRoot.querySelector(".player");n.src=e,n.load()}},{key:"handlePlaythrough",value:function(){var e=this;setTimeout((function(){console.log("Loading finished"),e.canPlay=!0,e.audioController(!0)}),500)}},{key:"audioController",value:function(e){var n=this.shadowRoot.querySelector(".player");e?(n.play(),this.playing=!0,this.icon="av:pause",console.log(this.playing)):(n.pause(),this.playing=!1,this.icon="av:play-arrow",console.log(this.playing))}},{key:"handleClickEvent",value:function(){var e=this.shadowRoot.querySelector(".player");e.hasAttribute("src")||(this.icon="hax:loading",this.loadAudio(this.source)),this.canPlay&&(e.paused?this.audioController(!0):this.audioController(!1))}},{key:"render",value:function(){return n.html(a||(a=c(['\n      <div class="container">\n        <simple-icon-button\n          class="icon-spacing"\n          icon="','"\n          @click="','"\n        ></simple-icon-button>\n        <slot></slot>\n        <audio\n          class="player"\n          type="audio/mpeg"\n          @canplaythrough="','"\n          @timeupdate="','"\n        ></audio>\n        <div></div>\n      </div>\n    '])),this.icon,this.handleClickEvent,this.handlePlaythrough,this.handleProgress)}}])&&t(o.prototype,r),s&&t(o,s),Object.defineProperty(o,"prototype",{writable:!1}),f}(n.LitElement);customElements.define(s.tag,s),e.InlineAudio=s,Object.defineProperty(e,"__esModule",{value:!0})}));
