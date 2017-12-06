$(document).ready(function() {
  var projectInfo;
  $.getJSON("../project-info.json", function(json){
    projectInfo = json;

  //   $("#portfolio-section").append('<div class="container"></div>');

  //   $(".container").append('<div class="card-wrapper"></div>');
  $.each(projectInfo, function(index, element) {
    console.log(element.title, element.description);


  // $(function(){
  //   $("#portfolio-placeholder").load("views/portfolio.html");
  // });


  // Grab the template script
  var theTemplateScript = $("#card-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "title": element.title,
    "description": element.description
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.card-placeholder').html(theCompiledHtml);
    });
});



});
