$(document).ready(function() {
 $(".start-date").datepicker({
       onSelect: function(selected) {
          $(".end-date").datepicker("option","minDate", selected);
        }
    });
    $(".end-date").datepicker({ 
        onSelect: function(selected) {
           $(".start-date").datepicker("option","maxDate", selected);
        }
    });  
   
   $(".placeOfActivity").geocomplete({
          map: ".map-canvas",
          details: "#Form1",
          location: "India",
          markerOptions: {
            draggable: true
          }
    });
  
  $(".placeOfActivity").bind("geocode:dragged", function(event, latLng){
          $("input[name=lat]").val(latLng.lat());
          $("input[name=lng]").val(latLng.lng());
        });
  
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
       startDate : "required",
       endDate : "required"
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
    },
    submitHandler: function(form) { 
      console.log(form); 
    }
  });

jQuery.validator.addMethod("validatePhone", function(value, element) {
  return this.optional(element) || /^[0-9]+[0-9- ]+[0-9]+$/.test(value);
}, "This field can con contain digits, space and hyphen only.");
 
jQuery.validator.addMethod("validateString", function(value, element) {
  return this.optional(element) || /^[A-Za-z ]+$/.test(value);
}, "This field can con contain apphabets and space only.");  
                  
});