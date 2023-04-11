class DataSource {
  static getAllQuotes({ limit = 10, skip = 1 }) {
    return fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.quotes) {
          return Promise.resolve(responseJson.quotes);
        } else {
          return Promise.reject('Quotes is not found');
        }
      });
  }
}

export default DataSource;
