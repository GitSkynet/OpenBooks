const booksUrl = 'category=libros_programacion&criteria=most_viewed';
const wikiUrl = 'https://www.etnassoft.com/api/v1/get/?';
const booksList = document.getElementById('apilibro');
const btn = document.querySelector('button');



const getBooks = async() => {
    const response = await fetch(wikiUrl + booksUrl); //get users list
    const users = await response.json(); //parse JSON
    const user = users;
    return (user);
};


function generateHTML(data) {
    data.map(user => {
        const section = document.createElement('div');
        booksList.appendChild(section);
        const thumbnail = user.thumbnail ? `<img src='${user.thumbnail}'>` : '';
        section.innerHTML = `
        ${thumbnail}
        <span>${user.title}</span>
        <h2>${user.author}</h2>
        <p>${user.content_short}</p>
        <a href="${user.url_download}">Descarga</a>
        `
    })
}

btn.addEventListener('click', async(event) => {
    event.target.textContent = "Loading...";
    const astros = await getBooks(booksUrl);
    generateHTML(astros);
    event.target.remove()
});


//////