/**
 * @name data-onlinechecker
 * @abstract web component for html on-/offline
 * @description shows online (green circle) or offline (red circle)
 * @version 0.1.1
 * @author ZHENG Robert 2021
 */

window.addEventListener("offline", (e) => {
  isOnline(false);
});

window.addEventListener("online", (e) => {
  isOnline(true);
});

function isOnline(bool) {
  const items = document.querySelectorAll("rz-onlinecheck");
  items.forEach((item) => {
    //item.dataset["with_text"] = "yes";
    item.setAttribute("is_online", bool);
  });
}

class OnlineChecker extends HTMLElement {
  static get observedAttributes() {
    return ["with_text", "is_online"];
  }

  constructor() {
    super();
    this._isOnline = false;
    this._withText = "yes";

    this.shadowObj = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    const WITH_TEXT = this.getAttribute("with_text") || `${this._withText}`;
    if (WITH_TEXT === "yes") {
      return `
        <span class="online-status online-${
          this._isOnline ? "true" : "false"
        }"></span>
        <span>${this._isOnline ? "Online" : "Offline"}</span>
        ${this.getStyle()}
        `;
    } else {
      return `
        <span class="online-status online-${
          this._isOnline ? "true" : "false"
        }"></span>
        ${this.getStyle()}
        `;
    }
  }

  getStyle() {
    return `<style>
        :host {
        display: inline-block;
        /*border: 1px solid #cac6c6;*/
        padding: 10px;
        border-radius: 5px;
        }

        .online-status 
        {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            display: inline-block;
        }

        .online-true 
        {
            background-color: green;
        }

        .online-false 
        {
            background-color: red;
        }
        </style>
        `;
  }

  connectedCallback() {
    this.isOnline = navigator.onLine;
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.isOnline = navigator.onLine;
    this.render();
  }

  set isOnline(value) {
    if (value !== this._isOnline) {
      this._isOnline = value;
      this.render();
    }
  }

  get isOnline() {
    return this._isOnline;
  }
}
customElements.define("rz-onlinecheck", OnlineChecker);
