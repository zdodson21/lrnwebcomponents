/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { AccentCard } from "@haxtheweb/accent-card/accent-card.js";
import "@haxtheweb/simple-icon/simple-icon.js";
import "@haxtheweb/simple-icon/lib/simple-icons.js";
import "./lib/nav-card-item.js";
/**
 * `nav-card`
 * an accent card of link lists
 *
 * @customElement nav-card
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class NavCard extends AccentCard {
  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          --accent-card-content-padding-bottom: 0px;
        }

        ::slotted([slot="linklist"]) {
          --nav-card-item-color: var(--accent-card-color);
          --nav-card-item-background-color: var(--accent-card-background-color);
          margin-top: var(--nav-card-linklist-margin-top, 20px);
          margin-bottom: var(--nav-card-linklist-margin-bottom, 20px);
        }
      `,
    ];
  }

  // render function
  render() {
    return html` <article id="card">
      <div class="image-outer" ?hidden="${!this.imageSrc}">
        <div
          class="image"
          .style="${this.imageSrc
            ? `background-image: url(${this.imageSrc});`
            : `display: none;`}"
        ></div>
      </div>
      <div class="body">
        <h1 id="heading"><slot name="heading"></slot></h1>
        <div id="subheading"><slot name="subheading"></slot></div>
        <div id="content">
          <slot name="body"></slot>
          <div id="linklist">
            <slot name="linklist"></slot>
          </div>
        </div>
        <div id="footer"><slot name="footer"></slot></div>
      </div>
    </article>`;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Nav card",
        description: "an accent card of link lists",
        icon: "av:playlist-play",
        color: "pink",
        tags: ["Layout", "card", "Nav", "List"],
        handles: [],
        meta: {
          author: "HAXTheWeb core team",
          owner: "The Pennsylvania State University",
        },
      },
      settings: {
        configure: [
          {
            property: "accentColor",
            title: "Accent Color",
            description: "Select an accent color.",
            inputMethod: "colorpicker",
            required: false,
          },
          {
            property: "dark",
            title: "Dark",
            description: "Display the card as dark theme?",
            inputMethod: "boolean",
            required: false,
          },
          {
            property: "imageSrc",
            title: "Image",
            description: "Optional image",
            inputMethod: "haxupload",
            noVoiceRecord: true,
          },
          {
            slot: "heading",
            title: "Heading",
            inputMethod: "code-editor",
            required: false,
          },
          {
            slot: "subheading",
            title: "Subheading",
            inputMethod: "code-editor",
            required: false,
          },
          {
            slot: "body",
            title: "Body",
            inputMethod: "code-editor",
            required: false,
          },
          {
            property: "linkIcon",
            title: "Link Icon",
            description: "Select an icon.",
            inputMethod: "iconpicker",
            required: false,
          },
          {
            slot: "linklist",
            title: "Link List",
            inputMethod: "code-editor",
            required: false,
          },
          {
            slot: "footer",
            title: "Footer",
            inputMethod: "code-editor",
            required: false,
          },
        ],
        advanced: [],
      },
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return { ...super.properties };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "nav-card";
  }

  // life cycle
  constructor() {
    super();
    this.tag = NavCard.tag;
  }
}
customElements.define("nav-card", NavCard);
export { NavCard };
