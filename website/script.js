function getInput(){
    const inputValue = document.getElementById('input-value').value ;
    searchItemOnApi(inputValue);

}
const searchItemOnApi = input => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => {
        displayAllTheMenu(data);
    })
}

const displayAllTheMenu = menulist => {
    for (let i = 0; i < menulist.meals.length; i++) {
       // console.log(menulist);
        const listItem = menulist.meals[i];
        const itemName = listItem.strMeal;
        const imageLink = listItem.strMealThumb;
        
        const displayDiv = document.getElementById('display-list');
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-meal'
        const details = `
        <img src="${imageLink}">
        <h3>${itemName}</h3>
        `;
        
        mealDiv.innerHTML = details;
        displayDiv.appendChild(mealDiv);
        console.log(imageLink, itemName);
        
    }
}