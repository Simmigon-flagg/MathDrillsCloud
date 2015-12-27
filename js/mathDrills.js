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


function MathDrills(){
	var type = document.getElementsByName("mathTypemoptRadio");
	var numberOfQuestions = document.getElementsByName("numberOfQuestionsOptRadio");
	var placeValue = document.getElementsByName("placeValueOptRadio");
	
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
	var myArray = [];
	function makeArray(){
		//alert(numberOfQuestions);
	     myArray = new Array(numberOfQuestions);
	    for(var i = 0; i < myArray.length; i++){
		myArray[i] = new Array(3);
    	}
    	return myArray;
	}
	
	 function loadQuestionAndAnswers(){
	    myArray = makeArray();
		//alert(myArray);
	for(var i = 0; i < myArray.length;i++){
		for(var j = 0; j < myArray[0].length ; j++){
			if(j < 2 ){	
				//0-9
				switch(placeValue) {
					
					case "1":
					   //. 1 + 1
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
					case "2":
						//. 11 + 11
                       myArray[i][j] = Math.floor(Math.random()*100);
                    break;
					case "3":
						//. 111 + 111
                       myArray[i][j] = Math.floor(Math.random()*1000);
                    break;
					case "4":
						//. Mix all place values
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
					case "5":
						//. Mix only 1 and 2
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
					case "6":
						//. Mix only 1 and 3
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
					case "7":
						//. Mix only 2 and 3
                       myArray[i][j] = Math.floor(Math.random()*10);
                    break;
				}//end of swtich
			}//end of if
			else{
				
				switch(type) {
                case "Addition":
                       myArray[i][j] = myArray[i][j - 2] + myArray[i][j - 1];
                    break;
                case "Multiplication":
                     myArray[i][j] = myArray[i][j - 2] * myArray[i][j - 1];
                    break;
                case "Subtraction":
                if(myArray[i][j - 2] < myArray[i][j - 1] ){
                    var temp = myArray[i][j - 2];
                    myArray[i][j - 2] = myArray[i][j - 1];
                    myArray[i][j - 1] = temp;
                }//end of if in sub
                    myArray[i][j] = myArray[i][j - 2] - myArray[i][j - 1];
                    break;
                case "Division":
                    while(myArray[i][j - 1] == 0){
                    // here we need odd / odd
                    // even divided even
                    // no dividing by zero
                    // so keep looping till we have thoses expressions
                    }//end of while loop
                    myArray[i][j] = myArray[i][j - 2] / myArray[i][j - 1];
					break;
                default:
					confirm("Oops invalid choice!");
               }//end of switch		
			}//end of else to preform math
		}//end of inner loop
	}//end of outer loop
	return myArray;
	}//loadQuestionAndAnswers
 document.getElementById("Questions").innerHTML = loadQuestionAndAnswers();
//alert(so);
}// end of class MathDrills












