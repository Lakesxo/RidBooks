let search = document.querySelector('#isbn');
let button = document.querySelector('#button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let description = document.querySelector('#description')

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

button.addEventListener('click', getISBN)

