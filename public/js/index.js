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
  });
});

function questionPrompt() {
  $('.questions').append("<div><input type='text' placeholder='Enter the question'/></div>");
}

// one answer only - radio buttons
function addSingleAnswerPoll() {
  questionPrompt();
}

// multiple answers - check boxes
function addMultipleAnswerPoll() {
  questionPrompt();
}

// text answer
function addTextPoll() {
  questionPrompt();
}
