
const model = rupgModel()
const renderer = rupgRender()

const generateUser = function(){
        
    const data = model.getData().then(res=>{
        //here the res data{users: Promise, kanye: Promise} is supposed ready to be passed to the renderer
        renderer.renderPage(res)
        return res
    })
}


// console.log(data);
// data.then(res=> console.log(res))

//event should hold async function ,
//than use let data = call the function


//