
 const searchData = async function(){
     const query = 'pizza'
     const key = '4552bd4f8b8849bc9ced55a8913be00d'
     const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${query}&number=2`
     const imgPath ='https://spoonacular.com/recipeImages/'
    //  const url = `https://api.spoonacular.com/recipes/1003464/information?apiKey=${key}`
    
     const res = await fetch(url)
     const data = await res.json()
     console.log(data.results)
 }


 const infoData = async function(){
     const id = 716429
     const key = '4552bd4f8b8849bc9ced55a8913be00d'
     //const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`
     const url = `https://api.spoonacular.com/recipes/559251/analyzedInstructions?apiKey=${key}&stepBreakdown=true`
    
     const res = await fetch(url)
     const data = await res.json()
     const recipe = data[0].steps
     let order = []
     console.log(recipe)
     recipe.forEach(element => {
         order.push(element.step)
     });
     console.log(order)
 }()