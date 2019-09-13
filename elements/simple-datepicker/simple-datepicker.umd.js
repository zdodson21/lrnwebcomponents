!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-iconset/hax-iconset.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-icons/av-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-iconset/hax-iconset.js","@polymer/paper-input/paper-input.js","@polymer/paper-button/paper-button.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-icons/av-icons.js"],n):n((e=e||self).SimpleDatepicker={},e.polymerElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function o(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(){var e,n,t=(e=['\n<style>:host {\n  display: block;\n}\n:host([hidden]) {\n  display: none;\n}\n:host paper-button {\n  padding: 5px;\n  margin: 0;\n  cursor: pointer;\n  border-radius: 0;\n  min-width: 30px;\n}\n:host #calendar {\n  font-size: 12px;\n  border-collapse: collapse;\n}\n:host #calendar caption {\n  padding: 0;\n}\n:host #calendar caption div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host #calendar caption paper-button {\n  flex: 0 1 auto;\n  --iron-icon-width: 16px;\n  --iron-icon-height: 16px;\n}\n:host #calendarlabel{\n  flex: 1 1 auto;\n  text-align: center;\n  margin: 0 5px;\n}\n:host #calendarlabel p {\n  width: 100%;\n  margin: 0;\n}\n:host #calendar {\n  border: var(--simple-datepicker-calendar-border, 1px solid black);\n}\n:host #calendar,\n:host #calendar th, \n:host #calendar td {\n  border: var(--simple-datepicker-calendar-days-border, none);\n}\n:host #calendar th {\n  padding: 2px;\n}\n:host #calendar td {\n  padding: 0;\n}\n:host #calendar td paper-button {\n  width: 100%;\n  height: 30px;\n  cursor: pointer;\n}\n</style>\n<paper-input \n  id="dateinput" \n  label$="[[label]]" \n  slot="heading" \n  value$="{{value}}"\n  type="date">\n  <paper-button\n    id="expand"\n    controls="content"\n    label="toggle datepicker" \n    tooltip="toggle datepicker" \n    slot="suffix">\n    <iron-icon icon="hax:calendar"></iron-icon>\n  </paper-button>\n</paper-input>\n<div id="content" role="application">\n  <table id="calendar">\n    <caption>\n      <div>\n        <paper-button  \n          controls="calendar"\n          label="previous year"\n          on-tap="prevYear">\n          <iron-icon icon="av:fast-rewind"></iron-icon>\n        </paper-button>\n        <paper-button  \n          controls="calendar"\n          label="previous month"\n          on-tap="prevMonth">\n          <iron-icon icon="hax:arrow-left"></iron-icon>\n        </paper-button>\n        <div id="calendarlabel"><p>[[__calendarLabel]]</p></div>\n        <paper-button  \n          controls="calendar"\n          label="next month"\n          on-tap="nextMonth">\n          <iron-icon icon="hax:arrow-right"></iron-icon>\n        </paper-button>\n        <paper-button  \n          controls="calendar"\n          label="next year"\n          on-tap="nextYear">\n          <iron-icon icon="av:fast-forward" controls="calendar"></iron-icon>\n        </paper-button>\n      </div>\n    </caption>\n    <thead>\n      <tr>\n        <template is="dom-repeat" items="[[weekdays]]" as="weekday">\n          <th scope="col">[[weekday]]</th>\n        </template>\n      </tr>\n    </thead>\n    <tbody>\n      <template is="dom-repeat" items="[[__calendar]]" as="week" restamp>\n        <tr>\n          <template is="dom-repeat" items="[[week]]" as="day" restamp>\n            <td scope="row">\n              <paper-button \n                class="day" \n                controls="dateinput" \n                day$="[[day]]" \n                disabled$="[[!disabled]]"\n                hidden$="[[!day]]">\n                [[day]]\n              </paper-button>\n            </td>\n          </template> \n        </tr>\n      </template>\n    </tbody>\n  </table>\n</div>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return i=function(){return t},t}var l=function(e){function l(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),o(this,a(l).apply(this,arguments))}var p,c,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}(l,n.PolymerElement),p=l,d=[{key:"template",get:function(){return n.html(i())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Simple datepicker",description:"a simple datepicker field",icon:"hax:calendar",color:"green",groups:["Datepicker"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function(){return{dateFormat:{name:"dateFormat",type:String,value:"mm-dd-yyyy"},monthNames:{name:"monthNames",type:Array,value:["January","February","March","April","May","June","July","August","September","October","November","December"]},value:{name:"value",type:String,value:null},weekStart:{name:"weekStart",type:Number,value:0},weekdays:{name:"weekdays",type:Array,value:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},__calendar:{name:"__calendar",type:Array,computed:"_getCalendar(__calendarDate)"},__calendarDate:{name:"__calendarDate",type:String,computed:"_getCalendarDate(value)"},__calendarLabel:{name:"__calendarLabel",type:String,computed:"updateCalendar(__calendarDate)"}}}},{key:"tag",get:function(){return"simple-datepicker"}}],(c=[{key:"nextMonth",value:function(){var e=new Date(this.__calendarDate),n=e.getMonth(),t=e.getFullYear();n<11?e.setMonth(n+1):(e.setMonth(0),e.setYear(t+1)),this.__calendarDate=e.toString()}},{key:"prevMonth",value:function(){var e=new Date(this.__calendarDate),n=e.getMonth(),t=e.getFullYear();n>0?e.setMonth(n-1):(e.setMonth(11),e.setYear(t-1)),this.__calendarDate=e.toString()}},{key:"nextYear",value:function(){var e=new Date(this.__calendarDate),n=e.getFullYear();e.setYear(n+1),this.__calendarDate=e.toString()}},{key:"prevYear",value:function(){var e=new Date(this.__calendarDate),n=e.getFullYear();e.setYear(n-1),this.__calendarDate=e.toString()}},{key:"updateCalendar",value:function(e){var n=this.shadowRoot?this.shadowRoot.querySelector("#calendarlabel > p"):null,t=new Date(e),a=this.monthNames[t.getMonth()],r=t.getFullYear();return n&&(n.innerHTML="".concat(a," ").concat(r)),"".concat(a," ").concat(r)}},{key:"_getCalendarDate",value:function(e){var n=e?new Date(e):new Date;return this.updateCalendar(n),n.toString()}},{key:"_getCalendar",value:function(e){var n,t,a=new Date(e),r=new Date(e),o=[];a.setDate(1),r.setDate(0),t=((n=a.getDay())+(6-r.getDay())+r.getDate())/7;for(var i=0;i<t-1;i++){o[i]=[];for(var l=0;l<7;l++){var p=1+(l+7*i)-n;o[i][l]=!(p<0||p>r.getDate())&&p}}return o}}])&&t(p.prototype,c),d&&t(p,d),l}();window.customElements.define(l.tag,l),e.SimpleDatepicker=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-datepicker.umd.js.map
