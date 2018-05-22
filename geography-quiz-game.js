let stateInfo = {};
let stateInfo2 = {};
let score = 100;
let timer = "";
let clickCount = 0;
let startInterval = null;
let stop = false;
let fadeOut = 0;
let fadeIn = 0;
let minutes = 0;
let seconds = 0;
let stateInfoLength;
let stateInfoLength2;

let usInfo = {HI:"Hawaii",AK:"Alaska",FL:"Florida",SC:"South Carolina",GA:"Georgia",AL:"Alabama",NC:"North Carolina",
TN:"Tennessee",RI:"Rhode Island",CT:"Connecticut",MA:"Massachusetts",ME:"Maine",NH:"New Hampshire",VT:"Vermont",
NY:"New York",NJ:"New Jersey",PA:"Pennsylvania",DE:"Delaware",MD:"Maryland",WV:"West Virginia",KY:"Kentucky",
OH:"Ohio",MI:"Michigan",WY:"Wyoming",MT:"Montana",ID:"Idaho",WA:"Washington",TX:"Texas",CA:"California",AZ:"Arizona",
NV:"Nevada",UT:"Utah",CO:"Colorado",NM:"New Mexico",OR:"Oregon",ND:"North Dakota",SD:"South Dakota",NE:"Nebraska",
IA:"Iowa",MS:"Mississippi",IN:"Indiana",IL:"Illinois",MN:"Minnesota",WI:"Wisconsin",MO:"Missouri",AR:"Arkansas",
OK:"Oklahoma",KS:"Kansas",LA:"Louisiana",VA:"Virginia"}

let africaInfo = {BF:"Burkina Faso",DJ:"Djibouti",BI:"Burundi",BJ:"Benin",ZA:"South Africa",BW:"Botswana",DZ:"Algeria",
ET:"Ethiopia",RW:"Rwanda",TZ:"Tanzania",GQ:"Equatorial Guinea",NA:"Namibia",NGE:"Niger",NG:"Nigeria",TUN:"Tunisia",
LR:"Liberia",LS:"Lesotho",ZW:"Zimbabwe",TG:"Togo",TD:"Chad",ER:"Eritrea",LY:"Libya",GW:"Guinea-Bissau",ZM:"Zambia",
CI:"Côte d'Ivoire",EH:"Western Sahara",CM:"Cameroon",EG:"Egypt",SL:"Sierra Leone",CG:"Congo",CF:"Central African Republic",
AO:"Angola",CD:"Democratic Republic of Congo",GAB:"Gabon",GN:"Guinea",GM:"Gambia",XS:"Somaliland",CV:"Cape Verde",GH:"Ghana",
SZ:"Swaziland",MG:"Madagascar",MAR:"Morocco",KE:"Kenya",SS:"South Sudan",ML:"Mali",KM:"Comoros",ST:"São Tomé and Principe",
MW:"Malawi",SO:"Somalia",SN:"Senegal",MR:"Mauritania",UG:"Uganda",SUD:"Sudan",MZ:"Mozambique"}

let europeInfo = {BE:"Belgium",FR:"France",BG:"Bulgaria",DK:"Denmark",HR:"Croatia",DE:"Germany",BA:"Bosnia and Herzegovina",
HU:"Hungary",JE:"Jersey",FI:"Finland",BY:"Belarus",GR:"Greece",RU:"Russia",NL:"Netherlands",PT:"Portugal",NO:"Norway",
LI:"Liechtenstein",LV:"Latvia",LT:"Lithuania",LU:"Luxembourg",FO:"Faroe Islands",PL:"Poland",XK:"Kosovo",CH:"Switzerland",
AD:"Andorra",EE:"Estonia",IS:"Iceland",AL:"Albania",IT:"Italy",GG:"Guernsey",CZ:"Czech Republic",IM:"Isle of Man",
GB:"United Kingdom",AX:"Aland",IE:"Ireland",ES:"Spain",ME:"Montenegro",MD:"Moldova",RO:"Romania",RS:"Serbia",MK:"Macedonia",
SK:"Slovakia",MT:"Malta",SI:"Slovenia",SM:"San Marino",UA:"Ukraine",SE:"Sweden",AT:"Austria"}

let southAmericaInfo = {PY:"Paraguay",COL:"Colombia",VE:"Venezuela",CL:"Chile",SR:"Suriname",BO:"Bolivia",EC:"Ecuador",
ARG:"Argentina",GY:"Guyana",BR:"Brazil",PE:"Peru",UY:"Uruguay",FK:"Falkland Islands"}

