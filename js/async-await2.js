const bookApi = 'https://www.etnassoft.com/api/v1/get/';
const booksList = document.getElementById('apilibro');
const resultfilter = '?results_range=20,10&category=desarrollo_web';
const buttonpage = document.querySelector('button')


const getBooks = async() => {
    const response = await fetch(bookApi + booksUrl); //get users list
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
        <div class="card">
                    <div class="image">
                        ${thumbnail}
                    </div>
                    <div class="details">
                        <div class="center">
                            <h1>${user.title}<br><span>${user.author}</span></h1>
                            <p>${user.content_short}</p>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        `
    })
}

addEventListener('load', async(event) => {
    event.target.textContent = "Loading...";
    const books = await getBooks();
    generateHTML(books);
});

// //////////////////////////////PAGINACIÓN WEB ////////////////////////////////////////

// const getBooks2 = async() => {
//     const response = await fetch(bookApi + resultfilter); //get users list
//     const users = await response.json(); //parse JSON
//     const user = users;
//     return (user);
// };

// buttonpage.addEventListener('click', async(event) => {
//     event.target.textContent = "Loading...";
//     const books2 = await getBooks2();
//     generateHTML(books2);
//     event.target.remove()
// });

// <
// div class = "blog-card" >
//     <
//     div class = "meta" >
//     <
//     div class = "photo" > $ { thumbnail } < /div> <
// ul class = "details" >
//     <
//     li class = "author" > < a href = "#" > ${user.author} < /a></li >
//     <
//     li class = "date" > $ { user.publisher_date } < /li> <
// li class = "tags" >
//     <
//     ul >
//     <
//     li > < a href = "#" > Publisher: $ { user.publisher } < hr > < /a></li >
//     <
//     li > < a href = "#" > Pages: $ { user.pages } < /a></li >
//     <
//     li > < a href = "#" > Language: $ { user.language } < /a></li >
//     <
//     li > < a href = "${user.url_details}" > Details < /a></li >
//     <
//     /ul> < /
// li > <
//     /ul> < /
// div > <
//     div class = "description" >
//     <
//     h1 > $ { user.title } < /h1> <
// h2 > $ { user.author } < /h2> <
// p > $ { user.content_short } < /p> <
// p class = "read-more" >
//     <
//     a href = "${user.url_download}" > Donwload! < /a> < /
// p > <
//     /div> < /
// div >