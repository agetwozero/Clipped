//Grab board name and show buttons
function loadBoard(board)
{
  var packLoc = "res/package/"+board;
  var configLoc = packLoc+"/config.json";

  $.getJSON(configLoc, function(data){jsonSuc(data, packLoc, board)});
}
//success function off json call in loadBoard
//wich loads the audio sources and couples them to the buttons
function jsonSuc(data, paloc, board)
{
  count = 0;
  maxRowSize = 4;
  $.each(data, function(key, val)
  {
    count++;
  });

  $("#buttonDiv").html("");
  $("#pageHeading").html("" +board + " <small></small>")
  //console.log(data);
  elCount = 0;

  var amountOfRows = Math.ceil(count / maxRowSize);
  var currentItemCount = 1;

  // console.log(amountOfRows);
  // console.log(maxRowSize);
  // console.log(count);
  for(var i = 0; i < amountOfRows; i++)
  {
    rowName = "row"+i;
    $("#buttonDiv").append("<div id='"+rowName+"' class='row'>");
    for(var j = 0; j < maxRowSize; j++)
    {
      if(audioItem = data[currentItemCount] )
      {
        var audioSrcId = "aSrc" + currentItemCount;
        var audioString = "<div class=' col-xs-5 col-md-3 btn-item'>" +"<audio id='"+audioSrcId+"' src='"+paloc +"/"+audioItem.file+"'type='audio/mp3'></audio>"+"<button class='btn btn-primary'onclick='playSound(\""+audioSrcId+"\")'>"+audioItem.name+"</button>"+"</div>";

        $("#"+rowName).append(audioString);
      }else {
        break;
      }
      currentItemCount++;
    }
  }
}
