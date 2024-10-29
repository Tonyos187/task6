const cardContainer = document.getElementById('card-container');
const bestSelling = document.getElementById('best-selling');
const cardContainer2 = document.getElementById('card-container2');

// first function
function createCard(title, cover, author) {
    const imageUrl1 = `https://wolnelektury.pl/media/${cover}`;
    const cardHTML = `
    <div class="card col-12 col-md-3 border-0 rounded-0 ">
        <div class="bg-body-tertiary d-flex justify-content-center align-items-center p-auto shadow-sm">
            <img class="card-img-top p-4 rounded-0" src="${imageUrl1}" alt="${title}">
        </div>
        <div class="text-center p-3">
        <h5 class="card-title text-color ">${title}</h5>
        <p class="card-text text-secondary fw-bold">${author}</p>
        </div>
    </div>
    `;
    cardContainer.innerHTML += cardHTML;
}

// second function
function bestSell(title, cover, author, data) {
    const cardHTML2 = `
    <div class="col-12 col-md-5 p-2 bg-white shadow-sm">
        <img class="img-fluid h-100" src="${cover}" alt="">
    </div>
    <div class="col-12 col-md-5 d-flex justify-content-between flex-column">
        <h3 class="text-capitalize title-2">best selling <span class="one-word-effect position-relative">book</span></h3>
        <p class="text-secondary">by ${author}</p>
        <h4>${title}</h4>
        <span class="text-secondary">${data}</span>
        <p class="fw-bold text-capitalize ">shop it now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
    </div>`;
    bestSelling.innerHTML += cardHTML2;
}

// third function
function createCard2(title, cover, author) {
    const imageUrl1 = `https://wolnelektury.pl/media/${cover}`;
    const cardHTML3 = `
    <div class="card col-12 col-md-3 border-0 rounded-0 ">
        <div class="bg-body-tertiary d-flex justify-content-center align-items-center p-auto shadow-sm">
            <img class="card-img-top p-4 rounded-0" src="${imageUrl1}" alt="${title}">
        </div>
        <div class="text-center p-3">
        <h5 class="card-title text-color ">${title}</h5>
        <p class="card-text text-secondary fw-bold">${author}</p>
        </div>
    </div>
    `;
    cardContainer2.innerHTML += cardHTML3;
}

// first fetch
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(response => response.json())
    .then(data => {
        for (let i = data.length - 4; i < data.length; i++) {
            const item = data[i];
            createCard(item.title, item.cover, item.author);
        }
    })
    .catch(error => console.error('Error fetching data:', error));


// second fetch
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(response => response.json())
    .then(data => {
        bestSell(data.title, data.cover, data.authors[0].name, data.fragment_data.html);
    }
    )
    .catch(error => console.error('Error fetching data:', error));


// third fetch
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 8; i++) {
            const item = data[i];
            createCard2(item.title, item.cover, item.author);
        }
    }
    )
    .catch(error => console.error('Error fetching data:', error));
