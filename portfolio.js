$(document).ready(function() {
  var projectInfo;
  $.getJSON("../project-info.json", function(json){
    projectInfo = json;

    // Grab the template script
    var theTemplateScript = $("#card-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Pass our data to the template
    var theCompiledHtml = theTemplate(projectInfo);

    // Add the compiled html to the page
    $('.card-placeholder').html(theCompiledHtml);
  });

  $('a[href^="#"]').click(function(){

    var targetId = $(this).attr("href");

    $('html, body').animate({
      scrollTop:$(targetId).offset().top
    }, 'slow');

    return false;});

});
