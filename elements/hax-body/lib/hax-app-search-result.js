import { LitElement, html, css } from "lit-element/lit-element.js";
/**
 * `hax-source`
 * @customElement hax-source
 * `An element that brokers the visual display of a listing of material from an end point. The goal is to normalize data from some location which is media centric. This expects to get at least enough data in order to form a grid of items which are selectable. It's also generically implemented so that anything can be hooked up as a potential source for input (example: youtube API or custom in-house solution). The goal is to return enough info via fired event so that we can tell hax-body that the user selected a tag, properties, slot combination so that hax-body can turn the selection into a custom element / element injected into the hax-body slot.`
 */
class HaxAppSearchResult extends LitElement {
  constructor() {
    super();
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/paper-styles/paper-styles.js");
  }
  static get styles() {
    return [
      css`
        :host {
          display: inline-flex;
          width: 45%;
          background-color: var(--hax-color-bg-accent);
          color: var(--hax-color-text);
        }
        paper-button.button {
          margin: 0;
          padding: 7px;
          height: 168px;
          border-radius: 0;
          width: 100%;
          border: 1px solid var(--hax-color-border-outline);
          justify-content: flex-start;
          background-image: none;
          text-align: unset;
          display: flex;
        }
        paper-button:hover,
        paper-button:focus,
        paper-button:active {
          outline: 2px solid var(--hax-color-bg-accent1);
        }
        .detail-wrapper {
          padding: 0 8px;
          display: inline-block;
          height: 100%;
          width: calc(80% - 16px);
          overflow: hidden;
          font-family: "Noto Serif", serif;
        }
        .title {
          font-size: 16px;
          font-weight: bold;
          text-transform: none;
          padding-bottom: 4px;
        }
        .details {
          height: 100px;
          overflow: hidden;
          font-size: 12px;
          line-height: 16px;
          padding: 0;
          margin: 0;
          text-transform: none;
        }
        .image {
          display: inline-flex;
          height: 152px;
          width: 20%;
          background-color: lightgray;
        }
        @media screen and (max-width: 1000px) {
          :host {
            width: 100%;
          }
          .title {
            font-size: 12px;
          }
          .image {
            min-width: 160px;
            width: 160px;
          }
          .details {
            font-size: 10px;
          }
        }
        @media screen and (max-width: 600px) {
          .details {
            font-size: 8px;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <paper-button
        draggable="true"
        @click="${this._itemSelected}"
        @dragstart="${this._dragStart}"
        @dragend="${this._dragEnd}"
        class="button"
      >
        <iron-image
          alt=""
          class="image"
          src="${this.image}"
          preload=""
          fade=""
          sizing="cover"
        ></iron-image>
        <div class="detail-wrapper">
          <div class="title">${this.title}</div>
          <div class="details">${this.details}</div>
        </div>
      </paper-button>
    `;
  }
  static get tag() {
    return "hax-app-search-result";
  }
  static get properties() {
    return {
      image: {
        type: String
      },
      title: {
        type: String
      },
      details: {
        type: String
      },
      map: {
        type: Object
      },
      type: {
        type: String
      }
    };
  }
  /**
   * Drag start so we know what target to set
   */
  _dragStart(e) {
    // create the tag
    let target = this.cloneNode(true);
    window.HaxStore.instance.__dragTarget = target;
    if (e.dataTransfer) {
      this.crt = target;
      this.crt.style.position = "absolute";
      this.crt.style.top = "-1000px";
      this.crt.style.right = "-1000px";
      this.crt.style.transform = "scale(0.25)";
      this.crt.style.opacity = ".8";
      e.dataTransfer.dropEffect = "move";
      document.body.appendChild(this.crt);
      e.dataTransfer.setDragImage(this.crt, 0, 0);
    }
    e.stopPropagation();
    e.stopImmediatePropagation();
    // show where things can be dropped only during the drag
    if (
      !window.HaxStore.instance.activeHaxBody.openDrawer &&
      window.HaxStore.instance.editMode
    ) {
      let children = window.HaxStore.instance.activeHaxBody.children;
      // walk the children and apply the draggable state needed
      for (var i in children) {
        if (children[i].classList && target !== children[i]) {
          children[i].classList.add("mover");
        }
      }
    }
  }
  /**
   * When we end dragging ensure we remove the mover class.
   */
  _dragEnd(e) {
    this.crt.remove();
    let children = window.HaxStore.instance.activeHaxBody.children;
    // walk the children and apply the draggable state needed
    for (var i in children) {
      if (typeof children[i].classList !== typeof undefined) {
        children[i].classList.remove(
          "mover",
          "hovered",
          "moving",
          "grid-plate-active-item"
        );
      }
    }
    setTimeout(() => {
      this._itemSelected(e);
    }, 100);
  }

  /**
   * Handle media item selected.
   */
  _itemSelected(e) {
    var map = this.map;
    var gizmoType = this.type;
    // sanity check as well as guessing based on type if we absolutely have to
    if (
      (gizmoType === null || gizmoType === "") &&
      typeof map.source !== typeof undefined
    ) {
      gizmoType = window.HaxStore.guessGizmoType(map.source);
    }
    let haxElements = window.HaxStore.guessGizmo(gizmoType, map, false, true);
    // see if we got anything
    if (haxElements.length > 0) {
      if (haxElements.length === 1) {
        if (typeof haxElements[0].tag !== typeof undefined) {
          this.dispatchEvent(
            new CustomEvent("hax-insert-content", {
              bubbles: true,
              cancelable: true,
              composed: true,
              detail: haxElements[0]
            })
          );
        }
      } else {
        // hand off to hax-app-picker to deal with the rest of this
        window.HaxStore.instance.haxAppPicker.presentOptions(
          haxElements,
          gizmoType,
          "How would you like to display this " + gizmoType + "?",
          "gizmo"
        );
      }
    } else {
      window.HaxStore.toast("Sorry, I don't know how to handle that link yet.");
    }
  }
}
window.customElements.define(HaxAppSearchResult.tag, HaxAppSearchResult);
export { HaxAppSearchResult };
