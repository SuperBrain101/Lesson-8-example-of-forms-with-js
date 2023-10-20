    /*Angelica West
    10/12/23
    working with: Form validation and a little bit of regrex */

    // JavaScript code for form validation
	// Prevent form from submitting

// step 1 get the entire form:
let entireForm = document.getElementById("myForm");

// step 2 add event listener for when form is submitted & make 
//sure to pass the event /event object to inside the function:
entireForm.addEventListener("submit",function(event){
  event.preventDefault(); // why do this?: To add your own validation 
                                                 //techniques/wording
  //test if code works:
  console.log("no submitting here!");

  // Retrieve the input field value
  let input = document.getElementById("inputField"); // element/input acquired
  let inputValue = input.value; // value acquired
  console.log(inputValue); // test input value
  // Regular expression pattern for alphanumeric input
  let pattern = /^[a-zA-Z0-9]+$/
  // Check if the input value matches the pattern
  if(pattern.test(inputValue)){ // tests if pattern matches inputVal
  // .test() method --determines a text string matches regular expression
  // Valid input: display confirmation and submit the form

  // 1.create an new element to be added to the document:
     let newElem = document.createElement("h3");

     // create a div for this elem:
     let newElem2 = document.createElement("div");

     // 2. add an id to these newElem:
     newElem.id = "confirm";
     newElem2.id="box"; // div id

     // 3. add element to div
     newElem2.appendChild(newElem);

     //4. retrieve placement in document:
     let view = document.getElementsByTagName("body")[0]; // creates a collection so [0]
     view.appendChild(newElem2); // appends div as last child of body

     // 5. get newElem an innerhtml:
     newElem.innerHTML = "Congrats you successfully added an expression";
     // 6. allow for submition & delay it:
     setTimeout(function(){
      entireForm.submit();
     },2500)
     
  } // end of if
  else if(!pattern.test(inputValue)){
  // Invalid input: display error message
  input.setCustomValidity("Invalid alphanumeric Input, refresh to try again");
  // force setCustomValidity to react each time:
  entireForm.reportValidity();
  // reset input
  //input.innerhtml = "";
  inputValue = "";
  entireForm.reset();
}// end of else if
})

  