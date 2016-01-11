function keyCode(event) {
    var x = event.keyCode;
    if (x == 13) {
        alert("Works");
    }
}//end of keyCode
function TestMathDrills(){
		function makeArray(){
		//alert(numberOfQuestions);
	     myArray = new Array(1000);
	    for(var i = 0; i < myArray.length; i++){
		myArray[i] = new Array(4);
    	}
    	return myArray;
	}
	
	    myArray = makeArray();
		//alert(myArray);
	for(var i = 0; i < myArray.length;i++){
		for(var j = 0; j < myArray[0].length ; j++){
                     myArray[i][j] = Math.floor(Math.random()*1000);
						while(myArray[i][j] <= 10 ){
							if(myArray[i][j] <= 10){
								myArray[i][j] = Math.floor(Math.random()*100);
							}else{
								myArray[i][j] = Math.floor(Math.random()*1000);
							}//end of else
							
						}//end of while loop
		}
	} 
	for(var i = 0; i < myArray.length;i++){
		for(var j = 0; j < myArray[0].length ; j++){
                      document.write(myArray[i][j] + " | ");
		}
		 document.write("</br>");
	} 
	
}//end of practiceEnterAnswer method

