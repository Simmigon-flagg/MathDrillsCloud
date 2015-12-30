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
var answer;
var questionsRemaining;
var placeValue;
function MathDrills(){
	 type = document.getElementsByName("mathTypemoptRadio");
	var numberOfQuestions = document.getElementsByName("numberOfQuestionsOptRadio");
	 placeValue = document.getElementsByName("placeValueOptRadio");
	
	 for(var i = 0; i < type.length; i++) {
	   if(type[i].checked) {
		  type =  type[i].value;//This line overwrites the global var
			
	   }//end of if
	 }//end of typeloop
	 for(var i = 0; i < numberOfQuestions.length; i++) {
	   if(numberOfQuestions[i].checked) {
		  numberOfQuestions =  parseInt(numberOfQuestions[i].value);//This line overwrites the global var
			
	   }//end of if
	 }//end of questionloop
	 for(var i = 0; i < placeValue.length; i++) {
	   if(placeValue[i].checked) {
		  placeValue =  placeValue[i].value;//This line overwrites the global var
			
	  }//end of if
	 }//end of pvalueloop
	//confirm(type);
	//confirm(numberOfQuestions);
	//confirm(placeValue);
	
	function makeArray(){
		//alert(numberOfQuestions);
	     myArray = new Array(numberOfQuestions);
	    for(var i = 0; i < myArray.length; i++){
		myArray[i] = new Array(4);
    	}
    	return myArray;
	}
	
	 function loadQuestionAndAnswers(){
	    myArray = makeArray();
		//alert(myArray);
	for(var i = 0; i < myArray.length;i++){
		for(var j = 0; j < myArray[0].length ; j++){
			if(j != 3 ){	
				if(j == 1){
					switch(type){
						case "Addition":
						myArray[i][1] = "+";
					    continue;
						case "Multiplication":
						myArray[i][1] = "*";
					    continue;
						case "Subtraction":
						myArray[i][1] = "-";
					    continue;
						case "Division":
						myArray[i][1] = "/";
					    continue;
						default:
							alert("Oops invalid choice!");
					}//end of switch
					   
				}//end of if
				switch(placeValue) {
					case "1":
					   //. 1 + 1
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
					case "2":
						//. 11 + 11
                        myArray[i][j] =  Math.floor((Math.random()*90) + 10);
                    break;
					case "3":
						//. 111 + 111
                       myArray[i][j] =  Math.floor((Math.random()*900) + 100);
                    break;
					case "4":
						//. Mix all place values
                       myArray[i][j] =  Math.floor(Math.random()*1000);
                    break;
					case "5":
						//. Mix only 1 and 2
                       myArray[i][j] =  Math.floor(Math.random()*100);
                    break;
					case "6":
						//. Mix only 1 and 3
						 myArray[i][j] = Math.floor(Math.random()*1000);
						while(myArray[i][j] >= 10 && myArray[i][j] <= 100 ){
							if(myArray[i][j] < 100){
								myArray[i][j] = Math.floor(Math.random()*10);
							}else{
									myArray[i][j] = Math.floor(Math.random()*1000);
							}//end of else
							
						}//end of while loop
                    break;
					case "7":
						//. Mix only 2 and 3
                        myArray[i][j] = Math.floor(Math.random()*1000);
						while(myArray[i][j] <= 10 ){
							if(myArray[i][j] <= 10){
								myArray[i][j] = Math.floor(Math.random()*100);
							}else{
								myArray[i][j] = Math.floor(Math.random()*1000);
							}//end of else
						}//end of while loop
                    break;
				}//end of swtich
					
			}//end of if
			else{
				
				switch(type) {
                case "Addition":
                       myArray[i][3] = myArray[i][2] + myArray[i][0];
					   
                    break;
                case "Multiplication":                     
					 myArray[i][3] = myArray[i][2] * myArray[i][0];
                    break;
                case "Subtraction":
				//needs to be updated
                if(myArray[i][2] > myArray[i][0] ){
                    var temp = myArray[i][2];
                    myArray[i][2] = myArray[i][0];
                    myArray[i][0] = temp;
                }//end of if in sub
                    myArray[i][3] = myArray[i][2] - myArray[i][0];
                    break;
                case "Division":
					while(myArray[i][0] % myArray[i][2] !== 0){
						switch(placeValue) {
							case "1":
							   //. 1 + 1
							   myArray[i][0] = Math.floor(Math.random()*10);
							   myArray[i][2] = Math.floor(Math.random()*10);
							break;
							case "2":
								//. 11 + 11
							   
							    myArray[i][0] =  Math.floor((Math.random()*90) + 10);
								myArray[i][2] =  Math.floor((Math.random()*90) + 10);
							break;
							case "3":
								//. 111 + 111						
							    myArray[i][0] =  Math.floor((Math.random()*900) + 100);
								myArray[i][2] =  Math.floor((Math.random()*900) + 100);
							break;
							case "4":
								//. Mix all place values
							    myArray[i][0] =  Math.floor(Math.random()*1000);
								myArray[i][2] =  Math.floor(Math.random()*1000);
							   
							break;
							case "5":
								//. Mix only 1 and 2
								myArray[i][0] =  Math.floor(Math.random()*100);
								myArray[i][2] =  Math.floor(Math.random()*100);							  
							break;
							case "6":
								//. Mix only 1 and 3
								 myArray[i][0] = Math.floor(Math.random()*1000);
								 myArray[i][2] = Math.floor(Math.random()*1000);
								while(myArray[i][0] >= 10 && myArray[i][0] <= 100 || myArray[i][2] >= 10 && myArray[i][2] <= 100){
									if(myArray[i][0] < 100 || myArray[i][2] < 100  ){
										myArray[i][0] = Math.floor(Math.random()*10);
										myArray[i][2] = Math.floor(Math.random()*10);
									}else{
										myArray[i][0] = Math.floor(Math.random()*1000);
										myArray[i][2] = Math.floor(Math.random()*1000);
									}//end of else	
								}//end of while loop
					
							break;
							case "7":
								//. Mix only 2 and 3
								myArray[i][0] = Math.floor(Math.random()*1000);
								myArray[i][2] = Math.floor(Math.random()*1000);
						while(myArray[i][0] <= 10 || myArray[i][2] <= 10){
							if(myArray[i][0] <= 10 || myArray[i][2] <= 10){
								myArray[i][0] = Math.floor(Math.random()*100);
								myArray[i][2] = Math.floor(Math.random()*100);
							}else{
								myArray[i][0] = Math.floor(Math.random()*1000);
								myArray[i][2] = Math.floor(Math.random()*1000);
							}//end of else
						}//end of while loop
								
							break;
						}//end of swtich
                    }//end of while loop
                    myArray[i][3] = myArray[i][0] / myArray[i][2];
					break;
                default:
					alert("Oops invalid choice!");
               }//end of switch		
			}//end of else to preform math
		}//end of inner loop
	}//end of outer loop
	return myArray;
	}//loadQuestionAndAnswers
 startPractice =  loadQuestionAndAnswers();
 document.getElementById("remainingQuestion").innerHTML = "You have "+ startPractice.length + " question(s) remaining";
 document.getElementById("Questions").innerHTML = startPractice[0][0] +" "+ startPractice[0][1] +" "+ startPractice[0][2];
}// end of class MathDrills

