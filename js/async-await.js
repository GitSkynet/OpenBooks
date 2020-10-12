////////////////////////////////// SECCION 1 ////////////////////////////////
//////////////////////////////////   HTML  /////////////////////////////////
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

////////////////////////////////// FIN SECCION 1 ////////////////////////////////


// const booksUrl2 = '?category=control_de_versiones&num_items=5';
// const wikiUrl2 = 'https://www.etnassoft.com/api/v1/get/';
// const booksList2 = document.getElementById('controlversion');
// const btn = document.getElementsByTagName('button')

// const getBooks = async() => {
//     const response2 = await fetch(wikiUrl2 + booksUrl2); //get users list
//     const users2 = await response2.json(); //parse JSON
//     const user2 = users2;
//     return (user2);
// };


// function generateHTML(data) {
//     data.map(user2 => {
//         const section2 = document.createElement('div');
//         booksList2.appendChild(section);
//         const thumbnail = user2.cover ? `<img src='${user2.cover}'>` : '';
//         section2.innerHTML = `
//         <div class="blog-card alted">
//             <div class="metadate">
//                 <div class="photo2">${thumbnail}</div>
//                 <ul class="details">
//                     <li class="author"><a href="#">Jane Doe</a></li>
//                     <li class="date">July. 15, 2015</li>
//                     <li class="tags">
//                         <ul>
//                             <li><a href="#">Learn</a></li>
//                             <li><a href="#">Code</a></li>
//                             <li><a href="#">JavaScript</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//             <div class="description">
//                 <h1 class="targetheader1">${user.title}</h1>
//                 <h2 class="targetheader2">${user.author}</h2>
//                 <p class="targetp">${user.content_short}</p>
//                 <p class="read-more">
//                     <a href="#">Read More</a>
//                 </p>
//             </div>
//         `
//     })
// }

// btn.addEventListener('click', async(event) => {
//     event.target.textContent = "Loading...";
//     const astros2 = await getBooks(booksUrl2);
//     generateHTML(astros2);
//     event.target.remove()
// });