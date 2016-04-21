$(function() {
  var levels = [
  {
    wrong:'$("# rocketship") .s lideD o wn (3000) ;',
    right:'$("#rocketship").slideDown(3000);',
    message:"YOU NEED A SHIP TO ESCAPE, BUILD IT!",
    code: function(){
     $("#rocketship").slideDown(3000);
    }
  },
  {
    wrong:'$ ("#window").f adeIn(3000);',
    right:'$("#window").fadeIn(3000);',
    message:"ADD A WINDOW, YOU DON'T WANT TO MISS THE VIEW!",
    code: function(){
     $("#window").fadeIn(3000);
    }
  },
  {
    wrong:'$ (" . detail -colo r" ). css("border -bottom-color"," orange");',
    right:'$(".detail-color").css("border-bottom-color","orange");',
    message:"DON'T BE BORING, ADD COLORS.",
    code: function(){
     $(".detail-color").css("border-bottom-color","orange");
    }
  },
  {
    wrong:'$ ("#thruster"). fade In() ;',
    right:'$("#thruster").fadeIn();',
    message:"HURRY, START THE ENGINE!",
    code: function(){
     $("#thruster").fadeIn(); 
    }
  },
  {
 wrong:'$ ("#r ock etship") .animate ( {top :" -700px"}, 4000);',
 right:'$("#rocketship").animate({top:"-700px"},4000);',
    message:"BLAST OFF!",
    code: function(){
         
    }
}];

var level = 0;

function setlevel(level){

  $('#box').val(levels[level].wrong);
  $('#message').text(levels[level].message);
}

setlevel(level);

$("#button").click(function(){

  var ans =  $('#box').val(); 
  
  if(ans !== levels[level].right){
    document.getElementById("Wrong").play(); 
  }
  if(ans === levels[level].right){
    
    if(ans === levels[4].right){
    
     $("#rocketship").animate({top:"-700px"},4000);
    $("#rocketship").animate({top:"0px"},4000);
      document.getElementById("rocket").play();
      $("body").css("background", "url('http://a.abcnews.go.com/images/Technology/abc_abc_potter_mars_110112_wg.jpg')");
      $("body").css("background-repeat", "no-repeat");
    }else{
    
    levels[level].code();
    document.getElementById("Airwrench").play();
    level++;
    setlevel(level); 
  }
 }
});
 
$("#rocketship").hide();
$("#window").hide();
$("#thruster").hide();





})