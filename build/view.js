"use strict";
/*
  Author: Nir Nicole
  Date: 24/8/22
  M |V| C architecture:
  this is the View module.
  this script contains all of the page rendering flow,
  driven by the Controller and according to the Model(logicModule).
*/
const rupgRender = function () {
    //template method
    const renderPage = function (res) {
        console.log(res);
        Handlebars.registerHelper('makeCapital', (str) => `${str.charAt(0).toUpperCase() + str.slice(1)}`); //handle bar function to make a pokemon capitalized
        renderComponent("#mainUser-template", ".user-container", res.users.mainUser);
        renderComponent("#users-template", ".friends-container", res.users.userList);
        renderComponent("#yeQuote-template", ".quote-container", res.kanye);
        renderComponent("#pokemon-template", ".pokemon-container", res.pokemon);
        renderComponent("#aboutMe-template", ".meat-container", res.bacon);
    };
    const renderComponent = function (hbTemplate, elementToRender, data) {
        const source = $(hbTemplate).html();
        const template = Handlebars.compile(source);
        let newHTML = template(data);
        $(elementToRender).empty();
        $(elementToRender).append(newHTML);
    };
    return {
        renderPage,
        renderComponent
    };
};
//# sourceMappingURL=view.js.map