$( window ).on( "load", function() {
  $("#us-map").hide();
  $("#africa-map").hide();
  $("#europe-map").hide();
  $("#south-america-map").hide();
  $("#click-start").hide();
  $("#start-game").hide();
  $("#state-id").hide();
  $("#score").hide();
  gameStartBinding();
  gameRestartBinding();
  // info();
});

$("#hide-us").click(function(e) {
  $("#us-map").show();
  $("#hide-us").hide();
  $("#hide-africa").hide();
  $("#hide-europe").hide();
  $("#hide-south-america").hide();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = usInfo;
  stateInfo2 = usInfo;
  timer = "0:05";
  info();
});

$("#hide-africa").click(function(e) {
  $("#africa-map").show();
  $("#hide-us").hide();
  $("#hide-africa").hide();
  $("#hide-europe").hide();
  $("#hide-south-america").hide();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = africaInfo;
  stateInfo2 = africaInfo;
  timer = "0:05";
  info();
});

$("#hide-europe").click(function(e) {
  $("#europe-map").show();
  $("#hide-us").hide();
  $("#hide-africa").hide();
  $("#hide-europe").hide();
  $("#hide-south-america").hide();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = europeInfo;
  stateInfo2 = europeInfo;
  timer = "0:05";
  info();
});

$("#hide-south-america").click(function(e) {
  $("#south-america-map").show();
  $("#hide-us").hide();
  $("#hide-africa").hide();
  $("#hide-europe").hide();
  $("#hide-south-america").hide();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = southAmericaInfo;
  stateInfo2 = southAmericaInfo;
  timer = "1:00";
  $("#timer").text("01m 00s");
  info();
});

function showInfo() {
$("path").click(function(e) {
  $("#info-box").css('display','block');
  $("#info-box").html($(this).data('name')).delay(50).fadeOut();
});

$("path").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).click(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-20);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();
};

