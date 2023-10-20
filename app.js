const library = document.querySelector('.library')
const wrapper = document.getElementById('wrapper')
const formContainer = document.querySelector('.form-container')
const libContainer = document.querySelector('.library-container')
const newBookBtn = document.querySelector('.new-book-btn')

formContainer.classList.add('invisible')
const odinLibrary = []


//toggle new book form
function toggleForm() {
    wrapper.classList.toggle('active-form')
    libContainer.classList.toggle('library-area')
    formContainer.classList.toggle('form-area')
    formContainer.classList.toggle('invisible')
}
newBookBtn.addEventListener('click', toggleForm)

//add book object to DOM
function intoDom(bookObj) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('card')

    const title = document.createElement('h2')
    title.classList.add('book-title')

    const author = document.createElement('p')
    author.classList.add('book-author')
    
    const genre = document.createElement('p')
    genre.classList.add('book-genre')
    
    const pages = document.createElement('p')
    pages.classList.add('book-pages')
    
    const read = document.createElement('p')
    read.classList.add('book-read')
    
    const delBtn = document.createElement('div')
    delBtn.classList.add('del-btn')

    title.textContent = bookObj.title
    author.textContent = bookObj.author
    genre.textContent = bookObj.genre
    pages.textContent = bookObj.pages
    read.textContent = 'read'
    delBtn.textContent = 'X'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(genre)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)
    bookCard.appendChild(delBtn)


    // odinLibrary.push(bookOne)
    library.appendChild(bookCard)
}

//book object constructor
function Book(title, author, genre, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
}


//grab and use form
const formTitle = document.getElementById('form-title')
const formAuthor = document.getElementById('form-author')
const formGenre = document.getElementById('form-genre')
const formPages = document.getElementById('form-pages')

function useForm() {
    const givenTitle = formTitle.value
    const givenAuthor = formAuthor.value
    const givenGenre = formGenre.value
    const givenPages = formPages.value

    const newBook = new Book(givenTitle, givenAuthor, givenGenre, givenPages)
    intoDom(newBook)
}

const addBone = document.getElementById('add-bone')
addBone.addEventListener('click', useForm)

// odinLibrary.push(bookTwo)
// odinLibrary.forEach((book) => intoDom(book))


// //add form result as argument of iterateLib function in event listener
// addBone.addEventListener('click', iterateLib)

// function iterateLib () {
    //     odinLibrary.push(bookOne)
    //     odinLibrary.forEach((book) => intoDom(book))
    // }