
const loadMeals = ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'fish'}`)
    .then(res => res.json())
    .then(data=>displayMeals(data.meals))
}


const displayMeals = (foods)=>{

    

    
}


loadMeals()