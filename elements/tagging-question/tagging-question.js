/**
 * Copyright 2024
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit";
import { QuestionElement } from "@lrnwebcomponents/multiple-choice/lib/QuestionElement.js";

/**
 * `tagging-question`
 * `Answer question by applying related tags`
 * @demo demo/index.html
 * @element tagging-question
 */
class TaggingQuestion extends QuestionElement {
  static get tag() {
    return "tagging-question";
  }

  constructor() {
    super();
    this.guessDataValue = "selectedAnswers";
    this.dragEnter = false;
    this.dragEnterAnswer = false;
    this.dragging = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }
        .tag-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden; 
          margin: var(--tagging-question-tag-container-margin, auto);
          padding: var(--ddd-spacing-5);
          height: var(--tagging-question-tag-container-height, auto);
          max-width: var(--tagging-question-tag-container-max-width, 600px);
          transition: height 0.3s ease;
        }

        .tag-option-container {
          width: var(--tagging-question-tag-option-container-width, 100%);
          border-radius: var(--ddd-radius-sm);
          box-sizing: border-box;
        }

        #user-choice-container {
          display: flex;
          transition: all .3s ease-in-out;
          flex-wrap: wrap;
          justify-content: center;
          overflow-y: auto;
          gap: var(--ddd-spacing-4);
          min-height: var(--ddd-spacing-18);
          margin-bottom: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-5);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-sm);
          box-sizing: border-box;
          background-color: light-dark(var(--simple-colors-default-theme-grey-2),var(--simple-colors-default-theme-grey-10));
        }

        #possible-container {
          display: flex;
          padding: var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-xs);
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--ddd-spacing-4);
          min-height: var(--ddd-spacing-12);
        }


        :host([show-answer]) .tag-option {
          cursor: unset;
        }

        :host(:not([show-answer])) .tag-option:hover, :host(:not([show-answer])) .tag-option:focus {
          background-color: var(--simple-colors-default-theme-grey-3);
        }

        .tag-option.correct {
          outline: 4px solid var(--ddd-theme-default-opportunityGreen);
        }

        .tag-option.incorrect {
          outline: 4px solid var(--ddd-theme-default-original87Pink);
        }

        :host([dragging]) #user-choice-container {
          border-style: dashed;
          border-color: gray;
        }
        :host([drag-enter-answer][dragging]) #user-choice-container {
          border-style: dashed;
          border-color: black;
          background-color: light-dark(var(--simple-colors-default-theme-grey-3),var(--simple-colors-default-theme-grey-9));
        }
        :host([drag-enter][dragging]) #possible-container {
          border-color: black;
          border-style: dashed;
          background-color: light-dark(var(--simple-colors-default-theme-grey-2),var(--simple-colors-default-theme-grey-8));
        }

        .tag-option {
          font-size: var(--ddd-font-size-s);
          height: auto;
          display: inline-block;
          font-family: var(--ddd-font-navigation);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-sm);
          background-color: var(--simple-colors-default-theme-grey-2);
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
        }
      `
    ];
  }

  renderInteraction() {
    return html`<div class="tag-option-container">
    <div id="user-choice-container" @drop="${this.handleDrop}" @dragover="${this.allowDropAnswer}">
      ${this.selectedAnswers.map(answer => html`
        <button ?disabled="${this.disabled || this.showAnswer}" class="tag-option ${this.showAnswer ? (answer.correct ? 'correct' : 'incorrect') : ''}" draggable="${this.showAnswer ? "false" : "true"}" @dragstart="${this.handleDrag}" @dragend="${this.handleDragEnd}" @click="${() => this.handleTagClick(answer)}">${answer.label}</button>
      `)}
    </div>
    <div id="possible-container" @drop="${this.handleDrop}" @dragover="${this.allowDrop}">
      ${this.displayedAnswers.map(tagOption => html`
        <button ?disabled="${this.disabled || this.showAnswer}" class="tag-option" draggable="${this.showAnswer ? "false" : "true"}" @dragstart="${this.handleDrag}" @dragend="${this.handleDragEnd}" @click="${() => this.handleTagClick(tagOption)}">${tagOption.label}</button>
      `)}
    </div>
  </div>`;
  }

  isCorrect() {
    return this.answers.filter(answer => answer.correct).length === this.selectedAnswers.filter(answer => answer.correct).length && this.selectedAnswers.filter(answer => answer.correct).length === this.selectedAnswers.length;
  }

  renderFeedback() {
    return html`
    ${this.showAnswer && !this.isCorrect() ? html`
    <p class="feedback">${this.incorrectText}</p>
    ${this.hasFeedbackIncorrect ? html`<slot name="feedbackIncorrect"></slot>` : ``}` : ``}
    ${this.showAnswer && this.isCorrect() ? html`
    <p class="feedback">${this.correctText}</p>
    ${this.hasFeedbackCorrect ? html`<slot name="feedbackCorrect"></slot>` : ``}` : ``}
    ${this.showAnswer ? html`
      <p>${this.selectedAnswers.filter(answer => answer.correct).length} out of ${this.answers.filter(answer => answer.correct).length} correct options selected${this.selectedAnswers.length > this.answers.filter(answer => answer.correct).length && this.selectedAnswers.length > this.selectedAnswers.filter(answer => answer.correct).length ? html`, <strong>but too many options present!</strong>` : '.'}</p>
      <h4>Answers selected</h4>
      <dl>
      ${this.selectedAnswers.map(answer => html`
        <dt class="${answer.correct ? 'correct' : 'incorrect'}">${answer.label}</dt>
        <dd>${answer.selectedFeedback}</dd>
      `)}
      </dl>
      <h4>Answers not selected</h4>
      <dl>
      ${this.displayedAnswers.map(answer => html`
        <dt class="${!answer.correct ? 'correct' : 'incorrect'}">${answer.label}</dt>
        <dd>${answer.selectedFeedback}</dd>
      `)}
      </dl>
    </div>
  ` : ''}
      ${this.hasHint && this.showAnswer && !this.isCorrect() ? html`
        <h4>Need a hint?</h4>
        <div>
          <slot name="hint"></slot>
        </div>
      ` : ``}
      ${this.hasEvidence && this.showAnswer && this.isCorrect()  ? html`
        <h4>Evidence</h4>
        <div>
          <slot name="evidence"></slot>
        </div>
      ` : ``}
      <simple-toolbar-button
        ?disabled="${this.disabled || !this.showAnswer}"
        @click="${this.resetAnswer}"
        label="${this.t.tryAgain}">
      </simple-toolbar-button>
    `;
  }
  
  randomizeOptions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleDrag(e) {
    const tagOption = e.target.textContent.trim();
    e.dataTransfer.setData("text/plain", tagOption);
    this.dragging = true;
  }

  handleDragEnd(e) {
    const tagOption = e.target.textContent.trim();
    e.dataTransfer.setData("text/plain", tagOption);
    this.dragging = false;
    this.dragEnter = false;
    this.dragEnterAnswer = false;
  }

  allowDrop(e) {
    e.preventDefault();
    this.dragEnter = true;
    this.dragEnterAnswer = false;
  }
  allowDropAnswer(e) {
    e.preventDefault();
    this.dragEnterAnswer = true;
    this.dragEnter = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.dragEnter = false;
    this.dragEnterAnswer = false;
    const text = e.dataTransfer.getData("text/plain");
    let tagOption = this.answers.find(answer => answer.label === text);
    const isInOptionContainer = this.displayedAnswers.findIndex(answer => answer.label === text);
    const isInUserChoiceContainer = this.selectedAnswers.findIndex(answer => answer.label === text);
    
    if (isInOptionContainer !== -1 && e.target && e.target.getAttribute('id') !== 'possible-container') {
        this.handleTagMove(tagOption, "possible-container");
    } else if (isInUserChoiceContainer !== -1 && e.target && e.target.getAttribute('id') !== 'user-choice-container') {
        this.handleTagMove(tagOption, "user-choice-container");
    }
  }

  handleTagMove(tagOption, source) {
    if (source === "user-choice-container") {
      this.removeTag(tagOption);
    } else {
      this.addTag(tagOption);
    }
  }
  
  handleTagClick(targetTag) {
    if (this.selectedAnswers.filter(answer => answer.label === targetTag.label).length === 1) {
      this.handleTagMove(targetTag, "user-choice-container");
    } else if (this.displayedAnswers.filter(answer => answer.label === targetTag.label).length === 1) {
      this.handleTagMove(targetTag, "possible-container");
    }
  }

  addTag(targetTag) {
    if (!this.showAnswer) {
      this.selectedAnswers.push(targetTag);
      this.displayedAnswers = this.displayedAnswers.filter(answer => answer.label !== targetTag.label);
      this.requestUpdate();
    }
  }

  removeTag(targetTag) {
    if (!this.showAnswer) {
      this.selectedAnswers = this.selectedAnswers.filter(answer => answer.label !== targetTag.label);
      this.displayedAnswers.push(targetTag);
      this.requestUpdate();
    }
  }

  checkAnswer() {
    this.showAnswer = true;
    const allCorrect = this.answers.filter(answer => answer.correct).length === this.selectedAnswers.filter(answer => answer.correct).length && this.selectedAnswers.filter(answer => answer.correct).length === this.selectedAnswers.length;
    if (allCorrect) {
      this.makeItRain();
    }
  }

  resetAnswer() {
    this.showAnswer = false;
    globalThis.dispatchEvent(
      new CustomEvent("simple-toast-hide", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: false,
      }),
    );
    const allCorrect = this.answers.filter(answer => answer.correct).length === this.selectedAnswers.filter(answer => answer.correct).length && this.selectedAnswers.filter(answer => answer.correct).length === this.selectedAnswers.length;
    if (allCorrect) {
      this.displayedAnswers = [...this.answers];
      this.selectedAnswers = [];
      this.randomizeOptions(this.displayedAnswers);
    }
  }
  
  static get properties() {
    return {
      ...super.properties,
      dragging: { type: Boolean, reflect: true },
      dragEnter: { type: Boolean, reflect: true, attribute: "drag-enter"},
      dragEnterAnswer: { type: Boolean, reflect: true, attribute: "drag-enter-answer"},
    };
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(TaggingQuestion.tag, TaggingQuestion);
export { TaggingQuestion };