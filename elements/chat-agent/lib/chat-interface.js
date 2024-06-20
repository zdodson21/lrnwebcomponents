/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { ChatAgentModalStore } from "../chat-agent.js";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";
import {
  autorun,
  toJS,
} from "mobx";
class ChatInterface extends DDD {

  static get tag() {
    return "chat-interface";
  }

  constructor() {
    super();
    this.chatLog = [];
    autorun(() => {
      this.chatLog = toJS(ChatAgentModalStore.chatLog);
    })
  }

  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */
        
        :host {
          display: block;
          z-index: 999999;
          width: 100%;
        }

        .chat-interface-wrapper {
          background-color: transparent;
        }

        .chat-wrapper {
          background-color: var(--data-theme-primary, var(--ddd-primary-1));
          padding: var(--ddd-spacing-0) var(--ddd-spacing-2) var(--ddd-spacing-2) var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          box-shadow: var(--ddd-boxShadow-xl);
        }

        :host([enableDeveloperPanel]), .chat-wrapper {
          padding-top: var(--ddd-spacing-1);
        }

        .chat-container {
          width: 100%;
          height: 100%;
          background-color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-sm);
        }

        .chat-messages {
          max-height: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          scrollbar-width: thin;
        }
      `
    ];
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    
    if (ChatAgentModalStore.isInterfaceHidden) {
      this.style.display = "none";
    } else {
      this.style.display = "block";
    }
  }

  // TODO page scrolls down when new message is sent. Not when message is received
  render() {
    return html`
      <div class="chat-interface-wrapper">
        <div class="chat-wrapper">
          ${ChatAgentModalStore.developerModeEnabled ? html`
            <chat-developer-panel></chat-developer-panel>
          ` : ''}
          <div class="main-wrapper">
            <chat-control-bar></chat-control-bar>
            <div class="chat-container">
              <div class="chat-messages">
                  ${this.chatLog.map((message) => html`
                    <chat-message message="${message.message}" ?sent-prompt="${message.author === ChatAgentModalStore.userName}" ?suggested-prompts="${message.author === "merlin"}"></chat-message>
                  `)}
                <chat-message message="Hello! My name is Merlin. How can I help you today?" suggested-prompts></chat-message>
                <chat-message sent-prompt message="Hi Merlin! I could use some help with programming."></chat-message>
                <chat-message message="Certainly. I love programming! This is some extra text to ensure that this message is extra long to show how the chat message text will wrap."></chat-message>
                <chat-message sent-prompt message="This last message will cause the chat to scroll."></chat-message>
              </div>
              <chat-input placeholder="${ChatAgentModalStore.promptPlaceholder}"></chat-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      chatLog: {
        type: Array,
      }
    };
  }
}

globalThis.customElements.define(ChatInterface.tag, ChatInterface);
export { ChatInterface };