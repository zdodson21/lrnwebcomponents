!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("web-dialog/index.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","web-dialog/index.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleModal={},e.lit)}(this,(function(e,t){"use strict";function o(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function r(e,t,o){return(t=b(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=a(e);if(t){var i=a(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return s(this,o)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var n=p(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:o):i.value}},m.apply(this,arguments)}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var h,f,v,y=["--simple-modal-resize","--simple-modal-width","--simple-modal-z-index","--simple-modal-height","--simple-modal-min-width","--simple-modal-min-height","--simple-modal-max-width","--simple-modal-max-height","--simple-modal-titlebar-color","--simple-modal-titlebar-height","--simple-modal-titlebar-line-height","--simple-modal-titlebar-background","--simple-modal-titlebar-padding","--simple-modal-header-color","--simple-modal-header-background","--simple-modal-header-padding","--simple-modal-content-container-color","--simple-modal-content-container-background","--simple-modal-content-padding","--simple-modal-buttons-color","--simple-modal-buttons-background","--simple-modal-buttons-padding","--simple-modal-button-color","--simple-modal-button-background"],g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(b,e);var o,r,s,p=c(b);function b(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=p.call(this)).title="",e.opened=!1,e.closeLabel="Close",e.closeIcon="close",e.modal=!1,e}return o=b,r=[{key:"render",value:function(){return t.html(h||(h=u([' <web-dialog\n      id="dialog"\n      center\n      role="dialog"\n      part="dialog"\n      aria-describedby="simple-modal-content"\n      aria-label="','"\n      aria-labelledby="','"\n      aria-modal="true"\n      ?open="','"\n      @open="','"\n      @close="','"\n    >\n      <div id="titlebar" part="titlebar">\n        <h2 id="simple-modal-title" ?hidden="','" part="title">\n          ',"\n        </h2>\n        <div></div>\n        ",'\n      </div>\n      <div id="headerbar" part="headerbar"><slot name="header"></slot></div>\n      <div id="simple-modal-content" part="content">\n        <slot name="content"></slot>\n      </div>\n      <slot name="custom" part="custom"></slot>\n      <div class="buttons" part="buttons">\n        <slot name="buttons"></slot>\n      </div>\n    </web-dialog>'])),this._getAriaLabel(this.title),this._getAriaLabelledby(this.title),this.opened,this.open,this.close,!this.title,this.title,this.modal?"":t.html(f||(f=u(['<simple-icon-button-lite\n              id="close"\n              dark\n              icon="','"\n              @click="','"\n              label="','"\n              part="close"\n            >\n            </simple-icon-button-lite>'])),this.closeIcon,this.close,this.closeLabel))}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,o){"opened"==o&&t._openedChanged(t[o])}))}},{key:"connectedCallback",value:function(){var e=this;m(a(b.prototype),"connectedCallback",this).call(this),this.close=this.close.bind(this),this.showEvent=this.showEvent.bind(this),setTimeout((function(){window.addEventListener("simple-modal-hide",e.close),window.addEventListener("simple-modal-show",e.showEvent)}),0)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("simple-modal-hide",this.close),window.removeEventListener("simple-modal-show",this.showEvent),m(a(b.prototype),"disconnectedCallback",this).call(this)}},{key:"showEvent",value:function(e){var t=this;window.dispatchEvent(new CustomEvent("simple-toast-hide",{bubbles:!0,composed:!0,cancelable:!1,detail:!1})),this.opened?(this.innerHTML="",setTimeout((function(){t.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}),0)):this.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}},{key:"show",value:function(e,t,o,n){var i,l=this,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]&&arguments[7],c=arguments.length>8&&void 0!==arguments[8]&&arguments[8];this.invokedBy=n,this.modal=c,this.title=e,this.mode=t;var p=["header","content","buttons","custom"];for(var m in r?this.setAttribute("id",r):this.removeAttribute("id"),this.setAttribute("style",""),d&&y.forEach((function(e){l.style.setProperty(e,d[e]||"inherit")})),a?this.setAttribute("class",a):this.removeAttribute("class"),p)o[p[m]]&&((i=s?o[p[m]].cloneNode(!0):o[p[m]]).setAttribute("slot",p[m]),this.appendChild(i));this.opened=!0}},{key:"close",value:function(){this.opened=!1,window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="relative")}},{key:"open",value:function(){this.opened=!0;var e=this.shadowRoot.querySelector("web-dialog");this.modal?(e.$backdrop.removeEventListener("click",e.onBackdropClick),e.removeEventListener("keydown",e.onKeyDown,{capture:!0})):(e.$backdrop.addEventListener("click",e.onBackdropClick),e.addEventListener("keydown",e.onKeyDown,{capture:!0,passive:!0})),window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="fixed",this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.top=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.bottom=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.left=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.right=0)}},{key:"_openedChanged",value:function(e){var t=this;if("undefined"===i(e)||e){if(e){this.querySelectorAll("[dialog-dismiss]").forEach((function(e){e.addEventListener("click",(function(e){var o=new CustomEvent("simple-modal-dismissed",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!1,invokedBy:t.invokedBy}});t.dispatchEvent(o),t.close()}))})),this.querySelectorAll("[dialog-confirm]").forEach((function(e){e.addEventListener("click",(function(e){var o=new CustomEvent("simple-modal-confirmed",{composed:!0,bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:t.invokedBy}});t.dispatchEvent(o),t.close()}))}));var o=new CustomEvent("simple-modal-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(o)}}else{for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&setTimeout((function(){t.invokedBy.focus()}),500);var n=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(n)}}},{key:"_getAriaLabelledby",value:function(e){return e?"simple-modal-title":null}},{key:"_getAriaLabel",value:function(e){return e?null:"Modal Dialog"}}],s=[{key:"styles",get:function(){return[t.css(v||(v=u(['\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        :host web-dialog ::slotted(*) {\n          font-size: 14px;\n        }\n\n        #titlebar {\n          margin-top: 0;\n          padding: var(--simple-modal-titlebar-padding, 0px 16px);\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          color: var(--simple-modal-titlebar-color, #444);\n          background-color: var(--simple-modal-titlebar-background, #ddd);\n          border-radius: 0;\n          height: var(--simple-modal-titlebar-height, unset);\n          line-height: var(--simple-modal-titlebar-line-height, unset);\n        }\n\n        #headerbar {\n          margin: 0;\n          padding: var(--simple-modal-header-padding, 0px 16px);\n          color: var(--simple-modal-header-color, #222);\n          background-color: var(--simple-modal-header-background, #ccc);\n        }\n\n        h2 {\n          margin-right: 8px;\n          padding: 0;\n          margin: 0;\n          flex: auto;\n          font-size: 18px;\n          line-height: 18px;\n        }\n\n        #close {\n          top: 0;\n          border: var(--simple-modal-titlebar-button-border, none);\n          padding: var(--simple-modal-titlebar-button-padding, 10px 0);\n          min-width: unset;\n          text-transform: none;\n          color: var(--simple-modal-titlebar-color, #444);\n          background-color: transparent;\n        }\n\n        #close:focus {\n          opacity: 0.7;\n          outline: var(--simple-modal-titlebar-button-outline, 2px dotted grey);\n          outline-offset: var(\n            --simple-modal-titlebar-button-outline-offset,\n            2px\n          );\n        }\n\n        #close simple-icon-lite {\n          --simple-icon-height: var(--simple-modal-titlebar-icon-height, 16px);\n          --simple-icon-width: var(--simple-modal-titlebar-icon-width, 16px);\n          color: var(--simple-modal-titlebar-color, #444);\n        }\n\n        #simple-modal-content {\n          flex-grow: 1;\n          padding: var(--simple-modal-content-padding, 8px 16px);\n          margin: 0;\n          color: var(--simple-modal-content-container-color, #222);\n          background-color: var(\n            --simple-modal-content-container-background,\n            #fff\n          );\n        }\n\n        .buttons {\n          padding: 0;\n          padding: var(--simple-modal-buttons-padding, 0);\n          margin: 0;\n          color: var(--simple-modal-buttons-color, blue);\n          background-color: var(--simple-modal-buttons-background, #fff);\n        }\n\n        .buttons ::slotted(*) {\n          padding: 0;\n          margin: 0;\n          color: var(--simple-modal-button-color, --simple-modal-buttons-color);\n          background-color: var(\n            --simple-modal-button-background,\n            --simple-modal-buttons-background\n          );\n        }\n        web-dialog {\n          --dialog-border-radius: var(--simple-modal-border-radius, 2px);\n          z-index: var(--simple-modal-z-index, 1) !important;\n          padding: 0;\n        }\n        web-dialog::part(dialog) {\n          border: 1px solid var(--simple-modal-border-color, #222);\n          min-height: var(--simple-modal-min-height, unset);\n          min-width: var(--simple-modal-min-width, unset);\n          z-index: var(--simple-modal-z-index, 1000);\n          resize: var(--simple-modal-resize, unset);\n          padding: 0;\n          --dialog-height: var(--simple-modal-height, auto);\n          --dialog-width: var(--simple-modal-width, 75vw);\n          --dialog-max-width: var(--simple-modal-max-width, 100vw);\n          --dialog-max-height: var(--simple-modal-max-height, 100vh);\n        }\n        web-dialog.style-scope.simple-modal {\n          display: none !important;\n        }\n        web-dialog[open].style-scope.simple-modal {\n          display: flex !important;\n          position: fixed !important;\n          margin: auto;\n        }\n        :host([resize="none"]) web-dialog[open].style-scope.simple-modal,\n        :host([resize="horizontal"]) web-dialog[open].style-scope.simple-modal {\n          top: calc(50% - var(--simple-modal-height, auto) / 2);\n        }\n        :host([resize="none"]) web-dialog[open].style-scope.simple-modal,\n        :host([resize="vertical"]) web-dialog[open].style-scope.simple-modal {\n          left: calc(50% - var(--simple-modal-width, 75vw) / 2);\n        }\n      '])))]}},{key:"properties",get:function(){return n(n({},m(a(b),"properties",this)),{},{title:{type:String},opened:{type:Boolean,reflect:!0},closeLabel:{attribute:"close-label",type:String},closeIcon:{type:String,attribute:"close-icon"},invokedBy:{type:Object},modal:{type:Boolean},mode:{type:String,reflect:!0}})}},{key:"tag",get:function(){return"simple-modal"}}],r&&l(o.prototype,r),s&&l(o,s),Object.defineProperty(o,"prototype",{writable:!1}),b}(t.LitElement);customElements.define(g.tag,g),window.SimpleModal=window.SimpleModal||{},window.SimpleModal.requestAvailability=function(){return window.SimpleModal.instance||(window.SimpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.SimpleModal.instance)),window.SimpleModal.instance};var w=window.SimpleModal.requestAvailability();e.SimpleModal=g,e.SimpleModalCssVars=y,e.SimpleModalStore=w,Object.defineProperty(e,"__esModule",{value:!0})}));