function gameStartBinding(){
  $("#start-game").click(function(e) {
    fadeOut = 500;
    fadeIn = 500;
    clickCount = 0;
    $("#start-game").hide();
    $("#score").show();
    selectName();
    showInfo();
    //if(stop === false){
      checkMatch();
    //};
    $('#click-start').find('#start-game-text').addClass('animated infinite fadeIn fadeIn-color');
    $('#score').find('#score-number').addClass('score-color');
    $('#score').find('#percentage').addClass('score-color');
  let interval = setInterval(function() {
    let timer2 = timer.split(":");
    //by parsing integer, I avoid all extra string processing
    let minutes = parseInt(timer2[0], 10);
    let seconds = parseInt(timer2[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    $("#timer").text(minutes + "m " + seconds + "s");
    if (minutes < 0) clearInterval(interval);
    //check if both minutes and seconds are 0
    if (((seconds <= 0) && (minutes <= 0)) || (stateInfoLength === 0)){
      clearInterval(interval);
      gameOver()
    }
    if (seconds <= 10){
      $('#score').find('#timer').addClass('animated infinite flash flash-color');
    }
      timer = minutes + ":" + seconds;
  }, 1000);
})};

function gameRestartBinding() {
  $("#close").click(function(e) {
    $('path').off()
    console.log("Game over");
    // timer = "0:05";
    score = 100;
    stop = true;
    stateInfo = {};
    stateInfo2 = {};
    clickCount = 0;
    info();
    $("#us-map").hide();
    $("#africa-map").hide();
    $("#europe-map").hide();
    $("#south-america-map").hide();
    $("#hide-us").show();
    $("#hide-africa").show();
    $("#hide-europe").show();
    $("#hide-south-america").show();
    $("#click-start").hide();
    $("#start-game").hide();
    $("#score").hide();     
    $("#start-game-text").text("start button to start the game");
    $("#score-number").text("0");
    $("path").removeClass("first-click second-click third-click");
    $('#score').find('#timer').removeClass('animated infinite flash flash-color');
    $('#score').find('#score-number').removeClass('score-color');
    $('#score').find('#percentage').removeClass('score-color');
    $('#click-start').find('#start-game-text').removeClass('animated infinite fadeIn fadeIn-color');
    $("#result-header").removeClass("ec ec-lock ec-clap emoji");
    $("#final-score").removeClass("ec ec-stopwatch ec-muscle ec-plus1 ec-thinking ec-slightly-smiling-face emoji");
    $("#comment").removeClass("ec ec-loudspeaker");
    clearInterval(startInterval);    
  })
}

function gameOver() {
  fadeOut = 0;
  fadeIn = 0;
  clearInterval(startInterval);
  $("#click-start").hide();
  $("#score").hide();
  $("#myModal").modal({backdrop: 'static'});
  $("path").removeClass("first-click second-click third-click");
  if (stateInfoLength === 0){
    console.log("Game over!");
    $("#result-header").text("You are done!");
    $("#result-header").addClass("ec ec-clap emoji");
    $("#final-score").text("Your score: " + score + "%");
    switch (true) {
      case (score >= 85):
      $("#comment").text("Amazing job!");
      $("#final-score").addClass("ec ec-muscle emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 85 && score >= 70):
      $("#comment").text("Excellent job!");
      $("#final-score").addClass("ec ec-plus1 emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 70 && score >= 55):
      $("#comment").text("Good job!");
      $("#final-score").addClass("ec ec-slightly-smiling-face emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 55):
      $("#comment").text("You should study geography!");
      $("#final-score").addClass("ec ec-thinking emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
    }
  }
  else if ((seconds <= 0) && (minutes <= 0) && (stateInfoLength === stateInfoLength2)){
    console.log("Game over!");
    $("#result-header").text("Game over!");
    $("#result-header").addClass("ec ec-lock emoji");
    $("#final-score").text("Time is up!");
    $("#final-score").addClass("ec ec-stopwatch emoji");
    $("#comment").text("You have " + (stateInfoLength2 - stateInfoLength) + 
    " answers out of " + stateInfoLength2 + "!");
    $("#comment").addClass("ec ec-loudspeaker emoji-comment");
  }
  else if ((seconds <= 0) && (minutes <= 0)){
    console.log("Game over!");
    $("#result-header").text("Game over!");
    $("#result-header").addClass("ec ec-lock emoji");
    $("#final-score").text("Time is up!");
    $("#final-score").addClass("ec ec-stopwatch emoji");
    $("#comment").text("You have " + (stateInfoLength2 - stateInfoLength) + 
    " answers out of " + stateInfoLength2 + "!");
    $("#comment").addClass("ec ec-loudspeaker emoji-comment");
  }
}

function info() {
// $('path').each(function() {
//   stateInfo[$(this).attr('id')] = $(this).attr('data-name');
//   stateInfo2[$(this).attr('id')] = $(this).attr('data-name');
// })
  stateInfoLength = Object.keys(stateInfo).length;
  stateInfoLength2 = Object.keys(stateInfo2).length;
};

function selectName() {
  let key = Object.keys(stateInfo);
  let randomIndex = Math.floor(Math.random() * key.length);
  randomKey = key[randomIndex];
  randomValue = stateInfo[randomKey]
  $("#start-game-text").text(randomValue);
  $("#state-id").text(randomKey);
  return randomValue;
  }

function checkMatch() {
  // event.stopPropagation();
  $("path").bind("click", function(e) {
    let guessedName = $(e.target).data('name');
    let newName = $("#start-game-text").text();
    let newId = $("#state-id").text();
    clickCount++;
    console.log("Current count is: "+ clickCount)
    console.log(guessedName);
    console.log(newName);
    if (guessedName === newName && clickCount === 1){
      console.log("Correct");
      $(e.target).addClass("first-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      $("#score-number").text(score);
      selectName();
      clickCount = 0;
    }
    else if (guessedName === newName && clickCount === 2){
      console.log("Correct");
      $(e.target).addClass("second-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      score -= Math.round((100/stateInfoLength2)/2);
      $("#score-number").text(score);
      selectName();
      clickCount = 0;
    }
    else if (guessedName === newName && clickCount > 2) {
      $(e.target).addClass("third-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      score -= Math.round(100/stateInfoLength2);
      $("#score-number").text(score);
      selectName();
      clickCount = 0;
      clearInterval(startInterval);
    }
    else if (clickCount === 2) {
      console.log("Try again");
      startInterval = setInterval(blinker, 1500);
    }
})};

function blinker() {
  let newId = $("#state-id").text();
  $("#" + newId).fadeOut(fadeOut);
  $("#" + newId).fadeIn(fadeIn);
}
