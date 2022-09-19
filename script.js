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
  let booksContainer = document.getElementById("books_container");
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  booksContainer.appendChild(cardDiv);
  let bookName = document.createElement("p");
  let authorName = document.createElement("p");
  let numberOfPages = document.createElement("p");
  let readStatus = document.createElement("p");
  bookName.textContent = `Book: ${myLibrary[myLibrary.length - 1].title}`;
  authorName.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
  numberOfPages.textContent = `Number of Pages: ${
    myLibrary[myLibrary.length - 1].pages
  }`;
  readStatus.textContent = `${myLibrary[myLibrary.length - 1].read}`;
  cardDiv.appendChild(bookName);
  cardDiv.appendChild(authorName);
  cardDiv.appendChild(numberOfPages);
  cardDiv.appendChild(readStatus);
  const trash = document.createElement("div");
  trash.className = "trash_icon_container";
  const trashImg = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALVJREFUSEtjZKAxYKSx+QwELWiPikpgZGScj80h////T6xctmwBPkfitaArKsrgHyPjeXwGMP3/b1i2bNkFXGpQLOiIjv5PjSCrWLoUbi59LaCG69HNwBoH5AYVctDALBq1ACXIR4OIYCoeDaLRIEKEAM3Lovbo6AeMDAzyBAMdVcHFiqVLDYgqTTtjYgL+///fwMDAoE+MJf8ZGB4yMTIWlC9ZsoEoC4gxlFg1BCt9Yg3CpQ4AR+xbGXAlTJ4AAAAASUVORK5CYII=" alt="delete" class="trash_icon"/>`;
  trash.innerHTML = trashImg;
  cardDiv.appendChild(trash);
  trash.setAttribute(
    "data-index",
    `${myLibrary.indexOf(myLibrary[myLibrary.length - 1])}`
  );
  trash.addEventListener("click", () => {
    console.log(trash.getAttribute("data-index"));
    myLibrary.splice(`${trash.getAttribute("data-index")}`, 1);
    cardDiv.remove();
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
