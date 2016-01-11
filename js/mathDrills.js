
//One Click does all the non indented work
//Choose type of math problem *
//Choose number of numberOfQuestions *
	//Store the numberOfQuestions and the answer in an array *
	//Method for removing the question
		//Number of tries to get it right. Let the parent choose otherwise default is three
		// Number of question remaining can come from the array.length
		//Total number of right and wrong into right and wrong array
		//Method to display the right and wrong
		//Method for the score

//What is the format
//Choose place value of digits all are # or ## but not both
	//Random place value of digits  of ## - ## or ### + ### but not both
	//Mixed place value of random digits one question is ## - ## and the next one could be ### + ### or # + # any variation 
//Number of tries to get it right
var startPractice;
var type;
var myArray = [];
var questionsRemaining;
var placeValue;
var numb;

hideAll();

function practice(name,numb,placeValue){
	
	numb = document.getElementsByName(numb);
	placeValue = document.getElementsByName(placeValue);
		
		for(var i = 0; i < numb.length; i++) {
	   if(numb[i].checked) {
		  numb =  parseInt(numb[i].value);//This line overwrites the global var
			break;
	   }//end of if
	 }//end of questionloop
	
	 myArray = new Array(numb);
	    for(var i = 0; i < myArray.length; i++){
		myArray[i] = new Array(4);
    	}
	
	 for(var i = 0; i < placeValue.length; i++) {
	   if(placeValue[i].checked) {
		  placeValue =  placeValue[i].value;//This line overwrites the global var
		 
		break;
	  }//end of if
	 }//end of pvalueloop
	
	for(var i = 0; i < myArray.length;i++){
		var all = name;
		if(name == "setupAll"){
		var choice = Math.floor((Math.random() * 4) + 1);
			if(choice == 1){
				name = "setupAddition";
			}else if(choice == 2){
				name = "setupSubtraction";
			}
			else if(choice == 3){
				name = "setupMultiplication";
			}else{
				name = "setupDivision";
		    }
		
		}
		
		for(var j = 0; j < myArray[0].length; j++){
			if(j != 3 ){
				if(j == 1){
					if(name == "setupAddition"){
						myArray[i][1] = " + ";
						continue;
					}else if(name == "setupSubtraction"){
						myArray[i][1] = " - ";
						continue;
					}else if(name == "setupMultiplication"){
						myArray[i][1] = " * ";
						continue;
					}else if(name == "setupDivision"){
						myArray[i][1] = " / ";
						continue;
					}else{
						
					}	
				}//end of else to preform math
				if(placeValue == "1"){
						myArray[i][j] = Math.floor(Math.random()*10);
					}else if(placeValue == "2"){
						myArray[i][j] =  Math.floor((Math.random()*90) + 10);
					}else if(placeValue == "3"){
						myArray[i][j] =  Math.floor((Math.random()*900) + 100);
					}else if(placeValue == "4"){
						myArray[i][j] =  Math.floor(Math.random()*1000);
					}else if(placeValue == "5"){
							if(j == 0){
								myArray[i][j] =  Math.floor((Math.random()*90) + 10);
							}else{
								myArray[i][j] = Math.floor(Math.random()*10);
							}
					}else if(placeValue == "6"){
							if(j == 0){
								myArray[i][j] =  Math.floor((Math.random()*900) + 100);
							}else{
								myArray[i][j] = Math.floor(Math.random()*10);
							}
					}else{
							if(j == 0){
								myArray[i][j] =  Math.floor((Math.random()*900) + 100);
							}else{
								myArray[i][j] =  Math.floor((Math.random()*90) + 10);
							}
					}
			}else{
			if(name == "setupAddition"){
						myArray[i][3] = myArray[i][0] + myArray[i][2];
						if(all == "setupAll"){
							name = all;
						}
					}else if(name == "setupSubtraction"){
							if(myArray[i][2] > myArray[i][0] ){
								var temp = myArray[i][2];
								myArray[i][2] = myArray[i][0];
								myArray[i][0] = temp;
							}//end of if in sub
						myArray[i][3] = myArray[i][0] - myArray[i][2];
						if(all == "setupAll"){
							name = all;
						}
					}else if(name == "setupMultiplication"){
						myArray[i][3] = myArray[i][0] * myArray[i][2];
						if(all == "setupAll"){
							name = all;
						}
					}else if(name == "setupDivision"){
					//	alert("The remainder is "+(myArray[i][0] % myArray[i][2]));
					//	alert("The second number is " + myArray[i][2]);
						while((myArray[i][0] % myArray[i][2]) !== 0 || (myArray[i][2] === 0 )){
							if(placeValue == "1"){
								myArray[i][2] = Math.floor((Math.random()*10)+ 1);
							}else if(placeValue == "2"){
								myArray[i][2] =  Math.floor((Math.random()*90) + 10);
							}else if(placeValue == "3"){
								myArray[i][2] =  Math.floor((Math.random()*900) + 100);
							}else if(placeValue == "4"){
								myArray[i][2] =  Math.floor((Math.random()*1000) + 1);
							}else if(placeValue == "5"){
								myArray[i][2] = Math.floor((Math.random()*10) + 1);
							}else if(placeValue == "6"){
								myArray[i][2] = Math.floor((Math.random()*10) + 1);
							}else {
								//increae number until you find an evenly divisable digit
								while((myArray[i][0] % myArray[i][2] ) !== 0 ){
											myArray[i][2]++;
									}
							}
						}//end of while loop
						myArray[i][3] = myArray[i][0] / myArray[i][2];
						if(all == "setupAll"){
							name = all;
						}
					}else{
						
					}
				}
			}//end of the inner for loop
		}//end of the for outer loop
	
	if(name == "setupAddition"){
		document.getElementById("remainingAdditionQuestion").innerHTML = "You have "+ myArray.length + " question(s) remaining";
		document.getElementById("additionQuestions").innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];
	}else if(name == "setupSubtraction"){
		document.getElementById("remainingSubtractionQuestion").innerHTML = "You have "+ myArray.length + " question(s) remaining";
		document.getElementById("subtractionQuestions").innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];
	}else if(name == "setupMultiplication"){
		document.getElementById("remainingMultiplicationQuestion").innerHTML = "You have "+ myArray.length + " question(s) remaining";
		document.getElementById("multiplicationQuestions").innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];
	}else if(name == "setupDivision"){
		document.getElementById("remainingDivisionQuestion").innerHTML = "You have "+ myArray.length + " question(s) remaining";
		document.getElementById("divisionQuestions").innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];

	}else{
		document.getElementById("remainingQuestion").innerHTML = "You have "+ myArray.length + " question(s) remaining";
		document.getElementById("allQuestions").innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];				
	}	
		
}

