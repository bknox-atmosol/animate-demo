var example2 = function(){

  //find the right image to fade.
  var image = $(this).attr('data-img');

  $('#example-2 .images').find('img.visible')
               //This is the transition out
              .addClass("fadeOut animated");

  //Wait for the fadeOut to finish then fadeIn
  setTimeout(function() {
    $('#example-2 .images').find('.visible')

    //Clear the animation CSS classes.
    .removeClass('fadeOut fadeIn animated visible').end()

    //Find the img thumb that was clicked
    .find('img[data-img="'+image+'"]')
                 //This is the transition in
                .addClass("fadeIn animated visible");
  }, 500);
};
$(document).ready(function(){

  $("#example-1 .book").hover(function(){
    $(this).addClass('pulse animated');
   },function() {
    $(this).removeClass('pulse animated');
  });

  $("#example-2 .thumbs img").on("click",example2);
  CodeMirror.fromTextArea(document.getElementById("example-1-code"),{
    lineNumbers: true 
  });
  CodeMirror.fromTextArea(document.getElementById("example-2-code"),{
    lineNumbers: true 
  });
});
