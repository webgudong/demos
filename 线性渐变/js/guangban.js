var h1;
window.onload=function(){
h1=document.getElementsByTagName("h1")[0];
var flag=-160;
var timer=setInterval(function(){
	flag+=10;
	if(flag==600){
		flag=-160;
	}
	h1.style.backgroundPosition=flag+"px";
},1000)
	
}
