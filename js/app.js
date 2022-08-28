

const getRecipies = ()=>{
  console.log('clicked')
}





const loadMeals = (search)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data=>displayMeals(data.meals))
}
const search = ()=>{
  const searchInput= document.getElementById('search-input');
  const searchValue= searchInput.value

  loadMeals(searchValue)
}


const displayMeals = (foods)=>{

   

const meals = document.getElementById('meal')
meals.innerHTML=''

    foods.forEach(food => {
        console.log(food)
        const {strMeal:name,strMealThumb:img}= food
       const div = document.createElement('div');
       div.innerHTML= `
       <div class = "meal-item">
       <div class = "meal-img">
         <img src = "${img}" alt = "food">
       </div>
       <div class = "meal-name">
         <h3>${name}</h3>
         <a href = "#" class = "recipe-btn"onclick="getRecipies()">Get Recipe</a>
       </div>
     </div>
       `
       meals.appendChild(div)
    });

    

    
}


loadMeals()