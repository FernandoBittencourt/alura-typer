$("#scoreboard-btn").click(showScoreboard);
$("#sync-btn").click(syncScoreboard);

function insertScoreboard() {
    var tableBody = $(".scoreboard").find("tbody");
    var username = $("#user").val();
    var score = $("#words-counter").text();
    
    var line = newLine(username, score);
    line.find(".remove-btn").click(deleteLine);

    tableBody.prepend(line);
    $(".scoreboard").slideDown(500);
}

function scrollScoreboard() {
    var scrollboardPosition = $(".scoreboard").offset().top;
    $("body").animate({
        scrollTop: scrollboardPosition + "px"
    }, 1000);
}

function newLine(username, score) {
    var line = $("<tr>");
    var userColumn = $("<td>").text(username);
    var scoreColumn = $("<td>").text(score);
    var removeColumn = $("<td>");
    var link = $("<a>").addClass("remove-btn").attr("href","#");
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icon);
    removeColumn.append(link);
    line.append(userColumn);
    line.append(scoreColumn);
    line.append(removeColumn);

    return line;
}

function deleteLine() {
    event.preventDefault();

    var line = $(this).parent().parent();
    line.fadeOut(1000);
    setTimeout(function(){
        line.remove();
    }, 1000)
}

function showScoreboard() {
    $(".scoreboard").stop().slideToggle(600);
}


function syncScoreboard(){
    var scoreboard =[];
    var lines = $("tbody>tr");
    lines.each(function() {
        var user = $(this).find("td:nth-child(1)").text();
        var score = $(this).find("td:nth-child(2)").text();
        var item = {
            user:user,
             score:score
            };
        scoreboard.push(item);
    });
    var data = {
        scoreboard: scoreboard
    };

    $.post("http://localhost:3000/scoreboard", data, function() {
        console.log("The scoreboard was saved!")
        $(".tooltip").tooltipster("open");
    }).fail(function(e){
        console.log(e);
        $(".tooltip").tooltipster("open")
        .tooltipster("content", "Sync failed!");
    }).always(function(){ //novo
        setTimeout(function() {
            $(".tooltip").tooltipster("close"); 
        }, 1200)
    });
}

function updateScoreboard(){

    $.get("http://localhost:3000/scoreboard", function(data) {
        $(data).each(function(){
            var line = newLine(this.user, this.score);
            line.find(".remove-btn").click(deleteLine);
            $("tbody").append(line);
        });
    });
}