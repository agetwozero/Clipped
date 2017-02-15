//Function to load all boards wich exist on the server
function showBoards()
{
  $("#buttonDiv").html("");
  $("#pageHeading").html("Clipped Boards <small>Choose one!</small>")
  var boardsLoc = "res/package/boards.json";
  $.getJSON(boardsLoc, function(data){showBoardsSuc(data)});
}
//success function off json call in showBoards
//wich draws a button for every board and couples them to the loadBoard function
function showBoardsSuc(data)
{
  $.each(data, function(key, val)
  {
    var tstring = "<div class='col-md-3 btn-item'>" + "<button class='btn btn-primary' onclick='loadBoard(\""+val.name+"\")'>"+val.name+"</button>";
    $("#buttonDiv").append(tstring);

  });


}
