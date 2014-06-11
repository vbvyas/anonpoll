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

  $('.questions').on('click', '.add-answer', function (event) {
    event.preventDefault();
    var p = $(this).parent();
    var a = $(p).children('.answers');
    $(a).append("<div><input type='text' placeholder='Enter response'/></div>");
  });
});

function questionPrompt() {
  $('.questions').append("<div><input name='question' type='text' placeholder='Enter the question'/><div class='answers'></div><br><button class='add-answer btn btn-primary'>Add response</button></div>");
}

function textQuestionPrompt() {
  $('.questions').append("<div><input name='question' type='text' placeholder='Enter the question'/></div>");
}

function answerPrompt() {
  $('.answers').append("<div><input name='answer' type='text' placeholder='Enter response'/></div>");
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
  textQuestionPrompt();
}
