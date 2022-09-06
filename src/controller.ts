

callAll().then((result) => {
    console.log(result);
})

async function callAll() {
    let result

    let kanyePromise = new yeApi().callApiAjax()
    let baconPromise = new baconApi().callApiAjax()
    let pokePromise = new pokemonApi().getPokemaon(4)
    let pokePromise2 = new pokemonApi().getPokemaon(Math.floor(Math.random()*10))
    let userGenPromise = new userGenApi().callApiAjax()
    
    await Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise, pokePromise2])
    .then(function (results) {
        result =  {
            kanyeRes: results[0],
            baconPromise: results[1],
            pokePromise: results[2].sprites.back_default,
            userPromise: results[3],
            pokePromise2: results[4].sprites.back_default,
        }
    })

    return result

}