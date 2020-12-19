import { LitElement, html, css } from 'lit-element';

import './ispy-modal.js';

class ISpyTarget extends LitElement {
    static get properties() {
        return {
            debug: { type: Boolean },
            found: { type: Boolean },
            height: { type: String },
            name: { type: String },
            width: { type: String },
            x: { type: String },
            y: { type: String }
        };
    }

    static get styles() {
        return css`
            .debug {
                outline: 2px solid red;
            }
            button {
                background: transparent;
                border: 0;
                cursor: default;
                position: absolute;
            }
        `;
    }

    toggleFound(e) {
        this.found = !this.found;
    }

    render() {
        let buttonStyle = `
            height: ${this.height};
            left: ${this.x};
            top: ${this.y};
            width: ${this.width};
        `;

        return html`
            <button
                .style="${buttonStyle}"
                class="${this.debug ? 'debug' : ''}"
                @click="${this.toggleFound}"
                aria-label="${this.name}"
            ></button>

            <ispy-modal ?show="${this.found}" @close="${this.toggleFound}">
                <slot name="found"></slot>
            </ispy-modal>
        `;
    }
}

window.customElements.define('ispy-target', ISpyTarget);
