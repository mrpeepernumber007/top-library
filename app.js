const library = document.querySelector('.library')
const wrapper = document.getElementById('wrapper')
const formContainer = document.querySelector('.form-container')
const libContainer = document.querySelector('.library-container')
const newBookBtn = document.getElementById('toggle-form-btn')
const updateLibBtn = document.getElementById('update-lib-btn')
const odinLibrary = []

//toggle new book form
function toggleForm() {
    toggleBtnText()
    wrapper.classList.toggle('active-form')
    libContainer.classList.toggle('library-area')
    formContainer.classList.toggle('form-area')
    formContainer.classList.toggle('invisible')
}

function toggleBtnText() {
    if ((formContainer.classList.contains('invisible'))) {
        newBookBtn.textContent = 'Close form'
    } else {
        newBookBtn.textContent = 'New Book'
    }
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
    read.textContent = readValue(bookObj)
    delBtn.textContent = 'X'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(genre)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)
    bookCard.appendChild(delBtn)

    read.addEventListener('click', setRead)
    // delBtn.addEventListener('click', deleteBook)


    library.classList.remove('invisible')
    libContainer.style.overflowY = 'scroll'
    library.appendChild(bookCard)
}

//book object constructor
function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}



//add to library
const formTitle = document.getElementById('form-title')
const formAuthor = document.getElementById('form-author')
const formGenre = document.getElementById('form-genre')
const formPages = document.getElementById('form-pages')

function addToLibrary() {
    const formRead = document.getElementById('read-unread').checked
    const givenTitle = formTitle.value
    const givenAuthor = formAuthor.value
    const givenGenre = formGenre.value
    const givenPages = formPages.value
    const givenRead = formRead

    const newBook = new Book(givenTitle, givenAuthor, givenGenre, givenPages, givenRead)
    odinLibrary.push(newBook)
    intoDom(newBook)
}

const addBone = document.getElementById('add-bone')
addBone.addEventListener('click', addToLibrary)

//iterate over library, modify as needed when storage is added
const bookOne = {
    title: 'Pepe Grillo',
    author: 'Yuya',
    genre: 'Terror psicologico',
    pages: '666',
    read: true,
}

const bookTwo = {
    title: 'El hombre cara de verga',
    author: 'Bergoglio Penitez',
    genre: 'Novela Romantica',
    pages: '69',
    read: false,
}

const bookThree = {
    title: 'Alfajoria: una historia de hambre',
    author: 'Desconocido',
    genre: 'Fantasia',
    pages: '3000',
    read: true,
}

odinLibrary.push(bookOne)
odinLibrary.push(bookTwo)
odinLibrary.push(bookThree)

//update library
updateLibBtn.addEventListener('click', iterateLib)

function iterateLib () {
    const titles = document.querySelectorAll('.book-title')
    odinLibrary.forEach((book) => {
        let duplicate = false
        titles.forEach((title) => {
            console.log(book.title);
            if(book.title === title.textContent) {
                duplicate = true
            }
        })
        if (!duplicate) {intoDom(book)}
    })
    // const readUnread = document.querySelectorAll('.book-read')
    // readUnread.forEach((state) => {
    //     state.addEventListener('click' , (e) => {
    //         readValue()
    //     })
    // })
}

//toggle read
function readValue (book) {
    if (book.read === true) {
        return 'read'
    } else {
        return 'unread'
    }
}

Book.prototype.toggleRead = function() {
    if(this.read === true) {
        this.read = false
    } else {this.read = true}
}

function switchRead(status) {
    if (status === 'read') {
        return 'unread'
    } else if (status === 'unread') {
        return 'read'
    }
}

function setRead() {
    const readBtn = document.querySelectorAll('.book-read')
    readBtn.forEach((read) => {
        read.addEventListener('click', (e) => {
            const selectTitle = e.target.parentElement.firstChild.textContent
            odinLibrary.forEach((book) => {
                if(book.title === selectTitle) {
                    book.read = !book.read
                    e.target.textContent = switchRead(e.target.textContent)
                }
            })
        })
    })
}