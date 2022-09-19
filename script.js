let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = document.getElementById("book").value;
  const author = document.getElementById("author").value;
  const pageNumber = document.getElementById("page_no.").value;
  const read = document.getElementById("read_status").value;
  myLibrary.push(new Book(book, author, pageNumber, read));
}
function displayBook() {
  myLibrary.forEach((e) => {
    let booksContainer = document.getElementById("books_container");
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    booksContainer.appendChild(cardDiv);
    let bookName = document.createElement("p");
    let authorName = document.createElement("p");
    let numberOfPages = document.createElement("p");
    let readStatus = document.createElement("p");
    bookName.textContent = `Book: ${e.title}`;
    authorName.textContent = `Author: ${e.author}`;
    numberOfPages.textContent = `Number of Pages: ${e.pages}`;
    readStatus.textContent = `${e.read}`;
    cardDiv.appendChild(bookName);
    cardDiv.appendChild(authorName);
    cardDiv.appendChild(numberOfPages);
    cardDiv.appendChild(readStatus);
  });
}
const addNew = document.querySelector("#add_btn");
addNew.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.showModal();
});
const addBtn = document.getElementById("close_btn");
addBtn.addEventListener("click", () => {
  addBookToLibrary();
  modal.close();
  displayBook();
});
const closeBtn = document.getElementById("x");
closeBtn.addEventListener("click", () => {
  modal.close();
});
console.table(myLibrary);
