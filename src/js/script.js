
const getData = async function(){
    const query = 'pizza'
    const key = '4552bd4f8b8849bc9ced55a8913be00d'
    const url = `https://api.spoonacular.com/recipes/?apiKey=${key}&search?query=${query}&number=2`
    
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}()

