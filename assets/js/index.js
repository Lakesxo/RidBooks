let search = document.querySelector('#isbn').value;
let button = document.querySelector('#button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let description = document.querySelector('#description')

getISBN =()=> {
    axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
    })
    .then(res => {
        console.log(res.data.items[0].volumeInfo.title)
        console.log(res.data.items[0].volumeInfo.authors[0])
        console.log(res.data.items[0].volumeInfo.description)
        title.innerHTML = res.data.items[0].volumeInfo.title;
        author.innerHTML = res.data.items[0].volumeInfo.authors[0];
        description.innerHTML = res.data.items[0].volumeInfo.description;
    })
    .catch(err => console.log(err))
}

button.addEventListener('click', getISBN)