function practiceEnterAnswer(answer,confirmation,remainingQuestion,questions){
        theAnswer = parseInt(document.getElementById(answer).value);
        document.getElementById(answer).value = "";
	    document.getElementById(answer).focus();
	if(theAnswer != myArray[0][3]){
		document.getElementById(confirmation).innerHTML =
		"You got it wrong! Try again";
	}//end of if now else
	else{
		//alert("You got it right!");
       
		document.getElementById(confirmation).innerHTML =
		"Correct! " + myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2] +" = "+ myArray[0][3];
		myArray.shift();
         
		 if(myArray.length == 0){
             document.getElementById(remainingQuestion).innerHTML = "All done!"; 
             
         }//end of if
            else{
                document.getElementById(remainingQuestion).innerHTML = "You have "+ myArray.length+ " question(s) remaining";
         }//end of else
        document.getElementById(questions).innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];    
		  
		}//end of else
}//end of practiceEnterAnswer method
function keyPressed(answer,confirmation,remainingQuestion,questions){
		var x = event.keyCode;
	if (x == 13) {
        theAnswer = parseInt(document.getElementById(answer).value);
        document.getElementById(answer).value = "";
	    document.getElementById(answer).focus();
	if(theAnswer != myArray[0][3]){
		document.getElementById(confirmation).innerHTML =
		"You got it wrong! Try again";
	}//end of if now else
	else{      
		document.getElementById(confirmation).innerHTML =
		"Correct! " + myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2] +" = "+ myArray[0][3];
		myArray.shift();         
		 if(myArray.length == 0){
             document.getElementById(remainingQuestion).innerHTML = "All done!";    
         }//end of if
            else{
                document.getElementById(remainingQuestion).innerHTML = "You have "+ myArray.length+ " question(s) remaining";
         }//end of else
        document.getElementById(questions).innerHTML = myArray[0][0] +" "+ myArray[0][1] +" "+ myArray[0][2];
		}//end of else
	}//end if 
}//end of practiceEnterAnswer method
function hideAll(){
	$(document).ready(function(){
		var p = "practiceMath";
            $('.'+ p).hide(); // not working

			//$('.timeTableDrills').hide(); // not working
});
	
}//end of hide div


function show_div(id){
	var divElement = document.getElementById(id);
	var p = "practiceMath";
            $('.'+ p).hide(); 
		divElement.style.display = 'block';
	
	
}//end of hide div

function clearAllText(){
		document.getElementById("remainingAdditionQuestion").innerHTML = "";
		document.getElementById("additionQuestions").innerHTML = "";
		document.getElementById("confirmationAddition").innerHTML = "";
	
		document.getElementById("remainingSubtractionQuestion").innerHTML = "";
		document.getElementById("subtractionQuestions").innerHTML = "";
		document.getElementById("confirmationSubtraction").innerHTML = "";
	
		document.getElementById("remainingMultiplicationQuestion").innerHTML = "";
		document.getElementById("multiplicationQuestions").innerHTML = "";
		document.getElementById("confirmationMultiplication").innerHTML = "";
	
		document.getElementById("remainingDivisionQuestion").innerHTML = "";
		document.getElementById("divisionQuestions").innerHTML = "";
		document.getElementById("confirmationDivision").innerHTML = "";

		document.getElementById("remainingQuestion").innerHTML = "";
		document.getElementById("allQuestions").innerHTML = "";		
		document.getElementById("allConfirmation").innerHTML = "";				
}
