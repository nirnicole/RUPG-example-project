/*
  Author: Nir Nicole
  Date: 24/8/22
  M V |C| architecture:
  this is the Controller module.
  this script contains all of the page integrating flow, it takes data from the model and render it threw the view.
*/
const model = rupgModel()
const renderer = rupgRender()

const generateUser = function(attempts: number = 0){
        model.getData()
        .then(res=>{
            renderer.renderPage(res)
            return res
        })
        .catch((error) =>{
            console.warn(error);
            if(attempts++ < 3){
            console.log("trying again...");
            generateUser(attempts)
            }else{
                console.log(`attampet limit reached(${attempts}), please check whats wrong`);
            }
        })
}

$(".button-49").on("click", function(){
    generateUser()
})
    