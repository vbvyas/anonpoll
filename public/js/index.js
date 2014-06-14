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

var count = 0;

function questionPrompt(id) {
  $('.questions').append("<div><input name='question[" + id + "][q]' type='text' placeholder='Enter the question'/><div class='answers'></div><br><button class='add-answer btn btn-primary'>Add response</button></div>");
}

function textQuestionPrompt(id) {
  $('.questions').append("<div><input name='question[" + id + "][q]' type='text' placeholder='Enter the question'/></div>");
}

function answerPrompt(id) {
  $('.answers').append("<div><input name='question[" + id + "][a]' type='text' placeholder='Enter response'/></div>");
}

// one answer only - radio buttons
function addSingleAnswerPoll() {
  var id = this.count;
  questionPrompt(id);
  answerPrompt(id);
  this.count++;
}

// multiple answers - check boxes
function addMultipleAnswerPoll() {
  var id = this.count;
  questionPrompt(id);
  answerPrompt(id);
  this.count++;
}

// text answer
function addTextPoll() {
  var id = this.count;
  textQuestionPrompt(id);
  this.count++;
}
