function showBoards()
{
  $("#buttonDiv").html("");
  $("#pageHeading").html("Clipped Boards <small>Choose one!</small>")
  var boardsLoc = "res/package/boards.json";
  $.getJSON(boardsLoc, function(data){showBoardsSuc(data)});
}

function showBoardsSuc(data)
{
  $.each(data, function(key, val)
  {
    var tstring = "<div class='col-md-3 btn-item'>" + "<button class='btn btn-primary' onclick='loadBoard(\""+val.name+"\")'>"+val.name+"</button>";
    $("#buttonDiv").append(tstring);

  });


}
