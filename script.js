const form_log = document.getElementById("login");
const sign_log = document.getElementById("login1");

// let isLoggedin = false;

// let loginaction =  document.getElementById("login-btn");

// loginaction.addEventListener("click", function(){
//   let email = document.getElementById("Usernamet").value;
//   let pass = document.getElementById("Passwordt").value;

//   if(email.length > 0 && pass.length > 0){
//     isLoggedin = true;
//     document.getElementById("login").style.display = "none";
//     console.log(isLoggedin);
//   }
// });

// let menu =  document.getElementById("voidmenu");

// menu.addEventListener("click", function(){
//   if(isLoggedin == true){
//     window.location.href = "menuPage.html";
//   } else {
//     document.getElementById("login").style.display = "block";
//   }
// });

function show_login() {
  form_log.style.display = "grid";
}

function close_login() {
  form_log.style.display = "none";
}

function show_sign() {
  form_log.style.display = "none";
  sign_log.style.display = "block";
}

function close_sign() {
  form_log.style.display = "grid";
  sign_log.style.display = "none";
}

document.getElementById("but1").click();
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("drinks");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("min-but");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}

function openTab2(evt, name) {
  // Declare all variables
  var j, content, links;

  // Get all elements with class="tabcontent" and hide them
  content = document.getElementsByClassName("trio");
  for (j = 0; j < content.length; j++) {
    content[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  links = document.getElementsByClassName("min-buts");
  for (j = 0; j < links.length; j++) {
    links[j].className = links[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "flex";
  evt.currentTarget.className += " active";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function notif() {
  alert("The product has been added to cart");
  close_pop();
}

function order() {
  alert("Order Placed!");
  window.location.href = "index.html";
}

function pop_order(imagename, title, qoute) {
  let popimg = document.getElementById("img_pop");
  let poptitile = document.getElementById("pop_prodname");
  let desc = document.getElementById("text_pop");

  popimg.setAttribute("src", imagename);
  poptitile.innerHTML = title;
  desc.innerHTML = qoute;

  document.getElementById("popsection").style.display = "flex";
  document.getElementById("blur").style.display = "block";
}

function close_pop() {
  document.getElementById("popsection").style.display = "none";
  document.getElementById("blur").style.display = "none";
}

function con(){
  alert("Order Confirmed!");
}

function addprod(){
  document.getElementById("sec").style.display = "flex";
  console.log("open");
}

function closeprod(){
  alert("Product ADDED!");
  document.getElementById("sec").style.display = "none";
}

function closeprod1(){
  document.getElementById("sec").style.display = "none";
}


function openTab3(evt, name) {
  // Declare all variables
  var j, content, links;

  // Get all elements with class="tabcontent" and hide them
  content = document.getElementsByClassName("adDisp1");
  for (j = 0; j < content.length; j++) {
    content[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  links = document.getElementsByClassName("addlink-btn");
  for (j = 0; j < links.length; j++) {
    links[j].className = links[j].className.replace(" adActice", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " adActice";
  cload();
}

function showMenu(){
  document.getElementById("adminNav12").style.display = "flex";
  
  document.getElementById("adminNav12").style.width = "50%";
}

function cload(){
  document.getElementById("adminNav12").style.display = "none";
  
  document.getElementById("adminNav12").style.width = "0%";
}