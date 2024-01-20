/**
 * @name data-onlinechecker
 * @abstract web component for html on-/offline
 * @description shows online (green circle) or offline (red circle) 
 * @version 0.1.0
 * @author ZHENG Robert
 */


class OnlineChecker extends HTMLElement 
{
    constructor() 
    {
        // We are not even going to touch this.
        super();
        this._isOnline = false;
        // lets create our shadow root
        this.shadowObj = this.attachShadow({mode: 'open'});
    }


    render() 
    {
        this.shadowObj.innerHTML = this.getTemplate();
    }

    getTemplate() 
    {
        return `
        <span class="online-status online-${this._isOnline ? 'true' : 'false'}"></span>
        <span>${this._isOnline ? 'Online' : 'Offline'}</span>
        ${this.getStyle()}
        `;
    }

    getStyle() 
    {
        return `<style>
        :host {
        display: inline-block;
        border: 1px solid #cac6c6;
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

    connectedCallback() 
    {
        this.isOnline = navigator.onLine;
        this.render();
    }

    set isOnline(value) 
    {
        if(value !== this._isOnline) 
        {
            this._isOnline = value;
            this.render();
        }
    }

    get isOnline()
    {
        return this._isOnline;
    }
}
customElements.define('data-onlinechecker', OnlineChecker);
