var inner
window.onload=function(){
	inner=document.getElementsByClassName("inner")[0];
var flag=0;


var timer=setInterval(function(){
	flag++;
	if(flag==300){
		flag=0;
	}
inner.style.marginTop=-flag+"px";	
},1000/60)
}
