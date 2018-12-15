import WebComponent from "https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js";
import html from "https://tjb-webcomponents.github.io/html-template-string/html-template-string.js";
// import html from "../node_modules/html-template-string/html-template-string.js";

class tjbNotify extends WebComponent() {
  // Styles
  ////////////////////////////////////////////////////////////

  CSS() {
    return html `
      <style>
        :host {
          --background-error: #fa354c;
          --background-success: limegreen;
          --color-error: white;
          --color-success: white;

          --margin: 10px 0;
          --padding: 15px;
        }

        .message {
          position: relative;
          align-items: center;
          display: flex;
          box-sizing: border-box;
          justify-content: center;
          display: none;
          margin: var(--margin);
          padding: var(--padding);
        }

        .open {
          display: block;
          animation: blink 250ms linear 2;
        }

        .message--error {
          background: var(--background-error);
        }

        .message--error,
        .message--error a,
        .message--error .remove
        {
          color: var(--color-error);
        }

        .message--success {
          background: var(--background-success);
        }

        .message--success,
        .message--success a,
        .message--success .remove
        {
          color: var(--color-success);
        }

        ul {
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: underline;
          cursor: pointer;
        }

        .remove {
          background: transparent;
          border: none;
          position: absolute;
          top: calc(var(--padding) / 3);
          right: calc(var(--padding) / 3);
        }

        @keyframes blink {
          50% {
            background: transparent;
          }
        }
      </style>
    `;
  }

  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    this.removeNode = html `
      <button
        type="button" 
        class="remove"
        onclick="${e => this.handleRemove(e)}">
        X
      </button>
    `;

    return html `
      <div class="message">
        ${this.removeNode}
      </div>
    `;
  }

  // Logic
  ////////////////////////////////////////////////////////////

  set error(message) {
    this.child = html `<div>${message}</div>`;
    this.class = 'error';
  }

  set success(message) {
    this.child = html `<div>${message}</div>`;
    this.class = 'success';
  }

  set class(name) {
    this.domNode.className = `message`;
    setTimeout(() => this.domNode.className = `message open message--${name}`, 100);
  }

  set child(node) {
    if (this._child) this.domNode.removeChild(this._child);
    this._child = node;
    this.domNode.appendChild(this._child);
  }

  handleRemove(e) {
    this.domNode.className = `message`;
    this.parentNode.removeChild(this);
  }

}

customElements.define("tjb-notify", tjbNotify);
