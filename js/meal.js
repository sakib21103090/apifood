const loadMeals = (searchField) =>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals= meals =>{
    // console.log(meals);
    const mealContainer=document.getElementById('meal-container');
    mealContainer.innerText=" ";
     meals.forEach(meal => {  
        console.log(meal)
       
        // create child content
        const mealDiv=document.createElement('div')

        // step 3 set component child
     mealDiv.classList.add('col');

     mealDiv.innerHTML=`
     <div class="card h-100">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strIngredient8
              }</p>
            </div>
          </div>
          `

          mealContainer.appendChild(mealDiv);


        //append child



 }); 
}

const searchBtn = () =>{

const searchField=document.getElementById('search-field'). value;
  
loadMeals(searchField);
}

loadMeals('rice');