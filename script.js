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
    const closeBtn = document.getElementById("close_btn");
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });
}
addBookToLibrary();
