import { LitElement, html, css } from 'lit-element';

class ISpyModal extends LitElement {
    static get properties() {
        return {
            show: { type: Boolean }
        };
    }

    static get styles() {
        return css`
            :host {
                --content-background: var(--background, #fff);
                --content-color: var(--color, #000);
            }

            .shade {
                align-items: center;
                background: var(--shade-background, rgba(0, 0, 0, 0.85));
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                left: 0;
                opacity: 0;
                padding: 2em;
                position: fixed;
                right: 0;
                transition: opacity 300ms ease-in-out;
                top: 0;
                z-index: -1;
            }

            .shade--shown {
                opacity: 1;
                z-index: 10;
            }

            .wrap {
                background: var(--content-background);
                border: 2px solid currentColor;
                border-radius: 0.35em;
                color: var(--content-color);
                max-width: 38em;
                padding: var(--padding, 1em);
                position: relative;
                transform: scale(0.5, 0.5);
                transition: transform cubic-bezier(0.68, -0.55, 0.27, 1.55)
                    400ms;
            }

            .shade--shown .wrap {
                transform: scale(1, 1);
            }

            button {
                appearance: none;
                -webkit-appearance: none;
                background: var(--content-background);
                border: 2px solid currentColor;
                border-radius: 100%;
                color: var(--content-color);
                font-size: 1.5em;
                line-height: 1;
            }

            .close {
                cursor: pointer;
                position: absolute;
                right: -0.7em;
                top: -0.7em;
            }
        `;
    }

    hide(e) {
        this.show = false;

        this.dispatchEvent(new CustomEvent('close'));
    }

    render() {
        return html`
            <div class="shade ${this.show ? 'shade--shown' : ''}">
                <div class="wrap">
                    <slot></slot>

                    <button
                        class="close"
                        @click="${this.hide}"
                        title="Close the modal"
                    >
                        &times;
                    </button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('ispy-modal', ISpyModal);
