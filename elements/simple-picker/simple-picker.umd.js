!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("lit/directives/cache.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","lit/directives/cache.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SimplePicker={},e.lit,null,null,e.cache_js)}(this,(function(e,n,t,i,o){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,g(i.key),i)}}function p(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,n,t){return(n=g(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&u(e,n)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function u(e,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},u(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function m(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=h(e);if(n){var o=h(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return v(this,t)}}function f(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=h(e)););return e}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var i=f(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},k.apply(this,arguments)}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function g(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}var _,w,x,O,j,E,C,z,L=function(e){d(i,e);var t=m(i);function i(){var e;return s(this,i),(e=t.call(this)).active=null,e.data=null,e.hidden=!1,e.hideOptionLabels=!1,e.icon=null,e.id=null,e.label=null,e.selected=!1,e.titleAsHtml=!1,e.value=null,setTimeout((function(){e.addEventListener("focus",e._handleFocus.bind(b(e))),e.addEventListener("mouseover",e._handleHover.bind(b(e)))}),0),e}return p(i,[{key:"render",value:function(){return n.html(_||(_=y(['\n      <simple-icon-lite\n        ?hidden="','"\n        .icon="','"\n        aria-hidden="true"\n      ></simple-icon-lite>\n      <div id="label">\n        <slot ?hidden="','"></slot>\n        ',"\n      </div>\n    "])),!this.icon,this.icon,!this.titleAsHtml,this.titleAsHtml?"":this.label)}},{key:"updated",value:function(e){var n=this;k(h(i.prototype),"updated",this).call(this,e),e.forEach((function(e,t){"label"===t&&(n.innerHTML=n.label)}))}},{key:"_handleFocus",value:function(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_handleHover",value:function(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}}],[{key:"styles",get:function(){return n.css(w||(w=y(["\n      :host {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        color: var(--simple-picker-color);\n      }\n      :host([hidden]) {\n        display: none;\n      }\n      div {\n        margin: unset;\n        padding: unset;\n      }\n      #label {\n        padding: var(\n          --simple-picker-option-label-padding,\n          var(--simple-picker-option-padding, 2px 10px)\n        );\n        line-height: 100%;\n        width: max-content;\n      }\n\n      :host([hide-option-labels]) #label {\n        position: absolute;\n        left: -999999px;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n      }\n\n      simple-icon-lite {\n        --simple-icon-width: var(--simple-picker-option-size, 24px);\n        --simple-icon-height: var(--simple-picker-option-size, 24px);\n        width: var(--simple-picker-option-size, 24px);\n        min-height: var(--simple-picker-option-size, 24px);\n        min-width: var(--simple-picker-option-size, 24px);\n        line-height: var(--simple-picker-option-size, 24px);\n      }\n    "])))}},{key:"properties",get:function(){return{active:{type:Boolean,reflect:!0},data:{type:Object},hidden:{type:Boolean,reflect:!0},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},icon:{type:String},id:{type:String,reflect:!0},label:{type:String,reflect:!0},selected:{type:Boolean,reflect:!0},styles:{type:Object},titleAsHtml:{type:Boolean,reflect:!0,attribute:"title-as-html"},value:{type:String,reflect:!0}}}},{key:"tag",get:function(){return"simple-picker-option"}}]),i}(n.LitElement);customElements.define(L.tag,L);var P=function(e){return function(e){d(i,e);var t=m(i);function i(){var e;s(this,i),(e=t.call(this)).tag=S.tag,e.allowNull=!1,e.alignRight=!1,e.ariaLabelledby=null,e.blockLabel=!1,e.disabled=!1,e.expanded=!1,e.hideOptionLabels=!1,e.hideSample=!1,e.label=null,e.__ready=!1,e.options=[],e.titleAsHtml=!1,e.value=null,e.__activeDesc="option-0-0",e.__hasLabel=!0,e.__selectedOption={},e.addEventListener("blur",(function(e){this.expanded=!1}));var n=S.properties;for(var o in n)n.hasOwnProperty(o)&&(e.hasAttribute(o)?e[o]=e.getAttribute(o):(o.reflect&&e.setAttribute(o,n[o].value),e[o]=n[o].value));return e}return p(i,[{key:"render",value:function(){return n.html(x||(x=y([' <label\n          id="listLabel"\n          for="listbox"\n          .hidden="','"\n          part="label"\n        >\n          ','\n        </label>\n        <div\n          id="listbox"\n          .aria-activedescendant="','"\n          .aria-labelledby="','"\n          .disabled="','"\n          part="input"\n          role="option"\n          tabindex="0"\n          @click="','"\n          @mousedown="','"\n          @keydown="','"\n        >\n          <div id="sample" part="sample">\n            <simple-picker-option\n              ?hide-option-labels="','"\n              ?title-as-html="','"\n              .icon="','"\n              .label="','"\n              part="sample-option"\n              .style=','\n              aria-hidden="true"\n            >\n            </simple-picker-option>\n            <simple-icon-lite\n              id="icon"\n              aria-hidden="true"\n              icon="arrow-drop-down"\n            ></simple-icon-lite>\n          </div>\n          <div id="collapse" part="listbox">\n            <div class="rows" part="listbox-rows">\n              ',"\n            </div>\n          </div>\n        </div>"])),!this.label||""===this.label.trim(),this.label&&""!==this.label.trim()?this.label.trim():"",this.__activeDesc,this.ariaLabelledby,this.disabled||!this.__options,this._handleListboxClick,this._handleListboxMousedown,this._handleListboxKeydown,this.hideOptionLabels,this.titleAsHtml,!!this.__selectedOption&&this.__selectedOption.icon,!!this.__selectedOption&&this.__selectedOption.alt,!!this.__selectedOption&&this.__selectedOption.style,o.cache(this.expanded&&this.__options?this._renderOptions(this.__options):n.nothing))}},{key:"hideNull",get:function(){return!this.allowNull||this.hideNullOption}},{key:"_renderOptions",value:function(e){var t=this;return n.html(O||(O=y(["",""])),(e||[]).map((function(e,i){return n.html(j||(j=y(['\n          <div class="row" ?hidden="','">\n            ',"\n          </div>\n        "])),!t._isRowHidden(e),Array.isArray(e)?t._renderRow(e,i):n.nothing)})))}},{key:"_isRowHidden",value:function(e){var n=this;return!Array.isArray(e)||e.filter((function(e){return!!e.value||!n.hideNull})).length<1}},{key:"_renderRow",value:function(e,t){var i=this;return n.html(E||(E=y(["",""])),(e||[]).map((function(e,o){return n.html(C||(C=y(['\n          <simple-picker-option\n            @option-focus="','"\n            @set-selected-option="','"\n            ?active="','"\n            ?hide-option-labels="','"\n            ?hidden="','"\n            ?selected="','"\n            ?title-as-html="','"\n            .data="','"\n            .icon="','"\n            .id="option-',"-",'"\n            .label="','"\n            .style=','\n            aria-selected="','"\n            role="option"\n            tabindex="-1"\n            value="','"\n          >\n          </simple-picker-option>\n        '])),i._handleOptionFocus,i._handleSetSelectedOption,"".concat(i.__activeDesc)==="option-".concat(t,"-").concat(o),i.hideOptionLabels,i.hideNull&&!e.value,i.value===e.value,i.titleAsHtml,i.data,e.icon,t,o,e.alt,e.style,i.value===e.value?"true":"false",e.value)})))}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"value"===t&&n._valueChanged(e),"options"===t&&n._optionsChanged(e)})),this.dispatchEvent(new CustomEvent("changed",{detail:this}))}},{key:"_getOption",value:function(e,n){if(void 0!==e&&null!=n){var t=n.split("-");return e[t[1]][t[2]]}return null}},{key:"_goToOption",value:function(e,n){var t=this.shadowRoot.querySelector("#option-".concat(e,"-").concat(n)),i=this.shadowRoot.querySelector("#"+this.__activeDesc);null!==t&&(t.tabindex=0,t.focus(),i.tabindex=-1)}},{key:"_handleListboxClick",value:function(e){this.disabled||(this.dispatchEvent(new CustomEvent("click",{detail:this})),this._toggleListbox())}},{key:"_handleListboxMousedown",value:function(e){this.disabled||this.dispatchEvent(new CustomEvent("mousedown",{detail:this}))}},{key:"_handleListboxKeydown",value:function(e){if(!this.disabled){this.dispatchEvent(new CustomEvent("keydown",{detail:this}));var n=this.__activeDesc.split("-"),t=parseInt(n[1]),i=parseInt(n[2]);if(32===e.keyCode)e.preventDefault(),this._toggleListbox();else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode))if(e.preventDefault(),35===e.keyCode){var o=(this.options||[]).length-1,r=this.options[o].length-1;this._goToOption(o,r)}else 36===e.keyCode?this._goToOption(0,0):38===e.keyCode?i>0?this._goToOption(t,i-1):t>0&&this._goToOption(t-1,this.options[t-1].length-1):40===e.keyCode&&(i<this.options[t].length-1?this._goToOption(t,i+1):t<(this.options||[]).length-1&&this._goToOption(t+1,[0]))}}},{key:"_handleOptionFocus",value:function(e){this._setActiveOption(e.detail.id)}},{key:"_setActiveOption",value:function(e){this.__activeDesc=e,this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_valueChanged",value:function(e){this._setSelectedOption(),this.dispatchEvent(new CustomEvent("value-changed",{detail:this}))}},{key:"_optionsChanged",value:function(e){this.__ready=(this.options||[]).length>0,this.__ready&&this._setSelectedOption()}},{key:"_setSelectedOption",value:function(){if(!this.__selectedOption||this.__selectedOption.value!==this.value){var e=!this.allowNull&&(this.options||[]).length>0&&this.options[0].length>0?this.options[0][0].value:null;if(this.options&&this.options.length>0){this.__options="string"==typeof this.options?JSON.parse(this.options):this.options,this.__activeDesc=this.allowNull?"option-0-0":null;for(var n=0;n<this.__options.length;n++){for(var t=!1,i=0;i<this.__options[n].length;i++)null!==this.value&&null===this.__activeDesc&&(this.__activeDesc="option-".concat(n,"-").concat(i)),"".concat(this.__options[n][i].value)==="".concat(this.value)&&(this.__activeDesc="option-".concat(n,"-").concat(i),e=this.__options[n][i],i=this.__options[n].length,t=!0);t&&(n=(this.__options||[]).length)}null===e&&(this.value=null),this.__selectedOption=e}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:this}))}}},{key:"_toggleListbox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.expanded;if(!this.disabled){var n=this.shadowRoot.querySelector("#"+this.__activeDesc);this.expanded=e,e?(null!==n&&n.focus(),this.dispatchEvent(new CustomEvent("expand",{detail:this}))):(null!==n&&(this.value=n.value),this.dispatchEvent(new CustomEvent("collapse",{detail:this})))}}},{key:"setOptions",value:function(e){this.set("options",[[]]),this.set("options",e)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("blur",(function(e){this.expanded=!1})),k(h(i.prototype),"disconnectedCallback",this).call(this)}}],[{key:"styles",get:function(){return[n.css(z||(z=y(["\n          :host {\n            display: var(--simple-picker-display, inline-flex);\n            align-items: center;\n            color: var(--simple-picker-color, currentColor);\n            font-family: var(--simple-picker-font-family, inherit);\n            font-size: var(--simple-picker-font-size, inherit);\n            --simple-picker-height: calc(\n              var(--simple-picker-option-size, 24px) +\n                var(--simple-picker-sample-padding, 2px) * 2 +\n                var(--simple-picker-border-width, 1px) * 2\n            );\n            min-height: var(--simple-picker-height);\n            max-height: var(--simple-picker-height);\n          }\n\n          :host([block-label]) {\n            display: block;\n            margin: 0 0 15px;\n            max-height: unset;\n          }\n\n          :host([disabled]) {\n            --simple-picker-color: var(--simple-picker-color-disabled, #888);\n            --simple-picker-background-color: var(\n              --simple-picker-background-color-disabled,\n              #e8e8e8\n            );\n            cursor: not-allowed;\n            pointer-events: none;\n          }\n\n          *[disabled] {\n            cursor: not-allowed;\n            pointer-events: none !important;\n          }\n\n          :host([hidden]) {\n            display: none;\n          }\n\n          div {\n            margin: unset;\n            padding: unset;\n          }\n\n          label:not([hidden]) {\n            display: flex;\n            align-items: center;\n            padding-right: 5px;\n            font-family: var(--simple-picker-font-family, inherit);\n            color: var(\n              --simple-picker-label-color,\n              var(--simple-picker-color, currentColor)\n            );\n          }\n\n          :host([block-label]) label:not([hidden]) {\n            display: block;\n            padding-right: 0px;\n            color: var(\n              --simple-picker-float-label-color,\n              var(--simple-picker-color-disabled, #888)\n            );\n            transition: all 0.5s;\n            max-height: unset;\n          }\n\n          :host([block-label]:focus-within) label,\n          :host([block-label]:hover) label {\n            color: var(\n              --simple-picker-float-label-active-color,\n              var(--simple-picker-color, currentColor)\n            );\n            transition: all 0.5s;\n          }\n\n          #sample,\n          .rows {\n            margin: 0;\n            padding: 0;\n          }\n\n          #listbox {\n            cursor: pointer;\n            position: relative;\n            flex: 1 0 auto;\n            min-height: var(--simple-picker-height);\n            max-height: var(--simple-picker-height);\n          }\n\n          #sample {\n            display: flex;\n            flex: 1 0 auto;\n            justify-content: space-between;\n            align-items: center;\n            min-height: calc(\n              var(\n                  --simple-picker-height - 2 *\n                    var(--simple-picker-sample-padding, 2px)\n                ) - 2 * var(--simple-picker-border-width, 1px)\n            );\n            max-height: calc(\n              var(\n                  --simple-picker-height - 2 *\n                    var(--simple-picker-sample-padding, 2px)\n                ) - 2 * var(--simple-picker-border-width, 1px)\n            );\n            padding: var(--simple-picker-sample-padding, 2px);\n            border-radius: var(--simple-picker-border-radius, 2px);\n            color: var(--simple-picker-sample-color, currentColor);\n            background-color: var(--simple-picker-background-color, #f0f0f0);\n            border-width: var(--simple-picker-border-width, 1px);\n            border-style: var(--simple-picker-border-style, solid);\n            border-color: var(\n              --simple-picker-border-color,\n              var(--simple-picker-color-disabled, #888)\n            );\n          }\n\n          :host([hide-sample]) #sample {\n            width: var(--simple-picker-option-size);\n            overflow: visible;\n          }\n\n          :host(:not([disabled]):focus-within) #sample {\n            border-width: var(\n              --simple-picker-focus-border-width,\n              var(--simple-picker-border-width, 1px)\n            );\n            border-style: var(\n              --simple-picker-focus-border-style,\n              var(--simple-picker-border-style, solid)\n            );\n            border-color: var(\n              --simple-picker-focus-border-color,\n              var(\n                --simple-picker-border-color,\n                var(--simple-picker-color-disabled, #888)\n              )\n            );\n            transition: all 0.5s;\n          }\n\n          :host(:not([disabled]):focus-within) #listbox {\n            border-width: var(\n              --simple-picker-listbox-border-width,\n              var(--simple-picker-border-width, 1px)\n            );\n            border-style: var(\n              --simple-picker-listbox-border-width,\n              var(--simple-picker-border-style, solid)\n            );\n            border-color: var(\n              --simple-picker-listbox-border-width,\n              var(\n                --simple-picker-border-color,\n                var(--simple-picker-color-disabled, #888)\n              )\n            );\n          }\n\n          :host(:not([disabled])) #listbox:focus-within,\n          :host(:not([disabled]):focus-within) #listbox {\n            outline: var(--simple-picker-listbox-outline, unset);\n          }\n\n          #icon {\n            width: var(--simple-picker-icon-size, 16px);\n            height: var(--simple-picker-icon-size, 16px);\n            --simple-icon-width: var(--simple-picker-icon-size, 16px);\n            --simple-icon-height: var(--simple-picker-icon-size, 16px);\n            transform: var(--simple-picker-icon-transform, rotate(0deg));\n            transition: transform 0.25s;\n          }\n\n          :host([hide-option-labels]) #icon {\n            margin-left: calc(-0.125 * var(--simple-picker-icon-size, 16px));\n          }\n\n          :host([expanded]) #icon {\n            transform: var(\n              --simple-picker-expanded-icon-transform,\n              rotate(0deg)\n            );\n            transition: transform 0.25s;\n          }\n\n          #collapse {\n            display: none;\n            width: 100%;\n            position: absolute;\n            top: var(--simple-picker-options-top);\n            z-index: 2;\n            transition: z-index 0s;\n          }\n\n          :host([expanded]:not([disabled])) #collapse {\n            display: block;\n            position: unset;\n            background-color: var(\n              --simple-picker-options-background-color,\n              #fff\n            );\n          }\n\n          .rows {\n            display: block;\n            position: absolute;\n            z-index: 1000;\n            top: calc(\n              var(--simple-picker-option-size, 24px) + 2 *\n                var(--simple-picker-options-border-width)\n            );\n            border-width: var(\n              --simple-picker-options-border-width,\n              var(--simple-picker-border-width, 1px)\n            );\n            border-style: var(\n              --simple-picker-options-border-style,\n              var(--simple-picker-border-style, solid)\n            );\n            border-color: var(\n              --simple-picker-options-border-color,\n              var(\n                --simple-picker-border-color,\n                var(--simple-picker-color-disabled, #888)\n              )\n            );\n            background-color: var(\n              --simple-picker-options-background-color,\n              #fff\n            );\n            max-height: var(--simple-picker-options-max-height, 250px);\n            overflow-y: auto;\n            border: var(--simple-picker-options-border);\n            transition: z-index 0s;\n          }\n\n          .rows:focus-within {\n            border: var(\n              --simple-picker-options-focus-border,\n              var(--simple-picker-options-border)\n            );\n          }\n\n          :host([align-right]) #collapse .rows {\n            left: unset;\n            right: calc(\n              var(\n                  --simple-picker-options-border-width,\n                  var(--simple-picker-border-width, 1px)\n                ) * 2\n            );\n          }\n\n          :host([justify]) #collapse .rows {\n            left: 0px;\n            right: 0px;\n          }\n\n          .row {\n            display: flex;\n            align-items: stretch;\n            justify-content: space-between;\n          }\n\n          simple-picker-option {\n            z-index: 1;\n            flex: 1 1 auto;\n            justify-content: flex-start;\n            max-height: unset;\n            min-height: var(--simple-picker-option-size, 24px);\n            min-width: var(--simple-picker-option-size, 24px);\n            line-height: var(--simple-picker-option-size, 24px);\n            color: var(--simple-picker-color, currentColor);\n            background-color: var(\n              --simple-picker-options-background-color,\n              #fff\n            );\n            transition: max-height 2s;\n            transition: z-index 0s;\n          }\n\n          simple-picker-option[selected] {\n            z-index: 50;\n            color: var(--simple-picker-color, currentColor);\n            background-color: var(\n              --simple-picker-option-selected-background-color,\n              var(--simple-picker-options-background-color, #fff)\n            );\n          }\n\n          simple-picker-option[active] {\n            z-index: 100;\n            cursor: pointer;\n            color: var(--simple-picker-color, currentColor);\n            background-color: var(\n              --simple-picker-option-active-background-color,\n              #aaddff\n            );\n          }\n\n          #sample simple-picker-option {\n            color: var(--simple-picker-color, currentColor);\n            background-color: var(\n              --simple-picker-sample-background-color,\n              transparent\n            );\n            --simple-picker-option-padding: var(\n                --simple-picker-sample-padding,\n                2px\n              )\n              0;\n            border: none;\n          }\n\n          :host([hide-sample]) #sample simple-picker-option {\n            position: absolute;\n            left: -9999px;\n            overflow: hidden;\n            width: 0;\n            height: 0;\n          }\n\n          :host(:focus-within) #sample simple-picker-option,\n          :host(:hover) #sample simple-picker-option {\n            --simple-picker-color: var(\n              --simple-picker-color-active,\n              var(--simple-picker-color, currentColor)\n            );\n          }\n\n          :host(:not([expanded])) #collapse simple-picker-option {\n            max-height: 0;\n            transition: max-height 1.5s;\n          }\n\n          @media screen and (max-width: 600px) {\n            :host {\n              position: static;\n            }\n\n            #collapse {\n              top: 0;\n              margin-top: 0;\n              position: relative;\n            }\n\n            .rows {\n              position: absolute;\n            }\n          }\n        "])))]}},{key:"properties",get:function(){return l(l({},k(h(i),"properties",this)),{},{allowNull:{type:Boolean,reflect:!0,attribute:"allow-null"},alignRight:{type:Boolean,reflect:!0,attribute:"align-right"},ariaLabelledby:{type:String,attribute:"aria-labelledby"},blockLabel:{type:Boolean,reflect:!0,attribute:"block-label"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},expanded:{type:Boolean,reflect:!0,attribute:"expanded"},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},hideNullOption:{type:Boolean,reflect:!0,attribute:"hide-null-option"},hideSample:{type:Boolean,reflect:!0,attribute:"hide-sample"},justify:{type:Boolean,reflect:!0,attribute:"justify"},label:{type:String},options:{type:Array},titleAsHtml:{type:Boolean,attribute:"title-as-html"},value:{type:String,reflect:!0},__activeDesc:{type:String},__options:{type:Array},__selectedOption:{type:Object},__ready:{type:Boolean}})}},{key:"tag",get:function(){return"simple-picker"}}]),i}(e)},S=function(e){d(t,e);var n=m(t);function t(){return s(this,t),n.apply(this,arguments)}return p(t)}(P(n.LitElement));customElements.define(S.tag,S),e.SimplePicker=S,e.SimplePickerBehaviors=P,Object.defineProperty(e,"__esModule",{value:!0})}));
