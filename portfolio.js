$(document).ready(function() {
  var projectInfo;
  $.getJSON("../project-info.json", function(json){
    projectInfo = json;

  // Grab the template script
  var theTemplateScript = $("#card-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);


  // Define our data object
  // var context={
  //   "title": element.title,
  //   "description": element.description
  // };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(projectInfo);

  // Add the compiled html to the page
  $('.card-placeholder').html(theCompiledHtml);
    // });
});



});
