$(document).ready(function() {
  $( ".birth-date" ).datepicker();
  $("#Form1").validate({
     rules: {
       inlineRadioOptions : "required",
       email : {
          required : true,
          email : true
       },
       password : {
          required : true,
          minlength: 6
       },
       fullName : {
          required : true,
          validateString : true
       },
       businessName : {
          required : true,
          validateString : true
       },
       website : {
          required : true,
          url : true
       },
       myPhone : {
          required : true,
          minlength : 10,
          validatePhone : true
       },
       placeOfActivity : "required",
       source : "required",
       RadioOptions : "required",
       noOfStudents : "required",
       birthDate : "required"
    },
    messages: {
       email : {
          required : "This is a mandatory field.",
          email : "Please enter a valid Email."
       },
       password : {
          required : "Please, choose a password.",
          minlength: "Password can not be less than 6 characters."
       },
       fullName : {
          required : "Please, Enter your full name.",
       },
       businessName : {
          required : "Please, Enter your Business name.",
       },
       website : {
          required : "Please enter a Url",
          url : "Please, enter a valid url."
       },
       myPhone : {
          required : "Please enter you contact number.",
          minlength : "Phone number cannot be less than 10 digits.",
          
       },
       placeOfActivity : "Enter your place of Activity."
    }
  });

jQuery.validator.addMethod("validatePhone", function(value, element) {
  return this.optional(element) || /^[0-9]+[0-9- ]+[0-9]+$/.test(value);
}, "This field can con contain digits, space and hyphen only.");
 
jQuery.validator.addMethod("validateString", function(value, element) {
  return this.optional(element) || /^[A-Za-z ]+$/.test(value);
}, "This field can con contain apphabets and space only.");  
                  
});