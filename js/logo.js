// JavaScript Document
var myVar;
function changeImages(imgArrayList,vectorPosition)
{
	$("#logoDisplay").animate(
		{
			height: '150px',
        	width: '200px',
			opacity: 0
		},
		3000,
				function()
					{	
						$("#logoDisplay").attr("src",imgArrayList[vectorPosition]).animate({
							height: '300px',
        					width: '400px',
							opacity: 1
						},
						3000)
					}
	);
	
	vectorPosition=vectorPosition+1;
		if(vectorPosition>2)
		{	
			vectorPosition=0;
		}
		
		myVar = setTimeout(function(){ changeImages(imgArrayList,vectorPosition) } ,6000);
	
}

function changeLogo()
{
	
	var imgArrayList =[
		"img/logo01.png",
		"img/logo02.png",
		"img/logo03.png"
		];
	changeImages(imgArrayList,1);
	
}