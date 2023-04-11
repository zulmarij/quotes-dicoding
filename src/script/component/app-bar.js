class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: flex;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding-right: 1.5rem * 0.5);
          padding-left: 1.5rem * 0.5);
          margin-right: auto;
          margin-left: auto;
        }

        .title {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.9);
          text-decoration: none;
          white-space: nowrap;
        }

        button {
          background-color: #212529;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
      
      <div class="container">
        <h1 class="title">Quotes</h1>
        <button id="getRandomQuoteElement" type="submit">Random Quote</button>
      </div>
    `;
    this.shadowDOM
      .querySelector("#getRandomQuoteElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("app-bar", AppBar);
