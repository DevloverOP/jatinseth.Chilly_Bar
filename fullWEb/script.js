


const nav =document.getElementById('sidenavbtn');
const menu =document.getElementById('menu');

nav.addEventListener("mouseenter",stopscroll);
menu.addEventListener("mouseenter",stopscroll);
nav.addEventListener("mouseout",startscroll);
menu.addEventListener("mouseout",startscroll);










 function stopscroll(e){

//     console.log('hello'  )

//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

//   window.onscroll = function(){
//       window.scrollTo(scrollTop,scrollLeft)
//   }
  
 }

 function startscroll(e){
//    window.onscroll = function(){ }
 }
 



//console.log("jekd",document.documentElement.scrollTop);