import { LitElement, html, css } from 'lit-element';

class ISpyCanvas extends LitElement {
    static get properties() {
        return {
            alt: { type: String },
            src: { type: String }
        }
    }

    static get styles() {
        return css`
            div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                overflow: auto;
                -webkit-overflow-scrolling: auto;
            }
            img {
                display: block;
                user-select: none;
            }
        `;
    }

    render() {
        return html`
            <div>
                <img
                    alt="${this.alt}"
                    src="${this.src}"
                />
            </div>
        `;
    }
}

window.customElements.define('ispy-canvas', ISpyCanvas);
