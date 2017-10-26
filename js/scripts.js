var shire = 0;
var hog = 0;
var ww = 0;
var pan = 0;

var questions = function(question){
  if (question === "shire") {
    shire+=1;
  } else if (question === "hog"){
    hog+=1;
  } else if (question === "ww") {
    ww+=1;
  } else if (question === "pan") {
    pan+=1;
  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q2]:checked").val();
    var q4 = $("input:radio[name=q2]:checked").val();
    var q5 = $("input:radio[name=q2]:checked").val();
    var q6 = $("input:radio[name=q2]:checked").val();

    questions(q1);
    questions(q2);
    questions(q3);
    questions(q4);
    questions(q5);
    questions(q6);

    if (shire >= hog && shire >= ww && shire >= pan) {

    } else if (hog >= shire && hog >= ww && hog >= pan) {

    } else if (ww >= hog && ww >= shire && ww >= pan) {

    } else {

    }
  });
});
