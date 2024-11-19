document.addEventListener("DOMContentLoaded", (event) => { 
    const API_URL  = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

    async function fetchCocktails(){
        try{
            const response = await fetch(API_URL);
            const data = await response.json();


            const cocktailsList = document.getElementById('cocktails');
            data.drinks.forEach(drink => {
                
                const listaItem = document.createElement('li');
                const drinkName = document.createElement('p');
                drinkName.textContent = drink.strDrink;

                const drinkImage = document.createElement('img');
                drinkImage.src= drink.strDrinkThumb;
                drinkImage.alt = `imagen de ${drink.strDrink} `;
                drinkImage.style.whidt="100px",

                listaItem.appendChild(drinkName);
                listaItem.appendChild(drinkImage);

                cocktailsList.appendChild(listaItem);
            });
        } catch (error){

        console.error("Error al obtener los datos:", error);
        
    }
}
fetchCocktails();
});

