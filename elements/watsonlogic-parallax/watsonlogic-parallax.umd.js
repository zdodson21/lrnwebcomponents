!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js"],e):e(a.polymerLegacy_js)}(this,function(a){"use strict";function e(){var a,t,n=(a=['\n    <style>\n      :host {\n        display: block;\n        --parallax-background-height: 300px;\n        --parallax-slogan-top: 150px;\n        --parallax-background-image: url(\'https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg\');\n      }\n\n      .parallax-background {\n        background: var(--parallax-background-image);\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: var(--parallax-background-height);\n        position:relative;\n      }\n\n      .slogan {\n        bottom: 0;\n        left: 0;\n        opacity: 1;\n        position: absolute;\n        right: 0;\n        text-align: center;\n        top: var(--parallax-slogan-top);\n        transform-origin: center top !important;\n      }\n    </style>\n\n    <div class="parallax-background">\n      <div id="slogan" class="slogan">[[parallaxText]]</div>\n    </div>\n'],t||(t=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(t)}})));return e=function(){return n},n}a.Polymer({_template:a.html(e()),is:"watsonlogic-parallax",properties:{parallaxText:{type:String},parallaxImage:{type:String,notify:!0,reflectToAttribute:!0},parallaxImageHeight:{type:String,notify:!0,reflectToAttribute:!0}},ready:function(){this.parallaxImage=this.parallaxImage||"https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg",Number.isNaN(parseInt(this.parallaxImageHeight))||parseInt(this.parallaxImageHeight),this.updateStyles({"--parallax-background-image":"url("+this.parallaxImage+")","--parallax-background-height":this.parallaxImageHeight+"px","--parallax-slogan-top":parseInt(this.parallaxImageHeight)/2+"px"})}})});
//# sourceMappingURL=watsonlogic-parallax.umd.js.map
