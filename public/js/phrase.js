$("#change-phrase-btn").click(randomPhrase);
$("#phrase-id-btn").click(findPhrase);

function randomPhrase() {
    $("#spinner").toggle();

    $.get("http://localhost:3000/phrases", changeRandomPhrase)
    .fail(function() {
        $("#error").show();
        setTimeout(function() {
            $("#error").toggle(); 
        }, 2000);
    })
    .always(function (){
        $("#spinner").toggle();
    });
}

function changeRandomPhrase(data) {
    var phrase = $(".phrase");
    var randomNumber = Math.floor(Math.random() * data.length);
    phrase.text(data[randomNumber].text);

    updatePhrase();
    updateStartTime(data[randomNumber].time);
}

function findPhrase(){
    $("#spinner").toggle(); 
    var phraseId = $("#phrase-id").val();
    var data ={ id: phraseId } ;
    $.get("http://localhost:3000/phrases", data, changePhrase)
    .fail(function() {
        $("#error").toggle(); 
        setTimeout(function(){
            $("#error").toggle(); 
        }, 2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function changePhrase(data) {
    var phrase = $(".phrase");
    phrase.text(data.text);
    updatePhrase();
    updateStartTime(data.time);
}