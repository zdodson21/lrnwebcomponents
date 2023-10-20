import { html, LitElement } from 'lit';
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
class SiteRegion extends LitElement {
  static get tag() {
    return 'site-region';
  }
  static get properties() {
    return {
      name: { type: String },
      contentItemId: { type: String },
    };
  }

  constructor() {
    super();
    this.name = null;
    this.__disposer = this.__disposer ? this.__disposer : [];
    // load region data when we get access to it
    autorun((reaction) => {
      const data = toJS(store.regionData);
      if (this.name && data[this.name]) {
        this.contentItemId = data[this.name];
      }
      this.__disposer.push(reaction);
    });
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (this.shadowRoot) {
        if (propName === 'name' && this[propName]) {
          const data = toJS(store.regionData);
          if (data[this.name]) {
            this.contentItemId = data[this.name];
          }
        }
        if (propName === 'contentItemId' && this[propName]) {
          let item = store.findItem(this.contentItemId);
          if (item && item.location) {
            fetch(item.location,
              {
                method: 'GET',
                priority: 'low',
              }
            )
            .then((response) => {
              if (response.ok) {
                return response.text();
              }
            })
            .then((data) => {
              // region data found
              let div = document.createElement('div');
              div.innerHTML = data;
              this.innerHTML = div.innerHTML;
            })
            .catch((err) => {
              console.error('regio data not found');
            });
          }
        }
      }
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}
customElements.define(SiteRegion.tag, SiteRegion);