// JavaScript Document

function deleteArticle(myElement){
	var myObject = document.getElementById(myElement);
	
	var myString = myObject.textContent;
	myObject.textContent = "There are " + myString.length + " caracters";
	document.getElementById(myElement).classList.add("test");
	//var myVar = setInterval(remove(myElement,myString), 1000);
	}
	
	function remove(myElement,myString)
	{
		var myObject = document.getElementById(myElement);
		var myString = myObject.textContent;
		var myLen = myString.length;
		myObject.textContent = myString.substr(0, myLen-1);
		}