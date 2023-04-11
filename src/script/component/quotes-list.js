
class QuotesList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set quotes(quotes) {
    this._quotes = quotes;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          padding-right: calc(1rem * 0.5);
          padding-left: calc(1rem * 0.5);
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.175);
          border-radius: 0.375rem;
        }

        .card-body {
          flex: 1 1 auto;
          padding: 1rem;
        }

        .card-footer {
          padding: 0.5rem 1rem;
          background-color: rgba(0, 0, 0, 0.03);
          border-top: 1px solid rgba(0, 0, 0, 0.175);
        }
        .card-footer:last-child {
          border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px);
        }

        .blockquote {
          margin: 0;
          font-size: 1.25rem;
        }
        .blockquote-footer {
          font-size: 0.875em;
          color: #6c757d;
        }
        .blockquote-footer::before {
          content: "— ";
        }
      </style>
    `;

    this._quotes.forEach((quote) => {
      this.shadowDOM.innerHTML += `
          <div class="card">
            <div class="card-body">
              <figure>
                <blockquote class="blockquote">
                  <p>${quote.quote}</p>
                </blockquote>
              </figure>
            </div>
            <div class="card-footer">
              <small class="blockquote-footer">
                <cite title="Source Title">${quote.author}</cite>
              </small>
            </div>
          </div>
      `;
    });
  }
}

customElements.define("quotes-list", QuotesList);
