function createBoard() {
  var board = $("#container");
  for (i = 1; i <= 3; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    board.append(row);
    for (x = 0; x < 9; x += 3) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("col-4");
      newDiv.classList.add("button");
      var id = x + i;
      var newId = "div" + id;
      newDiv.setAttribute("id", newId);
      row.append(newDiv);
    }
  }
}

function colorCycle() {
  var rand = Math.floor(Math.random() * 9) + 1;
  var divId = "#div" + rand;
  var chosenDiv = $(divId);
  chosenDiv.toggleClass("yellow-bg");
}

createBoard();

$(".button").click(function () {
  $(this).toggleClass("yellow-bg");
});

$(document).ready(
  setInterval(function () {
    colorCycle();
  }, 1500)
);
