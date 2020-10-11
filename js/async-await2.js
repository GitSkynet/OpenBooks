const booksUrl = '?subcategory=html&num_items=28';
const wikiUrl = 'https://www.etnassoft.com/api/v1/get/';
const booksList = document.getElementById('apilibro');

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
        const thumbnail = user.cover ? `<img src='${user.cover}'>` : '';
        section.innerHTML = `
        <div class="blog-card">
            <div class="meta">
                <div class="photo">${thumbnail}</div>
                <ul class="details">
                    <li class="author"><a href="#">${user.author}</a></li>
                    <li class="date">${user.publisher_date}</li>
                    <li class="tags">
                        <ul>
                            <li><a href="#">Publisher: ${user.publisher}<hr></a></li>
                            <li><a href="#">Pages: ${user.pages}</a></li>
                            <li><a href="#">Language: ${user.language}</a></li>
                            <li><a href="${user.url_details}">Details</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="description">
                <h1>${user.title}</h1>
                <h2>${user.author}</h2>
                <p>${user.content_short}</p>
                <p class="read-more">
                    <a href="${user.url_download}">Donwload!</a>
                </p>
            </div>
        </div>
        `
    })
}

addEventListener('load', async(event) => {
    event.target.textContent = "Loading...";
    const astros = await getBooks(booksUrl);
    generateHTML(astros);
    event.target.remove()
});