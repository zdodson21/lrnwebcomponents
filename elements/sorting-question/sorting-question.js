// dependencies / things imported
import { html, css, nothing } from "lit";
import { QuestionElement } from "@haxtheweb/multiple-choice/lib/QuestionElement.js";
import "@haxtheweb/simple-icon/lib/simple-icons.js";
import "@haxtheweb/simple-toolbar/lib/simple-toolbar-button.js";
import "@haxtheweb/simple-toast/simple-toast.js";
import "@haxtheweb/grid-plate/grid-plate.js";
import "./lib/sorting-option.js";

export class SortingQuestion extends QuestionElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return "sorting-question";
  }

  // get the options directly off the UI. This will help in providing them in the correct order as well
  // this is definitely an anti pattern for us but displayedAnswers is effectively just setting the INITIAL
  // display order while the user then actively manipulates the shadow rendered data.
  getOptions(flag = "") {
    if (this.shadowRoot) {
      if (flag) {
        return this.shadowRoot.querySelectorAll(`sorting-option[${flag}]`);
      } else {
        return this.shadowRoot.querySelectorAll("sorting-option");
      }
    }
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    // inputs which will show up in answers but sorting question is a bit odd
    this.randomize = true;
    this.numberCorrect = 0;
    this.hasHint = this.querySelector('[slot="hint"]');
    this.hasContent = this.querySelector('[slot="content"]');
    this.hasFeedbackCorrect = this.querySelector('[slot="feedbackCorrect"]');
    this.hasFeedbackIncorrect = this.querySelector(
      '[slot="feedbackIncorrect"]',
    );
    this.hasEvidence = this.querySelector('[slot="evidence"]');
    this.correctText = "That is correct, Great job!";
    this.correctIcon = "icons:thumb-up";
    this.incorrectIcon = "icons:thumb-down";
    this.quizName = "default";
    this.question = "Put the following in order";
    this.t = {
      numCorrectLeft: "You have",
      numCorrectRight: "correct",
      checkAnswer: "Check answer",
      tryAgain: "Try again",
    };
    // @todo this needs refactored when we move to QuestionElement
    this.checkLabel = "Check answer";
    this.resetLabel = "Try again";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("../locales/sorting-question.es.json", import.meta.url).href +
        "/../",
      locales: ["he", "ja", "es"],
    });
  }

  checkAnswer() {
    this.showAnswer = true;
  }
  resetAnswer() {
    if (this.getOptions("incorrect")) {
      const firstWrong = this.getOptions("incorrect")[0];
      if (firstWrong) {
        setTimeout(() => {
          firstWrong.shadowRoot
            .querySelector("#downArrow")
            .shadowRoot.querySelector("button")
            .focus();
        }, 0);
      }
    }
    this.showAnswer = false;
    globalThis.dispatchEvent(
      new CustomEvent("simple-toast-hide", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: false,
      }),
    );
    //reset appearance of all options
    this.getOptions().forEach((child) => {
      child.disabled = false;
      child.incorrect = null;
      child.correct = null;
    });
    let gotRight = this.numberCorrect === this.answers.length;
    // if we got it right, reset the whole interaction in case they want to take it again
    if (gotRight) {
      this.displayedAnswers = [];
      this.answers.forEach((el) => {
        el.userGuess = "";
      });
      const answers = JSON.parse(JSON.stringify(this.answers));
      this.answers = [...answers];
    }
    this.numberCorrect = 0;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      numberCorrect: { type: Number },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "showAnswer") {
        if (this.showAnswer) {
          var numCorrect = 0;
          let children = this.getOptions();
          for (var i = 0; i < this.answers.length; i++) {
            if (
              children[i].innerText === this.answers[i].label &&
              i === this.answers[i].order
            ) {
              numCorrect += 1;
              children[i].correct = true;
              children[i].incorrect = null;
            } else {
              children[i].correct = null;
              children[i].incorrect = true;
            }
            children[i].disabled = true;
          }
          this.numberCorrect = numCorrect;
          let si = document.createElement("simple-icon-lite");
          let extras = {};
          let toastShowEventName = "simple-toast-show";
          // support for haxcms toast
          if (globalThis.HAXCMSToast) {
            toastShowEventName = "haxcms-toast-show";
            si.style.setProperty("--simple-icon-height", "40px");
            si.style.setProperty("--simple-icon-width", "40px");
            si.style.height = "150px";
            si.style.marginLeft = "8px";
          }
          // focus feedback when we're done
          this.shadowRoot.querySelector("#feedback").focus();
          let gotRight = this.numberCorrect === this.answers.length;
          // see if they got this correct based on their answers
          if (gotRight) {
            this.playSound("success");
            this.__toastColor = "green";
            this.__toastIcon = this.correctIcon;
            this.__toastText = this.correctText;
            this.makeItRain();
            extras.hat = "party";
          } else {
            this.playSound("error");
            this.__toastColor = "red";
            this.__toastIcon = this.incorrectIcon;
            this.__toastText = `${this.t.numCorrectLeft} ${this.numberCorrect} of ${this.answers.length} ${this.t.numCorrectRight}`;
            extras.fire = true;
          }
          si.icon = this.__toastIcon;
          si.style.marginLeft = "16px";
          si.accentColor = this.__toastColor;
          si.dark = true;
          // gets it all the way to the top immediately
          globalThis.dispatchEvent(
            new CustomEvent(toastShowEventName, {
              bubbles: true,
              composed: true,
              cancelable: true,
              detail: {
                text: this.__toastText,
                accentColor: this.__toastColor,
                duration: 3000,
                slot: si,
                ...extras,
              },
            }),
          );
          // start of data passing, this is a prototype atm
          let eventData = {
            activityDisplay: "answered",
            objectName: this.quizName,
            resultSuccess: gotRight,
          };
          this.dispatchEvent(
            new CustomEvent("user-engagement", {
              bubbles: true,
              composed: true,
              cancelable: false,
              detail: eventData,
            }),
          );
        } else {
          this.getOptions().forEach((child) => {
            child.disabled = false;
          });
        }
      }
      if (propName === "disabled" && this.shadowRoot) {
        if (this.disabled) {
          this.getOptions().forEach((child) => {
            child.disabled = true;
            child.correct = null;
            child.incorrect = null;
          });
        } else {
          this.getOptions().forEach((child) => {
            child.disabled = false;
          });
        }
      }
    });
  }

  // CSS - specific to Lit
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-width: 160px;
          padding: var(--ddd-spacing-8);
          border: var(--ddd-border-md);
          border-radius: var(--ddd-radius-xs);
          transition: all 0.3s ease-in-out;
        }
        :host(:focus),
        :host(:focus-within),
        :host(:hover) {
          border-color: var(--simple-colors-default-theme-accent-12);
        }

        simple-toolbar-button {
          font-size: var(--ddd-font-size-xs);
          font-family: var(--ddd-font-navigation);
          transition: all 0.3s ease-in-out;
          border: none;
          border-radius: var(--ddd-radius-xs);
        }
        simple-toolbar-button {
          background-color: light-dark(
            var(--ddd-theme-default-link),
            var(--ddd-theme-default-linkLight)
          );
          color: light-dark(white, black);
        }
        simple-toolbar-button[disabled] {
          background-color: light-dark(
            var(--ddd-theme-default-limestoneLight),
            var(--ddd-theme-default-slateGray)
          );
          color: light-dark(black, white);
          opacity: 0.5;
        }
        :host simple-toolbar-button:hover::part(button),
        :host simple-toolbar-button:focus::part(button),
        :host simple-toolbar-button:focus-within::part(button),
        :host simple-toolbar-button:active::part(button) {
          cursor: pointer;
          box-shadow: var(--ddd-boxShadow-sm);
          border-color: black;
        }
        simple-toolbar-button::part(button) {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xs);
          padding: var(--ddd-spacing-2);
        }
        simple-toolbar-button::part(label) {
          font-size: var(--ddd-font-size-s);
          font-family: var(--ddd-font-navigation);
          padding: 0;
          margin: 0;
        }
        #check {
          margin-right: var(--ddd-spacing-4);
        }
        .options {
          margin-bottom: var(--ddd-spacing-6);
          border-radius: var(--ddd-radius-xs);
          border: var(--ddd-border-xs);
        }

        #buttons {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h3 {
          padding: 0;
          margin: 0 0 var(--ddd-spacing-8) 0;
          font-family: var(--ddd-font-navigation);
        }
        .feedback {
          margin: var(--ddd-spacing-3) 0;
          font-size: var(--ddd-font-size-m);
          font-weight: bold;
          text-align: center;
        }
        sorting-option img {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-sm);
          box-shadow: var(--ddd-boxShadow-sm);
          margin-right: var(--ddd-spacing-4);
        }
      `,
    ];
  }
  // render the area the user will interact with the question
  // our default implementation is a multiple-choice element
  renderInteraction() {
    return html`
      <fieldset class="options">
        ${this.displayedAnswers.map(
          (answer) =>
            html`<sorting-option ?disabled="${this.disabled}"
              >${answer.image
                ? html`<img src="${answer.image}" alt="${answer.alt}" />`
                : nothing}${answer.label}</sorting-option
            >`,
        )}
      </fieldset>
    `;
  }
  render() {
    return html`
      <meta property="oer:assessing" content="${this.relatedResource}" />
      <confetti-container id="confetti">
        <grid-plate layout="1-1">
          <div slot="col-1">
            <h3 property="oer:name">${this.question}</h3>
            ${this.renderInteraction()}
            ${!this.hideButtons ? this.renderButtons() : ``}
          </div>
          <div slot="col-2">
            <details
              tabindex="${this.disabled ? "-1" : ""}"
              ?disabled="${this.disabled}"
              ?open="${!this.hasContent}"
              id="directions"
            >
              <summary>Directions</summary>
              <div>${this.renderDirections()}</div>
            </details>
            ${this.hasContent
              ? html` <details
                  tabindex="${this.disabled ? "-1" : ""}"
                  ?disabled="${this.disabled}"
                  ?open="${!this.showAnswer}"
                  id="related"
                >
                  <summary>Related content</summary>
                  <div>
                    <slot name="content"></slot>
                  </div>
                </details>`
              : ``}
            <details
              tabindex="${!this.showAnswer || this.disabled ? "-1" : ""}"
              ?disabled="${!this.showAnswer || this.disabled}"
              ?open="${this.showAnswer}"
            >
              <summary id="feedback">Feedback</summary>
              <div>${this.renderFeedback()}</div>
            </details>
          </div>
        </grid-plate>
      </confetti-container>
    `;
  }
  // the case for whether or not this is inactive based on user input
  inactiveCase() {
    // due to the odd nature of this, the 1st supplies option COULD be in the right order
    // as a result we ALWAYS want to be active case
    return true;
  }

  renderButtons() {
    return html`
      <div id="buttons">
        <simple-toolbar-button
          id="check"
          ?disabled="${this.disabled ||
          !this.inactiveCase() ||
          this.showAnswer}"
          @click="${this.checkAnswer}"
          label="${this.checkLabel}"
        >
        </simple-toolbar-button>
        <simple-toolbar-button
          id="reset"
          ?disabled="${this.disabled ||
          !this.inactiveCase() ||
          (this.inactiveCase() && !this.showAnswer)}"
          @click="${this.resetAnswer}"
          label="${this.resetLabel}"
        >
        </simple-toolbar-button>
      </div>
    `;
  }

  // this manages the directions that are rendered and hard coded for the interaction
  renderDirections() {
    return html`<p>
      Place the items in the correct order either by clicking the up and down
      arrows or drag and drop. When you believe you have them in the correct
      order, test your answer by selecting
      <strong>${this.t.checkAnswer}</strong>. You will get feedback just below
      here indicating correctness of your answer.
    </p>`;
  }

  // this manages the output of the feedback area
  renderFeedback() {
    return html`
      ${this.showAnswer && this.numberCorrect !== this.answers.length
        ? html` <p class="feedback">
              ${this.t.numCorrectLeft}
              ${this.numberCorrect}/${this.answers.length}
              ${this.t.numCorrectRight}
            </p>
            ${this.hasFeedbackIncorrect
              ? html`<slot name="feedbackIncorrect"></slot>`
              : ``}`
        : ``}
      ${this.showAnswer && this.numberCorrect === this.answers.length
        ? html` <p class="feedback">${this.correctText}</p>
            ${this.hasFeedbackCorrect
              ? html`<slot name="feedbackCorrect"></slot>`
              : ``}`
        : ``}
      ${this.hasHint &&
      this.showAnswer &&
      this.numberCorrect !== this.answers.length
        ? html`
            <h4>Need a hint?</h4>
            <div>
              <slot name="hint"></slot>
            </div>
          `
        : ``}
      ${this.hasEvidence &&
      this.showAnswer &&
      this.numberCorrect === this.answers.length
        ? html`
            <h4>Evidence</h4>
            <div>
              <slot name="evidence"></slot>
            </div>
          `
        : ``}
      <simple-toolbar-button
        ?disabled="${this.disabled || !this.showAnswer}"
        @click="${this.resetAnswer}"
        label="${this.t.tryAgain}"
      >
      </simple-toolbar-button>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(SortingQuestion.tag, SortingQuestion);
