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
              <p class="card-text">A food critic is sometimes also known as a food reviewer, a food writer, a food journalist, a food blogger or a restaurant critic</p>

              <!-- Button trigger modal -->
              <button onclick="loadMealInfo(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodmodal">
                More Info
              </button>
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

const loadMealInfo = idMeal =>{
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   fetch(url)
   .then(res => res.json())
   .then(data => mealInfoDisplay(data.meals[0]))
   .catch(error =>console.log(error))
 
}

const mealInfoDisplay = meal =>{
 const demo=document.getElementById('foodmodaltitle');
 demo.innerText=meal.strMeal;

 const img=document.getElementById('imgT');
 img.innerHTML = `
 <img class="img-fluid" src="${meal.strMealThumb}">
 <h3>kha vai kha</h3>
 
 `
}

loadMeals('rice');