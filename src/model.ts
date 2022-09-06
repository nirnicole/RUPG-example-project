

let yeInstance = new yeApi()
let baconInstance = new baconApi()
let pokeInstance = new pokemonApi()
let pokeInstance2 = new pokemonApi()
let usersInstance = new userGenApi()


async function getData(){
    return await callAll().then(function (results: any) {
        console.log("start proccesing:");
        console.log(results);
        // console.log(results.baconPromise);
        // console.log(results.userPromise.results);
        return processData(results.userPromise.results)
        yeInstance.processData(results.kanyeRes)
    
        return results
    })
    
}

async function callAll() {

    let kanyePromise = yeInstance.callApiAjax()
    let baconPromise = baconInstance.callApiAjax()
    let pokePromise = pokeInstance.getPokemaon(4)
    let pokePromise2 = pokeInstance2.getPokemaon(Math.floor(Math.random()*10))
    let userGenPromise = usersInstance.getData()
    
    

    return await Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise, pokePromise2])
    .then(function (results) {
        return  {
            kanyeRes: results[0],
            baconPromise: results[1],
            pokePromise: results[2],
            userPromise: results[3],
            pokePromise2: results[4],
        }
    })
}


async function processData(data: any){
    return data[0].gender
}

//   const renderAll2 = function (str: string, str2: string) {
//     const source = $("#first-template").html()
//     const template = Handlebars.compile(source)
//     let newHTML = template({ text: str })
//     $("body").append(newHTML)
//   }