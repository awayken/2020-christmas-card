import { LitElement, html, css } from 'lit-element';

class ISpyTarget extends LitElement {
    static get properties() {
        return {
            debug: { type: Boolean },
            found: { type: Boolean },
            height: { type: String },
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

    connectedCallback() {
        super.connectedCallback();

        this.found = false;
    }

    targetClick(e) {
        console.log(e);

        this.found = !this.found;
    }

    render() {
        let foundHTML = '';

        if (this.found) {
            foundHTML = html`
                <p>You found me!</p>
                <slot name="found"></slot>
            `;
        }

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
                @click="${this.targetClick}"
            >
                ispy-target
            </button>
            ${foundHTML}
        `;
    }
}

window.customElements.define('ispy-target', ISpyTarget);
