// JavaScript Document

//image slider
var curImage;
var mainSlider = document.getElementsByClassName('img-collect');
var images = mainSlider[0].getElementsByTagName('img');

var slider = document.getElementsByClassName('side-bnr');
var sliderCount = slider[0].getElementsByTagName('img')[0];

sliderCount.src = images[0].src;
sliderCount.setAttribute("index",0);
slider[0].onclick=sliderStart; 

	function sliderStart()
	{

		var ind= parseInt(sliderCount.getAttribute('index'));
		if(ind<=0)
			ind=images.length;
		else
			sliderCount.src = images[--ind].src;
			
			sliderCount.setAttribute('index',ind);
			//console.log("index"+ind);
	}

setInterval(sliderStart,2000);
//image slider ended


//flagicon change on  country change. 
function changeFlag(){
	var myselect = document.getElementById("selFlag");
    var optionValue = myselect.options[myselect.selectedIndex].value;
    var imgTarget = document.getElementById("showflag");
    imgTarget.src = optionValue;
}






