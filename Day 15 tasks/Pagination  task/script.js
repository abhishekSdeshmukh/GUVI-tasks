const url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
const itemsPerPage = 10; // Number of items per page

let tableData = []; // Array to store all the fetched data
let currentPage = 1; // Current page number

const table = document.querySelector("#table");
const tbody = table.querySelector("tbody");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const pageNumbersContainer = document.querySelector("#pageNumbers");

// Function to display the items for the current page
function displayTableData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = tableData.slice(startIndex, endIndex);

  // Clear the table body
  tbody.innerHTML = "";

  // Add the data rows to the table
  for (const item of currentPageData) {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = item.id;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = item.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = item.email;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  // Disable/enable pagination buttons based on current page
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(tableData.length / itemsPerPage);

  // Generate and display page number blocks
  generatePageNumbers();
}

// Function to handle previous button click
function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;
    displayTableData();
  }
}

// Function to handle next button click
function handleNextClick() {
  if (currentPage < Math.ceil(tableData.length / itemsPerPage)) {
    currentPage++;
    displayTableData();
  }
}

// Function to handle page number click
function handlePageNumberClick(page) {
  currentPage = page;
  displayTableData();
}

// Function to generate and display page number blocks
function generatePageNumbers() {
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  pageNumbersContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.textContent = i;
    pageNumber.classList.add("page-number");
    if (i === currentPage) {
      pageNumber.classList.add("active");
    }
    pageNumber.addEventListener("click", () => handlePageNumberClick(i));
    pageNumbersContainer.appendChild(pageNumber);
  }
}

// Add click event listeners to pagination buttons
prevBtn.addEventListener("click", handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);

// Fetch the data from the URL
fetch(url)
  .then((response) => {
    if (response.ok) {
      // The request was successful
      return response.json();
    } else {
      // The request failed
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    // The data was successfully fetched
    tableData = data;
    displayTableData();
  })
  .catch((error) => {
    // The request failed
    alert(error);
  });
