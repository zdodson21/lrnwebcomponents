/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@haxtheweb/simple-icon/lib/simple-icon-lite.js";
import "@haxtheweb/simple-icon/lib/simple-icons.js";
import "@haxtheweb/simple-icon/lib/simple-icon-button-lite.js";
/**
 * `item-overlay-ops`
 * @element item-overlay-ops
 * `Overlayed editing ops on whatever the current item slotted in is`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 */
class ItemOverlayOps extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          outline: none;
        }
        #container {
          display: none;
          opacity: 0;
          background-color: transparent;
          transition:
            background-color 0.6s linear,
            visibility 0.6s linear,
            opacity 0.6s linear;
          visibility: hidden;
        }
        :host([edit-mode]) #container {
          display: block;
          opacity: 0.4;
          visibility: visible;
          background-color: var(--item-overlay-ops, #999999);
          position: absolute;
          z-index: 1;
          @apply --item-overlay-ops-container;
        }
        :host([edit-mode]) #container:hover,
        :host([edit-mode]) #container:focus,
        :host([focused]) #container {
          opacity: 0.8;
          background-color: var(--item-overlay-ops, #ffffff);
        }
        .ops {
          width: 100%;
          height: 39px;
          padding: 0;
          margin: 0;
          border-bottom: 1px solid rgba(100, 100, 100, 0.4);
          text-align: center;
        }
        .ops simple-icon-button-lite {
          display: inline-flex;
          --simple-icon-width: 26px;
          --simple-icon-height: 26px;
          padding: 1px;
          margin: 6px;
          color: #999999;
        }
        .ops simple-icon-button-lite#cancel {
          --simple-icon-width: 16px;
          --simple-icon-height: 16px;
          padding: 0px;
          margin: 4px;
          position: absolute;
        }
        .ops simple-icon-button-lite.active {
          color: #000000;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
        }
        .active-op {
          text-transform: capitalize;
          margin: 0;
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          text-align: center;
        }
        #workingarea {
          width: 100%;
          padding: 0;
          margin: 0 auto;
          align-content: center;
        }
        #workingarea simple-icon-button-lite {
          --simple-icon-width: 50%;
          --simple-icon-height: 100%;
          display: inline-flex;
          min-width: unset;
          padding: 16px;
          margin: 0;
          border: none;
          border-radius: 0;
        }
        #workingarea #option1 {
          background-color: rgba(100, 255, 100, 0.6);
        }
        #workingarea #option2 {
          background-color: rgba(255, 100, 100, 0.6);
        }
        #workingarea #option1:hover,
        #workingarea #option1:focus {
          background-color: rgba(100, 255, 100, 1);
        }
        #workingarea #option2:hover,
        #workingarea #option2:focus {
          background-color: rgba(255, 100, 100, 1);
        }
        #workingarea {
          display: none;
        }
        #workingarea.move {
          display: flex;
        }
        #workingarea.move #option1,
        #workingarea.move #option2 {
          background-color: rgba(200, 200, 200, 0.5);
        }
        #workingarea.move #option1:hover,
        #workingarea.move #option1:focus,
        #workingarea.move #option2:hover,
        #workingarea.move #option2:focus {
          background-color: rgba(200, 200, 200, 1);
        }
        #workingarea.remove {
          display: flex;
        }
        #workingarea.duplicate {
          display: flex;
        }
      </style>
      <div id="container">
        <div class="ops">
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:add"
            id="add"
            hidden$="[[!add]]"
            title="Add to this"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:create"
            id="edit"
            hidden$="[[!edit]]"
            title="Edit this"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:swap-horiz"
            id="move"
            hidden$="[[!move]]"
            title="Move this"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:delete"
            id="remove"
            hidden$="[[!remove]]"
            title="Delete this"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:content-copy"
            id="duplicate"
            hidden$="[[!duplicate]]"
            title="Duplicate this"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_opTap"
            icon="icons:cancel"
            id="cancel"
            hidden$="[[!__anyOp]]"
            title="Cancel"
          ></simple-icon-button-lite>
        </div>
        <div class="active-op">[[activeTitle]]</div>
        <div id="workingarea" class$="[[activeOp]]">
          <simple-icon-button-lite
            on-click="_optionSelected"
            id="option1"
            title="[[__option1Text]]"
            icon="[[__option1Icon]]"
          ></simple-icon-button-lite>
          <simple-icon-button-lite
            on-click="_optionSelected"
            id="option2"
            title="[[__option2Text]]"
            icon="[[__option2Icon]]"
          ></simple-icon-button-lite>
        </div>
      </div>
      <slot></slot>
    `;
  }

  static get tag() {
    return "item-overlay-ops";
  }

  static get properties() {
    return {
      /**
       * Edit mode whether it is shown or not
       */
      editMode: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
      },
      /**
       * Edit mode whether it is shown or not
       */
      focused: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
      },
      /**
       * Title to present of active option
       */
      activeTitle: {
        type: String,
      },
      /**
       * Active operation
       */
      activeOp: {
        type: String,
      },
      /**
       * Add opertaions
       */
      add: {
        type: Boolean,
        value: false,
      },
      /**
       * Edit opertaions
       */
      edit: {
        type: Boolean,
        value: false,
      },
      /**
       * Move opertaions
       */
      move: {
        type: Boolean,
        value: false,
      },
      /**
       * Allow height to be defined rather than calculated
       */
      fixedHeight: {
        type: Number,
        observer: "fixedHeightChanged",
      },
      /**
       * Ability to disable height setting. Useful if using CSS vars.
       */
      disableAutoHeight: {
        type: Boolean,
        value: false,
      },
      /**
       * Remove opertaions
       */
      remove: {
        type: Boolean,
        value: false,
      },
      /**
       * Duplicate opertaions
       */
      duplicate: {
        type: Boolean,
        value: false,
      },
      __anyOp: {
        type: Boolean,
        value: false,
      },
    };
  }

  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    // delay is enough to get the height correct
    setTimeout(() => {
      this._windowResize();
    }, 5);
    this.windowControllers = new AbortController();

    this.setAttribute("tabindex", "0");
    window.addEventListener("resize", this._windowResize.bind(this), {
      signal: this.windowControllers.signal,
    });

    this.addEventListener("focusin", this._inFocus.bind(this));
    this.addEventListener("focusout", this._outFocus.bind(this));
  }

  /**
   * detached life cycle
   */
  disconnectedCallback() {
    this.removeEventListener("focusin", this._inFocus.bind(this));
    this.removeEventListener("focusout", this._outFocus.bind(this));
    this.windowControllers.abort();
    super.disconnectedCallback();
  }
  /**
   * Fixed height changed, update.
   */
  fixedHeightChanged(newValue, oldValue) {
    if (newValue) {
      if (!this.disableAutoHeight) {
        this.shadowRoot.querySelector("#container").style.height =
          this.fixedHeight + "px";
        this.shadowRoot.querySelector("#workingarea").style.height =
          this.fixedHeight - 80 + "px";
      }
    }
  }
  /**
   * react to window resizing
   */
  _windowResize(e) {
    let rect = this.getBoundingClientRect();
    this.shadowRoot.querySelector("#container").style.width = rect.width + "px";
    if (!this.disableAutoHeight) {
      if (!this.fixedHeight || typeof this.fixedHeight === typeof undefined) {
        this.shadowRoot.querySelector("#container").style.height =
          rect.height + "px";
        this.shadowRoot.querySelector("#workingarea").style.height =
          rect.height - 80 + "px";
      } else {
        this.shadowRoot.querySelector("#container").style.height =
          this.fixedHeight + "px";
        this.shadowRoot.querySelector("#workingarea").style.height =
          this.fixedHeight - 80 + "px";
      }
    } else {
      this.shadowRoot.querySelector("#workingarea").style.height =
        rect.height - 80 + "px";
    }
  }

  /**
   * Support tapping the buttons in the top
   */
  _opTap(e) {
    let local = e.target;
    this.activeTitle = local.getAttribute("id");
    this.activeOp = local.getAttribute("id");
    this._resetActive();
    this.__anyOp = true;
    local.classList.add("active");
    // we switch icons for these
    switch (this.activeOp) {
      case "cancel":
        local.classList.remove("active");
        this.activeTitle = null;
        this.activeOp = null;
        this.__anyOp = false;
        break;
      case "remove":
        this.__option1Icon = "icons:check";
        this.__option1Text = "Confirm deleting this";
        this.__option2Icon = "icons:clear";
        this.__option2Text = "Cancel";
        break;
      case "duplicate":
        this.__option1Icon = "icons:check";
        this.__option1Text = "Confirm duplicating this";
        this.__option2Icon = "icons:clear";
        this.__option2Text = "Cancel";
        break;
      case "move":
        this.__option1Icon = "icons:arrow-back";
        this.__option1Text = "Move item left";
        this.__option2Icon = "icons:arrow-forward";
        this.__option2Text = "Move item right";
        break;
    }
    // let others know there's an event here
    let op = {
      element: this,
      operation: this.activeOp,
    };
    this.dispatchEvent(
      new CustomEvent("item-overlay-op-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: op,
      }),
    );
  }

  /**
   * Set element reflected focus so we can get the whole thing
   */
  _inFocus(e) {
    if (this.editMode) {
      this.focused = true;
    }
  }

  /**
   * Drop element reflection when all focus offs are fired
   */
  _outFocus(e) {
    if (this.editMode) {
      this.focused = false;
    }
  }

  /**
   * fire event because an option was selected.
   */
  _optionSelected(e) {
    let local = e.target;
    // fire that an option was selected and about what operation
    let ops = {
      element: this,
      operation: this.activeOp,
      option: local.getAttribute("id"),
    };
    this.dispatchEvent(
      new CustomEvent("item-overlay-option-selected", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: ops,
      }),
    );
    // don't reset for movement, just confirm / reject actions
    if (this.activeOp != "move") {
      this._resetActive();
      this.activeOp = null;
    }
  }

  /**
   * Reset the active selections
   */
  _resetActive() {
    this.shadowRoot.querySelector("#add").classList.remove("active");
    this.shadowRoot.querySelector("#edit").classList.remove("active");
    this.shadowRoot.querySelector("#move").classList.remove("active");
    this.shadowRoot.querySelector("#remove").classList.remove("active");
    this.shadowRoot.querySelector("#duplicate").classList.remove("active");
  }
}
customElements.define(ItemOverlayOps.tag, ItemOverlayOps);
export { ItemOverlayOps };
