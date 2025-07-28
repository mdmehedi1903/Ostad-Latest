// const axios = require('axios');

// DOM elements
const fetchDataButton = document.getElementById('fetchData');
const repositoriesList = document.getElementById('repositories');

const apiUrl = 'https://api.github.com/users/faisal2410/repos'; // 
const perPage = 100; // Number of repositories per page (GitHub allows up to 100 per page)

// Function to fetch repositories recursively until all are retrieved
async function fetchAllRepositories(url, allRepositories) {
  try {
    const response = await axios.get(url);

    // Append the fetched repositories to the array
    allRepositories.push(...response.data);
    return allRepositories;
  } catch (error) {
    throw error;
  }
}

// Usage
 function main() {
    const allRepositories = fetchAllRepositories(apiUrl, []);
    return allRepositories;
}

let allData = main();
console.log(allData)

// Event listener for the "Fetch Repositories" button
fetchDataButton.addEventListener('click', main);
