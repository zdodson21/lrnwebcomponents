/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
/**
  * `layout-builder`
  * @element layout-builder
  * `A new UI for adding content to layouts`
  *
  * @microcopy - language worth noting:
  *  -
  *
 
  * @polymer
  * @demo demo/index.html
  */
class LayoutBuilder extends PolymerElement {
  // render function
  render() {
    return html` <style>
        :host {
          display: block;
        }

        :host button {
          display: block;
          margin: 0;
        }

        :host button,
        :host #content-wrapper {
          border: 1px solid #ddd;
        }

        :host #content:not(:empty) {
          padding: 15px;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <div id="content-wrapper">
        <div id="prepend-child">
          <button on-tap="_handleAddChild">Insert into [[type]]</button>
        </div>
        <div id="content"><slot></slot></div>
      </div>
      <div id="insert-sibling-after">
        <button on-tap="_handleAddSibling">Add new [[type]]</button>
      </div>`;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Layout builder",
        description: "A new UI for adding content to layouts",
        icon: "icons:android",
        color: "green",
        tags: ["Developer", "Layout"],
        handles: [],
        meta: {
          author: "HAXTheWeb core team",
          owner: "The Pennsylvania State University",
        },
      },
      settings: {
        configure: [],
        advanced: [],
      },
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      type: {
        name: "type",
        type: Boolean,
        value: "layout",
      },
      id: {
        name: "id",
        type: String,
        reflecttoAttribute: true,
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "layout-builder";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    this.id = this._generateUUID();
  }
  _handleAddChild() {
    let lb = document.createElement("layout-builder");
    lb.type = "sub-" + this.type;
    lb.innerHTML = `I am a ${this.type} of ${this.id}.`;
    this.prepend(lb);
  }
  _handleAddSibling() {
    let lb = document.createElement("layout-builder");
    lb.type = this.type;
    lb.innerHTML = `I am a ${this.type} of ${this.id}.`;
    this.parentNode.insertBefore(lb, this.nextSibling);
  }
  /**
   * Generate a UUID
   */
  _generateUUID() {
    let hex = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return this.type + "-ss-s-s-s-sss".replace(/s/g, hex);
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
}
customElements.define(LayoutBuilder.tag, LayoutBuilder);
export { LayoutBuilder };
