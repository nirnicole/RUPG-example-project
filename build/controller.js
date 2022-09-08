"use strict";
const model = rupgModel();
const renderer = rupgRender();
$(".button-49").on("click", function () {
    generateUser();
});
const generateUser = function () {
    let attempts = 0;
    const data = model.getData().then(res => {
        //here the res data{users: Promise, kanye: Promise} is supposed ready to be passed to the renderer
        renderer.renderPage(res);
        return res;
    }).catch((error) => {
        console.warn(error);
        if (attempts++ < 3) {
            console.log("trying again...");
            generateUser();
        }
        else {
            console.log(`attampet limit reached(${attempts}), please check whats wrong`);
        }
    });
};
// console.log(data);
// data.then(res=> console.log(res))
//event should hold async function ,
//than use let data = call the function
//
//# sourceMappingURL=controller.js.map