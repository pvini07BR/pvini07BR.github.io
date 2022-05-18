function goToInteralLink(path){
    var myDomain = 'http://127.0.0.1:5500';
    window.location.href = myDomain + "/" + path;
}

for (let i = 0; i < document.querySelectorAll(".pt").length; i++) {
  document.querySelectorAll(".pt")[i].hidden = true;
} 

for (let i = 0; i < document.querySelectorAll(".en").length; i++) {
  document.querySelectorAll(".en")[i].hidden = true;
}

let langSwitch = document.getElementById("lang-switch");
langSwitch.onchange = function(){
  if(langSwitch.selectedIndex == 0)
  {
    localStorage.setItem("currentLanguage", 'pt');

    for (let i = 0; i < document.querySelectorAll(".pt").length; i++) { document.querySelectorAll(".pt")[i].hidden = false; }; 
    for (let i = 0; i < document.querySelectorAll(".en").length; i++) { document.querySelectorAll(".en")[i].hidden = true; };
  } else if(langSwitch.selectedIndex == 1)
  {
    localStorage.setItem("currentLanguage", 'en');

    for (let i = 0; i < document.querySelectorAll(".en").length; i++) { document.querySelectorAll(".en")[i].hidden = false; };
    for (let i = 0; i < document.querySelectorAll(".pt").length; i++) { document.querySelectorAll(".pt")[i].hidden = true; };
  }
}

let curLang;
if(localStorage.getItem("currentLanguage") != null){
  curLang = localStorage.getItem("currentLanguage");

  switch(curLang){
    case 'pt':
      langSwitch.selectedIndex = 0;
      for (let i = 0; i < document.querySelectorAll(".pt").length; i++) { document.querySelectorAll(".pt")[i].hidden = false; }; 
      for (let i = 0; i < document.querySelectorAll(".en").length; i++) { document.querySelectorAll(".en")[i].hidden = true; };
      break;
    case 'en':
      langSwitch.selectedIndex = 1;
      for (let i = 0; i < document.querySelectorAll(".en").length; i++) { document.querySelectorAll(".en")[i].hidden = false; };
    for (let i = 0; i < document.querySelectorAll(".pt").length; i++) { document.querySelectorAll(".pt")[i].hidden = true; };
      break;
    default:
      langSwitch.selectedIndex = 0;
      for (let i = 0; i < document.querySelectorAll(".pt").length; i++) { document.querySelectorAll(".pt")[i].hidden = false; }; 
      for (let i = 0; i < document.querySelectorAll(".en").length; i++) { document.querySelectorAll(".en")[i].hidden = true; };
      break;
  }
};
console.log(curLang);

