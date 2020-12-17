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
                padding: 2em;
                position: fixed;
                right: 0;
                top: 0;
            }

            .wrap {
                background: var(--content-background);
                border: 2px solid currentColor;
                border-radius: .35em;
                color: var(--content-color);
                padding: var(--padding, 1em);
                position: relative;
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
                right: -.7em;
                top: -.7em;
            }
        `;
    }

    hide(e) {
        this.show = false;

        this.dispatchEvent(new CustomEvent('close'));
    }

    render() {
        if (!this.show) {
            return '';
        }

        return html`
            <div class="shade">
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
