/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { IronMeta } from "@polymer/iron-meta/iron-meta.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/marked-element/marked-element.js";

/**
 * `iconset-demo`
 * @element iconset-demo
 * `iterates through an iconset array to generate a demo of all of the icons`
 *
 * @microcopy - language worth noting:
 *  -
 *

 * @polymer
 * @demo demo/index.html
 */
class IconsetDemo extends PolymerElement {
  

// render function
  static get template() {
    return html`
<style>
:host {
  display: block;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  padding: 20px 40px;
}
:host .iconset:not(:first-of-type) {
  border-top: 1px solid #ddd;
}
:host ul {
  list-style-type: none;
  padding: 0;
}
:host li {
  display: inline-block;
  width: 160px;
  margin: 16px 8px;
  text-align: center;
  font-size: 10px;
}
:host iron-icon {
  font-size: 14px;
  color: rgb(97,97,97);
  display: inline-block;
}
:host .iconset:nth-of-type(9n+2) iron-icon {
  color: #BE3300;
}
:host .iconset:nth-of-type(9n+3) iron-icon {
  color: #0000B5;
}
:host .iconset:nth-of-type(9n+4) iron-icon {
  color: #750075;
}
:host .iconset:nth-of-type(9n+5) iron-icon {
  color: #AA5D00;
}
:host .iconset:nth-of-type(9n+6) iron-icon {
  color: #DB0A5B;
}
:host .iconset:nth-of-type(9n+7) iron-icon {
  color: #005500;
}
:host .iconset:nth-of-type(9n+8) iron-icon {
  color: #CF000F;
}
:host .iconset:nth-of-type(9n) iron-icon {
  color: #005f8b;
}
        </style>
<template is="dom-repeat" items="[[__iconList]]" as="iconset">
  <div class="iconset">
      <p><strong>[[iconset.name]]</strong></p>
      <ul>
          <template is="dom-repeat" items="[[iconset.icons]]" as="icon">
              <li>
              <div id="icon">
                  <iron-icon icon\$="[[icon]]"></iron-icon>
                  <div id="icon-text">[[icon]]</div>
              </div>
              </li>
          </template>
      </ul>
  </div>
</template>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  
  ...super.properties,
  
  /**
   * all the iconsets
   */
  "__iconList": {
    "type": Array,
    "value": []
  },
  /**
   * a space-separated whitelist of iconsets by name
   */
  "includeSets": {
    "type": String,
    "value": null
  },
  /**
   * a space-separated blacklist of iconsets by name
   */
  "excludeSets": {
    "type": String,
    "value": null
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "iconset-demo";
  }
  /**
   * life cycle, element is ready
   */
  connectedCallback() {
    super.connectedCallback();
    const iconSets = new IronMeta({ type: "iconset" });
    let temp = [],
      root = this;

    // need to access iconset imperatively now
    if (
      typeof iconSets !== typeof undefined &&
      iconSets.list &&
      iconSets.list.length
    ) {
      var index = 0;
      iconSets.list.forEach(function(item) {
        let name = item.name;
        if (!root._hideIconset(name)) {
          temp.push({
            name: name,
            icons: []
          });
          item.getIconNames().forEach(icon => {
            temp[index].icons.push(icon);
          });
          index++;
        }
      });
    }
    this.set('__iconList', []);
    this.set('__iconList', temp);
  }
  /**
   *  determines if a given iconset should be hidden
   *
   * @param {string} name the name of the iconset
   * @returns {boolean} whether or n ot to hide the iconset
   */
  _hideIconset(name) {
    let isets = this.includeSets !== null ? this.includeSets.split(/ /) : [],
      included = isets.length === 0 || isets.includes(name),
      esets = this.excludeSets !== null ? this.excludeSets.split(/ /) : [],
      excluded = esets.length.length > 0 && esets.includes(name);
    return !included || excluded;
  }
}
window.customElements.define(IconsetDemo.tag, IconsetDemo);
export { IconsetDemo };
