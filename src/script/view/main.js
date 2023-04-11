import Swal from "sweetalert2";
import "../component/app-bar.js";
import "../component/quotes-list.js";

const main = () => {
  const baseUrl = "https://dummyjson.com/quotes";
  const appBarElement = document.querySelector("app-bar");

  const getAllQuotes = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllQuotes(responseJson.quotes);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const getRandomQuote = async () => {
    try {
      const response = await fetch(`${baseUrl}/random`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          html: `
            <div class="card">
              <div class="card-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>${responseJson.quote}</p>
                  </blockquote>
                </figure>
              </div>
              <div class="card-footer">
                <small class="blockquote-footer">
                  <cite title="Source Title">${responseJson.author}</cite>
                </small>
              </div>
            </div>
          `,
        });
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllQuotes = (quotes) => {
    const quotesListElement = document.querySelector("quotes-list");
    quotesListElement.quotes = quotes;
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    Swal.fire("Error", message, "error");
  };

  appBarElement.clickEvent = getRandomQuote;

  document.addEventListener("DOMContentLoaded", () => {
    getAllQuotes();
  });
};

export default main;
