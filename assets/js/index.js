// Elements needed from the HTML
let search = document.querySelector('#isbn');
let button = document.querySelector('#button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let description = document.querySelector('#description')

// Get details of the book with input ISBN
getISBN =()=> {
    axios({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${search.value}`
    })
    .then(res => {
        title.innerHTML = res.data.items[0].volumeInfo.title;
        author.innerHTML = res.data.items[0].volumeInfo.authors[0];
        description.innerHTML = res.data.items[0].volumeInfo.description;
    })
    .catch(err => console.log(err))
}

// Function to allow the enter key fire the getISBN function
enterKeyPress = (e) => {
    if (e.which == 13){
        getISBN()
    }
}

// Event listeners
button.addEventListener('click', getISBN);
search.addEventListener('keypress', enterKeyPress)

