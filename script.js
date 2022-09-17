let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary() {
  const addNew = document.querySelector("#add_btn");
  addNew.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.showModal();
    const addBtn = document.getElementById("close_btn");
    addBtn.addEventListener("click", () => {
      const book = document.getElementById("book").value;
      const author = document.getElementById("author").value;
      const pageNumber = document.getElementById("page_no.").value;
      const read = document.getElementById("read_status").value;
      myLibrary.push(new Book(book, author, pageNumber, read));
      modal.close();
    });
    const closeBtn = document.getElementById("x");
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });
}
addBookToLibrary();
console.log(myLibrary);
