function getInput() {
    const inputValue = document.getElementById('input-value').value;
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
        mealDiv.className = 'single-meal';
        const details = `
        <img src="${imageLink}">
        <h3>${itemName}</h3>
        `;

        mealDiv.innerHTML = details;
        displayDiv.appendChild(mealDiv);
        console.log(imageLink, itemName);



    }
}


//    used event buble for clicked on a food item 
const clickedFood = document.getElementById('display-list');
clickedFood.addEventListener('click', function (event) {

    const selectedItem = event.target.parentNode.innerText;
    console.log(selectedItem);
    searchSelectedOnApi(selectedItem);
})
const searchSelectedOnApi = input => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const itemDiv = document.getElementById('selected-item');

            const listItem = data.meals[0];
            const itemName = listItem.strMeal;
            const imageLink = listItem.strMealThumb;

            const ul = document.createElement('ul');

            const mealDiv = document.createElement('div');
            mealDiv.className = 'single-meal-details';
            const details = `
        <img src="${imageLink}">
        <h2>${itemName}</h2>
        `;

        let li ;
            for (let i = 1; i <= 20; i++) {
                window.allIngredient = ` listItem.strIngredient${i}`;
                

                li = document.createElement('li');
                li.innerText = `${eval(allIngredient)}`;
                if(li.innerText != null){
                    ul.appendChild(li);
                }


            }
            console.log(ul);
            

            mealDiv.innerHTML = details;
            itemDiv.appendChild(mealDiv);
            itemDiv.appendChild(ul);


            document.getElementById('display-list').style.display = 'none' ;
        })
}