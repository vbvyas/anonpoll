$(document).ready(function() {
  $('.selector').change(function() {
    var selection = $(this).val();
    if (selection == 0) return;
    $('.questions').append("<div><input type='text' placeholder='Enter the question'/></div>");
  });
});
