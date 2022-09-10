/*
  Author: Nir Nicole
  Date: 24/8/22
  M |V| C architecture:
  this is the View module.
  this script contains all of the page rendering flow,
  driven by the Controller and according to the Model(logicModule).
*/
const rupgRender = function () {

    //template design pattern
    const renderPage = function(res: any){
        console.log(res);
        Handlebars.registerHelper('makeCapital', (str) => `${str.charAt(0).toUpperCase() + str.slice(1)}`)  //handle bar function to make pokemon capitalized
        renderComponent("#mainUser-template", ".user-container", res.users.mainUser)
        renderComponent("#users-template", ".friends-container", {users: res.users.userList})
        renderComponent("#yeQuote-template", ".quote-container", {quote: res.kanye.proccesedData})
        renderComponent("#pokemon-template", ".pokemon-container" , {picture: res.pokemon.frontPicture, pname: res.pokemon.pname})
        renderComponent("#aboutMe-template", ".meat-container", {bacon: res.bacon.proccesedData})
    }

    const renderComponent = function(hbTemplate: string, elementToRender: string, data: Object){
      const source = $(hbTemplate).html()
      const template = Handlebars.compile(source)
      let newHTML = template(data)
      $(elementToRender).empty()
      $(elementToRender).append(newHTML)
    }

      return {
        renderPage,
        renderComponent
}
}


