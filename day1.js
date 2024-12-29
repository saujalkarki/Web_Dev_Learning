// Asynchronous example with setTimeout
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData() {
  setTimeout(() => {
    console.log("Processing data...");
  }, 2000);
}

fetchData(processData);
