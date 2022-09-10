/*
  Author: Nir Nicole
  Date: 07/09/22
  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
const rupgModel = function () {

    let yeInstance = new yeApi()
    let baconInstance = new baconApi()
    let pokeInstance = new pokemonApi()
    let usersInstance = new userGenApi()

    async function getData() {
        let kanyePromise = yeInstance.callApiAjax()
        let baconPromise = baconInstance.callApiAjax()
        let pokePromise = pokeInstance.getPokemaon(0)
        let userGenPromise = usersInstance.getData()

        return await Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise])
        .then(function (results) {
            return  {
                kanye: yeInstance.processData(results[0]),
                bacon: baconInstance.processData(results[1]),
                pokemon: pokeInstance.processData(results[2]),
                users: usersInstance.processData(results[3]),
            }
        })
    }
    return {
        getData
    }

}
