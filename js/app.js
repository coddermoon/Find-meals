const meals = document.getElementById('meal')


// functions

const notFound = ()=>{
  document.getElementById('condition').innerText = `404 Not found`
  document.getElementById('condition').style.color='red'

}



const getRecipies = (singleMeal)=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
  .then(res=>res.json())
  .then(data => console.log(data))
}






const loadMeals = (search)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data=>displayMeals(data.meals))
}
const search = ()=>{
  const searchInput= document.getElementById('search-input');
  const searchValue= searchInput.value;
  if (searchValue === '') {
    notFound()
  }else{
    loadMeals(searchValue)
  }

  
}


const displayMeals = (foods)=>{



meals.innerHTML=''

    foods?.forEach(food => {
        
        const {strMeal:name,strMealThumb:img,idMeal}= food
       const div = document.createElement('div');
       div.innerHTML= `
       <div class = "meal-item">
       <div class = "meal-img">
         <img src = "${img}" alt = "food">
       </div>
       <div class = "meal-name">
         <h3>${name}</h3>
         <a  class = "recipe-btn"onclick="getRecipies(${idMeal})">Get Recipe</a>
       </div>
     </div>
       `
      
       meals.appendChild(div)
    });

    

    
}


loadMeals()