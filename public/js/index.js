$(document).ready(function() {
  $('.selector').change(function() {
    var selection = $(this).val();
    if (selection == 0) return;
    if (selection == 1) {
      addSingleAnswerPoll();
    }
    if (selection == 2) {
      addMultipleAnswerPoll();
    }
    if (selection == 3) {
      addTextPoll();
    }
    $('.questions').append("<div><input type='text' placeholder='Enter the question'/></div>");
  });
});
