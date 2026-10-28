(function(){
var d=document;d.documentElement.className+=" js";
var t=d.querySelector(".navtoggle"),m=d.getElementById("navmenu");
if(t&&m){t.addEventListener("click",function(){var o=m.classList.toggle("open");t.setAttribute("aria-expanded",o?"true":"false");});
d.addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("open")){m.classList.remove("open");t.setAttribute("aria-expanded","false");t.focus();}});}
var q=d.querySelectorAll(".faq-q");
for(var i=0;i<q.length;i++){q[i].addEventListener("click",function(){
var item=this.parentNode.parentNode,a=item.querySelector(".faq-a"),open=item.classList.contains("open");
if(open){item.classList.remove("open");this.setAttribute("aria-expanded","false");a.style.maxHeight="0px";}
else{item.classList.add("open");this.setAttribute("aria-expanded","true");a.style.maxHeight=a.scrollHeight+"px";}});}
})();
