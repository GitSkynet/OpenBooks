const booksUrl = 'category=desarrollo_web&num_items=10';
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
        const thumbnail = user.cover ? `<img src='${user.cover}'>` : '';
        section.innerHTML = `
        <div class="blog-card alted">
            <div class="metadate">
                <div class="photo2">${thumbnail}</div>
                <ul class="details">
                    <li class="author"><a href="#">Jane Doe</a></li>
                    <li class="date">July. 15, 2015</li>
                    <li class="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="description">
                <h1 class="targetheader1">${user.title}</h1>
                <h2 class="targetheader2">${user.author}</h2>
                <p class="targetp">${user.content_short}</p>
                <p class="read-more">
                    <a href="#">Read More</a>
                </p>
            </div>
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