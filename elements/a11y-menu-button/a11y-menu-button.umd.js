!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js"],t):t((e=e||self).A11yMenuButton={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(){var e=c(['\n        :host {\n          margin: 0;\n          padding: 0;\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        *[role="menuitem"][disabled] {\n          cursor: not-allowed;\n        }\n\n        *[role="menuitem"],\n        *[role="menuitem"]:visited {\n          display: block;\n          margin: 0;\n          border-radius: 0;\n          font-family: inherit;\n          font-size: inherit;\n          text-decoration: var(--a11y-menu-button-item-text-decoration, none);\n          color: var(\n            --a11y-menu-button-item-color,\n            var(--a11y-menu-button-color, black)\n          );\n          width: calc(\n            100% - 2 *\n              var(\n                --a11y-menu-button-item-horizontal-padding,\n                var(--a11y-menu-button-horizontal-padding, 5px)\n              )\n          );\n          text-align: var(--a11y-menu-button-item-text-align, left);\n          padding: var(\n              --a11y-menu-button-item-vertical-padding,\n              var(--a11y-menu-button-vertical-padding, 0)\n            )\n            var(\n              --a11y-menu-button-item-horizontal-padding,\n              var(--a11y-menu-button-horizontal-padding, 5px)\n            );\n          background-color: var(\n            --a11y-menu-button-item-bg-color,\n            var(--a11y-menu-button-bg-color, white)\n          );\n          border-left: var(--a11y-menu-button-item-border-left, none);\n          border-right: var(--a11y-menu-button-item-border-right, none);\n          border-top: var(--a11y-menu-button-item-border-top, none);\n          border-bottom: var(--a11y-menu-button-item-border-bottom, none);\n          border: var(--a11y-menu-button-item-border, none);\n          transition: all 0.25s ease-in-out;\n        }\n        button[role="menuitem"],\n        button[role="menuitem"]:visited {\n          width: 100%;\n        }\n\n        :host(:focus-within) *[role="button"],\n        *[role="menuitem"]:focus,\n        *[role="menuitem"]:hover {\n          text-decoration: var(\n            --a11y-menu-button-item-focus-text-decoration,\n            none\n          );\n          color: var(--a11y-menu-button-item-focus-color, black);\n          background-color: var(\n            --a11y-menu-button-item-focus-bg-color,\n            #e0e0ff\n          );\n          border-left: var(--a11y-menu-button-item-focus-border-left, unset);\n          border-right: var(--a11y-menu-button-item-focus-border-right, unset);\n          border-top: var(--a11y-menu-button-item-focus-border-top, unset);\n          border-bottom: var(\n            --a11y-menu-button-item-focus-border-bottom,\n            unset\n          );\n          border: var(--a11y-menu-button-item-focus-border, unset);\n        }\n      ']);return b=function(){return e},e}function h(){var e=c(['\n          <li role="none">\n            <button\n              role="menuitem"\n              controls="','"\n              ?disabled="','"\n            >\n              <slot></slot>\n            </button>\n          </li>\n        ']);return h=function(){return e},e}function m(){var e=c([' <li role="none">\n          <a role="menuitem" href="','" ?disabled="','">\n            <slot></slot>\n          </a>\n        </li>']);return m=function(){return e},e}var f=function(e){i(a,t.LitElement);var o=l(a);function a(){return n(this,a),o.call(this)}return r(a,[{key:"render",value:function(){return this.href&&""!==this.href.trim()?t.html(m(),this.href,this.disabled):t.html(h(),this.controls,this.disabled)}}],[{key:"styles",get:function(){return[t.css(b())]}},{key:"tag",get:function(){return"a11y-menu-button-item"}},{key:"properties",get:function(){return{disabled:{attribute:"disabled",type:Boolean},hidden:{attribute:"hidden",type:Boolean,reflect:!0},href:{attribute:"href",type:String},controls:{attribute:"controls",type:String}}}}]),r(a,[{key:"focus",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("[role=menuitem]")&&this.shadowRoot.querySelector("[role=menuitem]").focus()}},{key:"connectedCallback",value:function(){d(u(a.prototype),"connectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("add-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"disconnectedCallback",value:function(){d(u(a.prototype),"disconnectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("remove-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}}]),a}();function y(){var e=c(["\n        :host {\n          padding: 0;\n          display: inline-block;\n          position: relative;\n        }\n        button {\n          display: block;\n          text-decoration: inherit;\n          font-family: inherit;\n          font-size: inherit;\n          margin: 0;\n          width: 100%;\n          padding: var(--a11y-menu-button-vertical-padding, 2px)\n            var(--a11y-menu-button-horizontal-padding, 5px);\n          text-align: var(--a11y-menu-button-text-align, center);\n          background-color: var(--a11y-menu-button-bg-color, white);\n          color: var(--a11y-menu-button-color, black);\n          background-color: var(--a11y-menu-button-bg-color, white);\n          border-radius: var(--a11y-menu-button-border-radius, 0);\n          border-left: var(--a11y-menu-button-border-left, unset);\n          border-top: var(--a11y-menu-button-border-top, unset);\n          border-right: var(--a11y-menu-button-border-right, unset);\n          border-bottom: var(--a11y-menu-button-border-bottom, unset);\n          border: var(--a11y-menu-button-border, 1px solid #ddd);\n          box-shadow: var(--a11y-menu-button-box-shadow, unset);\n          transition: all 0.25s ease-in-out;\n        }\n        button:focus,\n        button:hover {\n          color: var(\n            --a11y-menu-button-focus-color,\n            var(--a11y-menu-button-color, black)\n          );\n          background-color: var(\n            --a11y-menu-button-focus-bg-color,\n            var(--a11y-menu-button-bg-color, white)\n          );\n          border-left: var(\n            --a11y-menu-button-focus-border-left,\n            var(--a11y-menu-button-border-left, unset)\n          );\n          border-top: var(\n            --a11y-menu-button-focus-border-top,\n            var(--a11y-menu-button-border-top, unset)\n          );\n          border-right: var(\n            --a11y-menu-button-focus-border-right,\n            var(--a11y-menu-button-border-right, unset)\n          );\n          border-bottom: var(\n            --a11y-menu-button-focus-border-bottom,\n            var(--a11y-menu-button-border-bottom, unset)\n          );\n          border: var(\n            --a11y-menu-button-focus-border,\n            var(--a11y-menu-button-border, 1px solid #ddd)\n          );\n          box-shadow: var(\n            --a11y-menu-button-box-shadow,\n            var(--a11y-menu-button-focus-box-shadow, unset)\n          );\n        }\n        absolute-position-behavior {\n          z-index: -1;\n          overflow: hidden;\n        }\n        :host([expanded]) absolute-position-behavior {\n          z-index: 2;\n          width: var(--a11y-menu-button-list-width, unset);\n          height: var(--a11y-menu-button-list-height, unset);\n          border: var(\n            --a11y-menu-button-list-border,\n            var(--a11y-menu-button-border, 1px solid #ddd)\n          );\n          background-color: var(\n            --a11y-menu-button-bg-color,\n            var(--a11y-menu-button-list-bg-color, white)\n          );\n          box-shadow: var(--a11y-menu-button-list-box-shadow, unset);\n        }\n\n        ul {\n          margin: 0;\n          padding: 0;\n          list-style: none;\n        }\n      "]);return y=function(){return e},e}function v(){var e=c(['\n      <button\n        id="menubutton"\n        aria-haspopup="true"\n        aria-controls="menu"\n        aria-expanded="','"\n      >\n        <slot name="button"></slot>\n      </button>\n      <absolute-position-behavior\n        ?auto="','"\n        for="menubutton"\n        position="','"\n        position-align="','"\n        offset="','"\n      >\n        <ul\n          id="menu"\n          role="menu"\n          aria-labelledby="menubutton"\n          ?hidden="','"\n          @mousover="','"\n          @mousout="','"\n        >\n          <slot></slot>\n        </ul>\n      </absolute-position-behavior>\n    ']);return v=function(){return e},e}window.customElements.define(f.tag,f);var p=function(e){i(u,t.LitElement);var o=l(u);function u(){var e;return n(this,u),(e=o.call(this)).__menuItems=[],e.position="bottom",e.positionAlign="start",e.offset="0",e.addEventListener("keydown",e._handleKeydown),e.addEventListener("click",e._handleClick),e.addEventListener("focus",e._handleFocus),e.addEventListener("blur",e._handleBlur),e.addEventListener("mouseover",e._handleMouseover),e.addEventListener("mouseout",e._handleMouseout),e.addEventListener("add-a11y-menu-button-item",e._handleAddItem),e.addEventListener("remove-a11y-menu-button-item",e._handleRemoveItem),e}return r(u,[{key:"render",value:function(){var e=this;return t.html(v(),this.expanded?"true":"false",this.expanded,this.position,this.positionAlign,this.offset,!this.expanded,function(t){return e.hover=!0},function(t){return e.hover=!1})}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"tag",get:function(){return"a11y-menu-button"}},{key:"properties",get:function(){return{currentItem:{type:Object},disabled:{attribute:"disabled",type:Boolean},expanded:{attribute:"expanded",type:Boolean,reflect:!0},focused:{attribute:"focused",type:Boolean},hovered:{attribute:"hovered",type:Boolean},offset:{type:Number,attribute:"offset"},position:{type:String,attribute:"position",reflect:!0},positionAlign:{type:String,attribute:"position-align",reflect:!0},__menuItems:{type:Array}}}}]),r(u,[{key:"close",value:function(e){(e||!this.focused&&!this.hovered)&&(this.expanded=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,cancelable:!0,composed:!0,detail:event})))}},{key:"open",value:function(){this.expanded=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,cancelable:!0,composed:!0,detail:event}))}},{key:"focus",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("#menubutton")&&this.shadowRoot.querySelector("#menubutton").focus()}},{key:"focusOn",value:function(e){(e=e||this.firstItem())&&(this.open(),this.focused=!0,this.currentItem=e,e.focus())}},{key:"focusByCharacter",value:function(e){var t,n,o=this,r=(e=e.toLowerCase(),function(e,t){for(var n=e;n<o.firstChars.length;n++)if(t===o.firstChars[n])return n;return-1});(t=this.__menuItems.indexOf(this.currentItem)+1)===this.__menuItems.length&&(t=0),-1===(n=r(t,e))&&(n=r(0,e)),n>-1&&this.__menuItems[n].focus()}},{key:"firstItem",value:function(){return this.querySelector("a11y-menu-button-item")}},{key:"previousItem",value:function(){return this.currentItem?this.currentItem.previousElementSibling:void 0}},{key:"nextItem",value:function(){return this.currentItem?this.currentItem.nextElementSibling:void 0}},{key:"lastItem",value:function(){return this.querySelector("a11y-menu-button-item:last-child")}},{key:"_handleAddItem",value:function(e){var t=this;e.stopPropagation(),this.__menuItems=this.querySelectorAll("a11y-menu-button-item"),e.detail&&(e.detail.addEventListener("keydown",function(n){return t._handleItemKeydown(n,e.detail)}),e.detail.addEventListener("click",this._handleItemClick.bind(this)),e.detail.addEventListener("focus",this._handleFocus.bind(this)),e.detail.addEventListener("blur",this._handleBlur.bind(this)),e.detail.addEventListener("mouseover",this._handleMouseover.bind(this)),e.detail.addEventListener("mouseout",this._handleMouseout.bind(this)))}},{key:"_handleRemoveItem",value:function(e){var t=this;e.stopPropagation(),this.__menuItems=this.querySelectorAll("a11y-menu-button-item"),e.detail&&(e.detail.removeEventListener("keydown",function(n){return t._handleItemKeydown(n,e.detail)}),e.detail.removeEventListener("click",this._handleItemClick.bind(this)),e.detail.removeEventListener("focus",this._handleFocus.bind(this)),e.detail.removeEventListener("blur",this._handleItemBlur.bind(this)),e.detail.removeEventListener("mouseover",this._handleMouseover.bind(this)),e.detail.removeEventListener("mouseout",this._handleMouseout.bind(this)))}},{key:"_handleItemClick",value:function(e){this.focus(),this.close(!0),this.dispatchEvent(new CustomEvent("item-click",{bubbles:!0,cancelable:!0,composed:!0,detail:e}))}},{key:"_handleItemKeydown",value:function(e,t){var n=!1,o=e.key,r=function(e){return 1===e.length&&e.match(/\S/)};if(!(e.ctrlKey||e.altKey||e.metaKey||e.keyCode===this.keyCode.SPACE||e.keyCode===this.keyCode.RETURN)){if(e.shiftKey)r(o)&&(this.menu.setFocusByFirstCharacter(this,o),n=!0),e.keyCode===this.keyCode.TAB&&(this.focus(),this.close(!0));else switch(e.keyCode){case this.keyCode.ESC:this.focus(),this.close(!0),n=!0;break;case this.keyCode.UP:this.focusOn(this.previousItem()||this.lastItem()),n=!0;break;case this.keyCode.DOWN:this.focusOn(this.nextItem()||this.firstItem()),n=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.currentItem=this.firstItem(),n=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.currentItem=this.lastItem(),n=!0;break;case this.keyCode.TAB:this.focus(),this.close(!0);break;default:r(o)&&this.menu.setFocusByFirstCharacter(this,o)}n&&(e.stopPropagation(),e.preventDefault())}}},{key:"_handleItemBlur",value:function(e){this.focused=!1,setTimeout(this.close(),300)}},{key:"_handleKeydown",value:function(e){var t=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.focusOn(this.firstItem()),t=!0;break;case this.keyCode.UP:this.popupMenu&&(this.focusOn(this.lastItem()),t=!0)}t&&(e.stopPropagation(),e.preventDefault())}},{key:"_handleClick",value:function(e){this.expanded?this.close(!0):this.focusOn(this.firstItem())}},{key:"_handleFocus",value:function(e){this.focused=!0}},{key:"_handleBlur",value:function(e){this.focused=!1}},{key:"_handleMouseover",value:function(e){this.hovered=!0,this.open()}},{key:"_handleMouseout",value:function(e){this.hovered=!1,setTimeout(this.close(),300)}},{key:"keyCode",get:function(){return{TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40}}}]),u}();window.customElements.define(p.tag,p),e.A11yMenuButton=p,Object.defineProperty(e,"__esModule",{value:!0})});