function testEnterAnswer(){
	answer = parseInt(document.getElementById("answerInput").value);
	
	if(answer != myArray[0][3]){
		
		document.getElementById("answerInput").value = " ";
		document.getElementById("confirmation").innerHTML =
		"You got it wrong! Try again";
	}//end of if now else
	else{
		//alert("You got it right!");
		
		document.getElementById("remainingQuestion").innerHTML = "You have "+ startPractice.length + " question(s) remaining";
		document.getElementById("confirmation").innerHTML =
		"Correct! " + startPractice[0][0] +" "+ startPractice[0][1] +" "+ startPractice[0][2] +" = "+ startPractice[0][3];
		startPractice.shift();
		document.getElementById("Questions").innerHTML = startPractice[0][0] +" "+ startPractice[0][1] +" "+ startPractice[0][2];
		document.getElementById("answerInput").value = " ";
	}//end of else
	
	
}//end of testEnterAnswer method


function practiceEnterAnswer(){
	answer = parseInt(document.getElementById("answerInput").value);
	
	if(answer != myArray[0][3]){
		
		document.getElementById("answerInput").value = " ";
		document.getElementById("confirmation").innerHTML =
		"You got it wrong! Try again";
	}//end of if now else
	else{
		//alert("You got it right!");
		
		document.getElementById("remainingQuestion").innerHTML = "You have "+ startPractice.length + " question(s) remaining";
		document.getElementById("confirmation").innerHTML =
		"Correct! " + startPractice[0][0] +" "+ startPractice[0][1] +" "+ startPractice[0][2] +" = "+ startPractice[0][3];
		startPractice.shift();
		document.getElementById("Questions").innerHTML = startPractice[0][0] +" "+ startPractice[0][1] +" "+ startPractice[0][2];
		document.getElementById("answerInput").value = " ";
	}//end of else
	
	
}//end of practiceEnterAnswer method









