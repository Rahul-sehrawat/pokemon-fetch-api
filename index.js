
async function fetchData(){

    try {
        const pokemonName = document.getElementById("input").value.toLowerCase() ;
    
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!res.ok){
            throw new Error("not able to fetch the pokemon")
        }
        else{
            const data = await res.json();
            // console.log(data.name);
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("img")
            
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
            
        }

    } catch (error) {
        console.log(error);
    }
}

