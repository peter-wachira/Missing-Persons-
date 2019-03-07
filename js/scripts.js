// <!--
//
//     Created on :  March 2nd, 2019,  8:39:38 PM
//     Author     : Peter Wachira , Yasmin , Sheila Oigara , Mohammed Mwai
//
//  -->

function searchName(name){
  var nameLower = name.toLowerCase();
  var missingPersons = ["jane", "doe", "john", "dow", "jenny", "pow", "johnny", "test", "joe", "mel", "jem", "allie"];

  var result;
  for(var i =0; i<missingPersons.length; i++){
    if(nameLower === missingPersons[i]){
      result = missingPersons.indexOf(missingPersons[i]);
      break;
    }else{
      result= NaN;
    }
  }
  return result;
}
function checkID(result){
    var personID =["personID1","personID1","personID2","personID2","personID3","personID3","personID4","personID4","personID5","personID5","personID6","personID6"];
    var elementID ;
    for(var i =0; i<personID.length; i++){
      if(result == personID.indexOf(personID[i])){
        elementID = personID[i] ;
        break;
      }else {
        elementID = "Not Present";
      }
    }
return elementID;
}
function showResults(elementID){
  if (elementID === "Not Present"){
    $(".missingElements").hide();
    $("resetBtn")
    $("#displayResults").text("No match was found!")
  }else{
    $(".missingElements").hide();
    $("#"+elementID).show();
  }
}


$(document).ready(function(){

  $("#missingBtn1").click(function(){
    $("#personDetails1").toggle();
  });
  $("#missingBtn2").click(function(){
    $("#personDetails2").toggle();
  });
  $("#missingBtn3").click(function(){
    $("#personDetails3").toggle();
  });
  $("#missingBtn4").click(function(){
    $("#personDetails4").toggle();
  });
  $("#missingBtn5").click(function(){
    $("#personDetails5").toggle();
  });
  $("#missingBtn6").click(function(){
    $("#personDetails6").toggle();
  });
  $("#foundBtn1").click(function(){
    $("#foundDetails1").toggle();
  });
  $("#foundBtn2").click(function(){
    $("#foundDetails2").toggle();
  });
  $("#foundBtn3").click(function(){
    $("#foundDetails3").toggle();
  });
  $("#foundBtn4").click(function(){
    $("#foundDetails4").toggle();
  });
  $("#foundBtn5").click(function(){
    $("#foundDetails5").toggle();
  });
  $("#foundBtn6").click(function(){
    $("#foundDetails6").toggle();
  });
  $("#missingForm").submit(function(event){
    event.preventDefault();
    var firstName = $("input#missingName").val();
    //alert(firstName);
    var checkName = searchName(firstName);
    var elementName = checkID(checkName);
    alert(elementName);
    showResults(elementName);
  });

});
