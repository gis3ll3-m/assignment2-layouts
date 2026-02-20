
//document.addEventListener('DOMContentLoaded', ()=>{
const card = document.querySelectorAll('.card');

//creates Favorites Summary

//Creates new element of section type
const favoritesSection = document.createElement('section');
//assigns id to later use in CSS
favoritesSection.id = 'favorites-summary';

//Creates new element of type h3
const favoritesTitle = document.createElement('h3');
//<h3>Favorites</h3> - Assigns "Favorites" as h3
favoritesTitle.textContent = 'Favorites';
//Adds the title to section.
favoritesSection.appendChild(favoritesTitle);

//Creates new element of type ul
const favoritesList = document.createElement('ul');
//Assigns id to list - <ul id="favorites-list">
favoritesList.id = 'favorites-list';
//Adds ul created to section
favoritesSection.appendChild(favoritesList);

//Creates new element of type div
const favoritesTotal = document.createElement('div');
//Assigns id to div
favoritesTotal.id = 'favorites-total';
//Gives text to div
favoritesTotal.textContent = 'Total: $0';
//Adds ti section
favoritesSection.appendChild(favoritesTotal);

//Adds section to body
document.body.appendChild(favoritesSection);

//Creates variable to store cards
const cards = document.querySelectorAll('.card');
//For every card perform:
cards.forEach(card => {
    //Random price
    const price = Math.floor(Math.random() * 10) + 5;

    //Button to that gives ability to add to favs and shows price.
    const btn = document.createElement('button');
    btn.textContent = `Add to Favorites ($${price})`;
    //Add button to all cards
    card.appendChild(btn);

    //When button is clicked, perform:
    btn.addEventListener('click', function () {
        const exists = favoritesList.querySelector(`[data-name="${card.querySelector('h2').textContent}"]`);

        //If already in favorites remove
        if (exists) {
            favoritesList.removeChild(exists);
            card.classList.remove('card-favorite');
            //If not, add to list
        } else {
            const li = document.createElement('li');
            li.textContent = `${card.querySelector('h2').textContent} - $${price}`;
            li.setAttribute('data-name', card.querySelector('h2').textContent);
            favoritesList.appendChild(li);
            card.classList.add('card-favorite');
        }
    

    let total = 0; 
    favoritesList.querySelectorAll('li').forEach(li => {
        const itemPrice = parseInt(li.textContent.split('$')[1]);
        total += itemPrice;
    });

    favoritesTotal.textContent = `Total: $${total}`;
});
});

