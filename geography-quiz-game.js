let stateInfo = {};
let stateInfo2 = {};
let score = 100;
let timer = "";
let clickCount = 0;
let startInterval = null;
// let stop = false;
let fadeOut = 0;
let fadeIn = 0;
let minutes = 0;
let seconds = 0;
let stateInfoLength;
let stateInfoLength2;

let usaInfo = {HI:"Hawaii",AK:"Alaska",FL:"Florida",SC:"South Carolina",GA:"Georgia",AL:"Alabama",NC:"North Carolina",
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

let asiaInfo = {BD:"Bangladesh",MON:"Mongolia",BN:"Brunei",BH:"Bahrain",BT:"Bhutan",HK:"Hong Kong",JO:"Jordan",PS:"Palestine",
LB:"Lebanon",LAS:"Laos",TW:"Taiwan",TR:"Turkey",LK:"Sri Lanka",TL:"Timor-Leste",TM:"Turkmenistan",TJ:"Tajikistan",TH:"Thailand",
XC:"Northern Cyprus",NP:"Nepal",PK:"Pakistan",PH:"Philippines",SIG:"Siachen Glacier",AE:"United Arab Emirates",CN:"China",
AF:"Afghanistan",IQ:"Iraq",JP:"Japan",IR:"Iran",AM:"Armenia",SY:"Syria",VN:"Vietnam",GE:"Georgia",ISL:"Israel",IND:"India",
AZB:"Azerbaijan",IDO:"Indonesia",OM:"Oman",KG:"Kyrgyzstan",UZ:"Uzbekistan",MM:"Myanmar",SG:"Singapore",KH:"Cambodia",CY:"Cyprus",
QA:"Qatar",KR:"South Korea",KP:"North Korea",KW:"Kuwait",KZ:"Kazakhstan",SA:"Saudi Arabia",MY:"Malaysia",YE:"Yemen"}

let canadaInfo = {CANT:"Northwest Territories",CANU:"Nunavut",CANS:"Nova Scotia",CABC:"British Columbia",CASK:"Saskatchewan",
CAQC:"Québec",CAPE:"Prince Edward Island",CAMB:"Manitoba",CAYT:"Yukon",CANB:"New Brunswick",CANL:"Newfoundland and Labrador",
CAON:"Ontario",CAAB:"Alberta"}

let centralAmericaInfo = {CAMPR:"Puerto Rico",CAMDO:"Dominican Republic",CAMNI:"Nicaragua",CAMPA:"Panama",CAMSV:"El Salvador",
CAMHT:"Haiti",CAMTT:"Trinidad and Tobago",CAMJM:"Jamaica",CAMGT:"Guatemala",CAMHN:"Honduras",CAMBZ:"Belize",CAMBS:"Bahamas",
CAMCR:"Costa Rica",CAMMX:"Mexico",CAMCU:"Cuba"}

let australiaInfo = {AUACT:"Australian Capital Territory",AUWA:"Western Australia",AUTAS:"Tasmania",AUVIC:"Victoria",
AUNT:"Northern Territory",AUQLD:"Queensland",AUSA:"South Australia",AUNSW:"New South Wales"}

$( window ).on( "load", function() {
  $("#usa-map").hide();
  $("#africa-map").hide();
  $("#europe-map").hide();
  $("#south-america-map").hide();
  $("#asia-map").hide();
  $("#canada-map").hide();
  $("#central-america-map").hide();
  $("#australia-map").hide();
  $("#click-start").hide();
  $("#start-game").hide();
  $("#state-id").hide();
  $("#score").hide();
  gameStartBinding();
  gameRestartBinding();
  usaMap();
  africaMap();
  europeMap();
  southAmericaMap();
  asiaMap();
  canadaMap();
  centralAmericaMap();
  australiaMap();
  // info();
});

function usaMap() {
$("#hide-usa").click(function(e) {
  $("#wold-flag-map").hide();
  $("#select-map").hide();
  $("#usa-map").show();
  $("#hide-usa").off();
  $("#hide-africa").off();
  $("#hide-europe").off();
  $("#hide-south-america").off();
  $("#hide-asia").off();
  $("#hide-canada").off();
  $("#hide-central-america").off();
  $("#hide-australia").off();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = usaInfo;
  stateInfo2 = usaInfo;
  timer = "3:00";
  info();
})};

function africaMap() {
$("#hide-africa").click(function(e) {
  $("#wold-flag-map").hide();
  $("#select-map").hide();
  $("#africa-map").show();
  $("#hide-usa").off();
  $("#hide-africa").off();
  $("#hide-europe").off();
  $("#hide-south-america").off();
  $("#hide-asia").off();
  $("#hide-canada").off();
  $("#hide-central-america").off();
  $("#hide-australia").off();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = africaInfo;
  stateInfo2 = africaInfo;
  timer = "3:00";
  info();
})};

function europeMap() {
$("#hide-europe").click(function(e) {
  $("#wold-flag-map").hide();
  $("#select-map").hide();
  $("#europe-map").show();
  $("#hide-usa").off();
  $("#hide-africa").off();
  $("#hide-europe").off();
  $("#hide-south-america").off();
  $("#hide-asia").off();
  $("#hide-canada").off();
  $("#hide-central-america").off();
  $("#hide-australia").off();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = europeInfo;
  stateInfo2 = europeInfo;
  timer = "3:00";
  info();
})};

function southAmericaMap() {
  stateInfo = southAmericaInfo;
  stateInfo2 = southAmericaInfo;
$("#hide-south-america").click(function(e) {
  $("#wold-flag-map").hide();
  $("#select-map").hide();
  $("#south-america-map").show();
  $("#hide-usa").off();
  $("#hide-africa").off();
  $("#hide-europe").off();
  $("#hide-south-america").off();
  $("#hide-asia").off();
  $("#hide-canada").off();
  $("#hide-central-america").off();
  $("#hide-australia").off();
  $("#click-start").show();
  $("#start-game").show();
  stateInfo = southAmericaInfo;
  stateInfo2 = southAmericaInfo;
  timer = "1:00";
  $("#timer").text("01m 00s");
  info();
})};

function canadaMap() {
  $("#hide-canada").click(function(e) {
    $("#wold-flag-map").hide();
    $("#select-map").hide();
    $("#canada-map").show();
    $("#hide-usa").off();
    $("#hide-africa").off();
    $("#hide-europe").off();
    $("#hide-south-america").off();
    $("#hide-asia").off();
    $("#hide-canada").off();
    $("#hide-central-america").off();
    $("#hide-australia").off();
    $("#click-start").show();
    $("#start-game").show();
    stateInfo = canadaInfo;
    stateInfo2 = canadaInfo;
    timer = "1:00";
    $("#timer").text("01m 00s");
    info();
})};

function asiaMap() {
  $("#hide-asia").click(function(e) {
    $("#wold-flag-map").hide();
    $("#select-map").hide();
    $("#asia-map").show();
    $("#hide-usa").off();
    $("#hide-africa").off();
    $("#hide-europe").off();
    $("#hide-south-america").off();
    $("#hide-asia").off();
    $("#hide-canada").off();
    $("#hide-central-america").off();
    $("#hide-australia").off();
    $("#click-start").show();
    $("#start-game").show();
    stateInfo = asiaInfo;
    stateInfo2 = asiaInfo;
    timer = "3:00";
    info();
})};

function centralAmericaMap() {
  $("#hide-central-america").click(function(e) {
    $("#wold-flag-map").hide();
    $("#select-map").hide();
    $("#central-america-map").show();
    $("#hide-usa").off();
    $("#hide-africa").off();
    $("#hide-europe").off();
    $("#hide-south-america").off();
    $("#hide-asia").off();
    $("#hide-canada").off();
    $("#hide-central-america").off();
    $("#hide-australia").off();
    $("#click-start").show();
    $("#start-game").show();
    stateInfo = centralAmericaInfo;
    stateInfo2 = centralAmericaInfo;
    timer = "1:00";
    $("#timer").text("01m 00s");
    info();
})};

function australiaMap() {
  $("#hide-australia").click(function(e) {
    $("#wold-flag-map").hide();
    $("#select-map").hide();
    $("#australia-map").show();
    $("#hide-usa").off();
    $("#hide-africa").off();
    $("#hide-europe").off();
    $("#hide-south-america").off();
    $("#hide-asia").off();
    $("#hide-canada").off();
    $("#hide-central-america").off();
    $("#hide-australia").off();
    $("#click-start").show();
    $("#start-game").show();
    stateInfo = australiaInfo;
    stateInfo2 = australiaInfo;
    timer = "0:30";
    $("#timer").text("00m 30s");
    info();
})};

function showInfo() {
$("path").click(function(e) {
  $("#info-box").css('display','block');
  $("#info-box").html($(this).data('name')).delay(50).fadeOut();
});

// $("path").mouseleave(function(e) {
//   $('#info-box').css('display','none');
// });

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
    // $('#click-start').find('#start-game-text').addClass('animated infinite fadeIn fadeIn-color');
    $('#click-start').find('#start-game-text').addClass('fadeIn-color');
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
    if ((seconds <= 10) && (minutes == 0)){
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
    // stop = true;
    // stateInfo = {};
    // stateInfo2 = {};
    clickCount = 0;
    info();
    $("#wold-flag-map").show();
    $("#select-map").show();
    $("#usa-map").hide();
    $("#africa-map").hide();
    $("#europe-map").hide();
    $("#south-america-map").hide();
    $("#asia-map").hide();
    $("#canada-map").hide();
    $("#central-america-map").hide();
    $("#australia-map").hide();
    // $("#hide-usa").show();
    // $("#hide-africa").show();
    // $("#hide-europe").show();
    // $("#hide-south-america").show();
    $("#click-start").hide();
    $("#start-game").hide();
    $("#score").hide();     
    $("#start-game-text").text("start button to start the game");
    $("#score-number").text("0");
    $("path").removeClass("first-click second-click third-click");
    $('#score').find('#timer').removeClass('animated infinite flash flash-color');
    $('#score').find('#score-number').removeClass('score-color');
    $('#score').find('#percentage').removeClass('score-color');
    // $('#click-start').find('#start-game-text').removeClass('animated infinite fadeIn fadeIn-color');
    $('#click-start').find('#start-game-text').removeClass('fadeIn-color');
    $("#result-header").removeClass("ec ec-lock ec-clap emoji");
    $("#final-score").removeClass("ec ec-stopwatch ec-muscle ec-plus1 ec-thinking ec-slightly-smiling-face emoji");
    $("#comment").removeClass("ec ec-loudspeaker");
    clearInterval(startInterval);
    usaMap();
    africaMap();
    europeMap();
    southAmericaMap();
    asiaMap();
    canadaMap();
    centralAmericaMap();
    australiaMap();    
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