"use strict";
let data = getData().then(res => {
    //here the res data is ready to be passed to the renderer
    console.log(res);
    return res;
});
