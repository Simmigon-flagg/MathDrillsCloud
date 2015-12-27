function TestMathDrills(){
	//alert($('input[name=mathTypemoptradio]:checked').val());
	var type = document.getElementsByName("mathTypemoptradio");
	var question = document.getElementsByName("numberOptRadio");
	var pvalue = document.getElementsByName("placeValueOptRadio");
	
	 for(var i = 0; i < type.length; i++) {
	   if(type[i].checked) {
		  type =  type[i].value;//This line overwrites the global var
			
	   }//end of if
	 }//end of typeloop
	 for(var i = 0; i < question.length; i++) {
	   if(question[i].checked) {
		  question =  question[i].value;//This line overwrites the global var
			
	   }//end of if
	 }//end of questionloop
	 for(var i = 0; i < pvalue.length; i++) {
	   if(pvalue[i].checked) {
		  pvalue =  pvalue[i].value;//This line overwrites the global var
			
	  }//end of if
	 }//end of pvalueloop
	confirm(type);
	confirm(question);
	confirm(pvalue);
}//end of function Question
