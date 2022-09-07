
const model = rupgModel()
const renderer = rupgRender()


const data = model.getData().then(res=>{
    //here the res data{users: Promise, kanye: Promise} is supposed ready to be passed to the renderer
    console.log(res);
    renderer.renderUsers(res.users.userList)
    renderer.renderMainUser(res.users.mainUser)
    renderer.renderQuote(res.kanye.proccesedData)
    renderer.renderPokemon(res.pokemon.frontPicture, res.pokemon.pname)
    renderer.renderAboutMe(res.bacon.proccesedData)
    return res
})

// console.log(data);
// data.then(res=> console.log(res))

//event should hold async function ,
//than use let data = call the function


//