const booksUrl = '?category=programacion';
const wikiUrl = 'https://www.etnassoft.com/api/v1/get/?id=589&callback=';
const booksList = document.getElementById('apilibro');
const btn = document.querySelector('button');


const getBooks = async() => {
    const response = await fetch('https://www.etnassoft.com/api/v1/get/?results_range=30&num_items=20'); //get users list
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
        <button><a href="${user.url_download}"></a>Descarga</button>
        `
    })
}

btn.addEventListener('click', async(event) => {
    event.target.textContent = "Loading...";
    const astros = await getBooks(booksUrl);
    generateHTML(astros);
    event.target.remove()
});