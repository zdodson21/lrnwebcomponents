/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorPromptButton } from "./rich-text-editor-prompt-button.js";
import { RichTextEditorButtonStyles } from "./rich-text-editor-button-styles.js";
/**
 * `rich-text-editor-image`
 * `an inline image button for rich text editor`
 *
 * @element rich-text-editor-image
 */
class RichTextEditorImage extends RichTextEditorPromptButton {

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-image";
  }
  constructor() {
    super();
    this.fields = [
      {
        property: "alt",
        title: "Alt Text",
        description: "The alt text",
        inputMethod: "textfield"
      },
      {
        property: "src",
        title: "Image URL",
        description: "The image URL. (Leave blank to remove.)",
        inputMethod: "textfield"
      }
    ];
    this.tag = "img";
    this.value = {
      src: null,
      alt: null
    };
  }

  // properties available to the custom element for data binding
  static get properties() {
    return { ...super.properties };
  }

  /**
   * an <a> tag is only needed if there is link text and an href
   * @param {object} value the prompt values
   * @returns {boolean} if the tag is needed for the element
   */
  _getTagNeeded(value) {
    return (
      value && this.getCleanValue("src") && this.getCleanValue("src") !== null
    );
  }
}
window.customElements.define(RichTextEditorImage.tag, RichTextEditorImage);
export { RichTextEditorImage };
