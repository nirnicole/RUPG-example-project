"use strict";
let kanyePromise = $.ajax({
    method: "GET",
    url: "https://api.kanye.rest",
    success: (data) => data
});
let kanyePromise2 = $.ajax({
    method: "GET",
    url: "https://api.kanye.rest",
    success: (data) => data
});
Promise.all([kanyePromise, kanyePromise2])
    .then(function (results) {
    renderAll(results[0], results[1]);
});
function renderAll(str, str2) {
    console.log(str);
    console.log(str2);
}
//   const renderAll = function (str: string, str2: string) {
//     const source = $("#first-template").html()
//     const template = Handlebars.compile(source)
//     let newHTML = template({ text: str })
//     $("body").append(newHTML)
//   }
