
function insertScoreboard(){
    var tableBody = $(".scoreboard").find("tbody");
    var username = "Fernando";
    var score = $("#words-counter").text();
    
    var line = newLine(username, score);
    line.find(".remove-btn").click(deleteLine);

    tableBody.prepend(line);
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
    $(this).parent().parent().remove();
}
