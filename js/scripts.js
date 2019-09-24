$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    event.preventDefault();
    var favs = ["fav1", "fav2", "fav3", "fav4", "fav5", "fav6"];
    var favResult = []
    favs.forEach(function(fav) {
      var userInput = $("input#" + fav).val();
      $("." + fav).text(favResult);
      favResult.push(userInput);
    });
    // console.log(favResult);




    // favs.push(($('input#fav1').val()), ($('input#fav2').val()), ($('input#fav3').val()) , ($('input#fav4').val()), ($('input#fav5').val()), ($('input#fav6').val()));
    // var fav1Input = $('input#fav1').val();
    // var fav2Input = $('input#fav2').val();
    // var fav3Input = $('input#fav3').val();
    // var fav4Input = $('input#fav4').val();
    // var fav5Input = $('input#fav5').val();
    // var fav6Input = $('input#fav6').val();
    //
    // favs.push(fav1Input, fav2Input, fav3Input, fav4Input, fav5Input, fav6Input);
    // $('#fav1').text(fav1Input);
    // alert('is this thing working?')
  });
});
