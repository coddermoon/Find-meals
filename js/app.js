
const loadMeals = ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'fish'}`)
    .then(res => res.json())
    .then(data=>displayMeals(data.meals))
}


const displayMeals = (foods)=>{

   

const meals = document.getElementById('meal')

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
         <a href = "#" class = "recipe-btn">Get Recipe</a>
       </div>
     </div>
       `
       meals.appendChild(div)
    });

    

    
}


loadMeals()