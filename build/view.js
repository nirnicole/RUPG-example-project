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
    const renderMainUser = function (mainUser) {
        const source = $("#mainUser-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template(mainUser);
        $(".user-container").append(newHTML);
    };
    const renderUsers = function (users) {
        const source = $("#users-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ users });
        $(".friends-container").append(newHTML);
    };
    const renderQuote = function (quote) {
        const source = $("#yeQuote-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ quote: quote });
        $(".quote-container").append(newHTML);
    };
    const renderPokemon = function (picture, pname) {
        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ picture: picture, pname: pname });
        $(".pokemon-container").append(newHTML);
    };
    const renderAboutMe = function (bacon) {
        const source = $("#aboutMe-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ bacon: bacon });
        $(".meat-container").append(newHTML);
    };
    return {
        renderMainUser,
        renderUsers,
        renderQuote,
        renderPokemon,
        renderAboutMe
    };
};
