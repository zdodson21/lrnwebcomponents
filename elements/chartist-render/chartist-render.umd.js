!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("chartist/dist/chartist.min.js"),require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["chartist/dist/chartist.min.js","@polymer/polymer/polymer-legacy.js"],e):e(null,t.polymerLegacy_js)}(this,function(t,e){"use strict";function a(){var t,e,r=(t=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="chart" chart$="[[__chartId]]" class$="ct-chart [[scale]]"></div>\n'],(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="chart" chart\\$="[[__chartId]]" class\\$="ct-chart [[scale]]"></div>\n'])||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return a=function(){return r},r}e.Polymer({_template:e.html(a()),is:"chartist-render",listeners:{"chart.tap":"makeChart",created:"_onCreated"},properties:{id:{type:String,value:"chart"},type:{type:String,value:"bar"},scale:{type:String,observer:"makeChart"},chartTitle:{type:String,value:null,observer:"makeChart"},chartDesc:{type:String,value:"",observer:"makeChart"},data:{type:Object,value:null,observer:"makeChart"},options:{type:Object,value:null,observer:"makeChart"},responsiveOptions:{type:Array,value:[],observer:"makeChart"},showTable:{type:Boolean,value:!1,observer:"makeChart"}},attached:function(){this.__chartId=this._getUniqueId("chartist-render-"),this._chartReady()},_checkReady:function(){setInterval(this._chartReady,500)},_chartReady:function(){var t='[chart="'+this.__chartId+'"]';null!==document.querySelector(t)&&(this.fire("chartist-render-ready",this),null!==this.data&&this.makeChart(),clearInterval(this._checkReady))},makeChart:function(){var t,e=this;return null!==e.data&&null!==e.querySelector('[chart="'+e.__chartId+'"]')?("bar"==e.type?t=Chartist.Bar('[chart="'+e.__chartId+'"]',e.data,e.options,e.responsiveOptions):"line"==e.type?t=Chartist.Line('[chart="'+e.__chartId+'"]',e.data,e.options,e.responsiveOptions):"pie"==e.type&&(t=Chartist.Pie('[chart="'+e.__chartId+'"]',e.data,e.options,e.responsiveOptions)),e.fire("chartist-render-draw",t),t.on("created",function(){e.addA11yFeatures(t.container.childNodes[0])}),t):null},addA11yFeatures:function(t){var e=void 0!==this.data.labels&&null!==this.data.labels?this.chartDesc+this.makeA11yTable(t):this.chartDesc;this._addA11yFeature(t,"desc",e),this._addA11yFeature(t,"title",this.chartTitle),t.setAttribute("aria-labelledby",this.__chartId+"-chart-title "+this.__chartId+"-chart-desc")},makeA11yTable:function(t){for(var e=['<table summary="Each column is a series of data, and the first column is the data label.">',"<caption>"+(null!==this.chartTitle?this.chartTitle:"A "+this.type+" chart.")+"</caption>","<tbody>"],a=0;a<this.data.labels.length;a++){if(e.push('<tr><th scope="row">'+this.data.labels[a]+"</th>"),"pie"==this.type)e.push("<td>"+this.data.series[a]+"</td>");else for(var r=0;r<this.data.series.length;r++)e.push("<td>"+this.data.series[r][a]+"</td>");e.push("</tr>")}return e.push("</tbody></table>"),e.join("")},_addA11yFeature:function(t,e,a){var r=document.createElement(e),i=t.childNodes[0];r.innerHTML=a,r.setAttribute("id",this.__chartId+"-chart-"+e),t.insertBefore(r,i)},_getUniqueId:function(t){for(var e=t+Date.now();null!==document.querySelector('[chart="'+e+'"]');)e=t+Date.now();return e}})});
//# sourceMappingURL=chartist-render.umd.js.map
