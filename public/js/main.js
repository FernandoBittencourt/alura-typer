var startTime = $('#typing-time').text();
var typingField = $(".typing-field");

$(function(){
    updatePhrase();
    initializeCounters();
    startTimer();
    initializeBorders();
    $("#reset-game").click(resetGame);
});

function updatePhrase() {
    var phrase = $(".phrase").text();
    var wordsNumber = phrase.split(" ").length;
    var phraseWords = $("#phrase-words");
    phraseWords.text(wordsNumber);
}


function initializeCounters() {
    typingField.on("input", function (){
        var content = typingField.val();

        var wordsTypedNumber= content.split(/\S+/).length -1;
        $('#words-counter').text(wordsTypedNumber);

        var charactersNumber = content.length;
        $('#characters-counter').text(charactersNumber);

    });
}

function startTimer () {
    var timeLeft = $('#typing-time').text();
    typingField.one("focus", function() {
        $("#reset-game").attr("disabled", true);
        
        var timerId = setInterval(function(){
            timeLeft--;
            $('#typing-time').text(timeLeft);
            if(timeLeft < 1){
                clearInterval(timerId);
                endGame();         
            }
        }, 1000);
    });
}

function endGame(){
    typingField.attr("disabled", true);
    $("#reset-game").attr("disabled", false);  
    typingField.toggleClass("field-disabled");
    insertScoreboard();
}

function initializeBorders() {
    var phrase = $(".phrase").text();
    typingField.on("input", function(){
        var typed = typingField.val();
        var comparable = phrase.substring(0, typed.length)
        if(typed == comparable) {
            typingField.addClass("field-correct");
            typingField.removeClass("field-wrong");
        } else {
            typingField.addClass("field-wrong");
            typingField.removeClass("field-correct");
        }
    });
}


function resetGame() {
    typingField.attr("disabled", false);
    typingField.val("");
    $('#words-counter').text("0");
    $('#characters-counter').text("0");
    $('#typing-time').text(startTime);
    startTimer();
    typingField.toggleClass("field-disabled");
    typingField.removeClass("field-correct");
    typingField.removeClass("field-wrong");
}