
const model = rupgModel()


const data = model.getData().then(res=>{
    //here the res data{users: Promise, kanye: Promise} is supposed ready to be passed to the renderer
    console.log(res);
    return res
})

// console.log(data);
// data.then(res=> console.log(res))

//event should hold async function ,
//than use let data = call the function


//