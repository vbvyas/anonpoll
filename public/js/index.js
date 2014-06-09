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
  $('.questions').append("<div><input type='text' placeholder='Enter the question'/></div><div class='answers'></div>");
}

function answerPrompt() {
  $('.answers').append("<div><input type='text' placeholder='Enter response'/></div>");
}

// one answer only - radio buttons
function addSingleAnswerPoll() {
  questionPrompt();
  answerPrompt();
}

// multiple answers - check boxes
function addMultipleAnswerPoll() {
  questionPrompt();
  answerPrompt();
}

// text answer
function addTextPoll() {
  questionPrompt();
}
