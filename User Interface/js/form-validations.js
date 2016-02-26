$(function() {
            $( ".birth-date" ).datepicker();
         }); 

$(document).ready( function() {
  
  
  $('#submit').click(function(){
   return validate();
  });
});

function validate() {
  if(checkPassword() & checkWebsite() & checkPhoneNumber() & validateEmptyString('activity') & validateName('full-name') & validateName('business-name') & validateRadioButtons('RadioOptions') & validateRadioButtons('inlineRadioOptions') & checkEmail() & validateDropDown('noOfStudents') & validateDropDown('source'))
    return true;
  else 
    return false;
};

function validateRadioButtons(name) {
  if (!$('input[name='+name+']:checked').val() ) {          
    $('.'+name+'-error').html('Please select one of the above options');
    $('.'+name+'-error').show();
    return false;
  } else {
    $('.'+name+'-error').hide();
    return true;
  } 
};

function checkEmail() {
  var eMail = $('.email').val();
   var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
  if(eMail == '') { 
    $('.email-error').html('Please enter your email address');
    $('.email-error').show(); 
    return false;
  } else if (!eMail.match(emailfilter)){  
     $('.email-error').html('Please enter a valid email address');
     $('.email-error').show();
     return false;
   } else {
    $('.email-error').hide();
     return true;
  }
};

function checkPassword() {
  var password = $('.password').val();
  if(password == '') {
    $('.password-error').html('Please choose password');
    $('.password-error').show();
    return false;
   } else if( password.length < 6) { 
     $('.password-error').html('Password should be atleast 6 characters long');
     $('.password-error').show();
     return false;
   } else {
    $('.password-error').hide();
    return true;
   }  
};

function validateName(name) {
  var fullName = $('.'+name).val();
  var letters = /^[A-Za-z ]+$/;  
  if(fullName == '') {
    $('.'+name+'-error').html('Please enter your Full Name');
    $('.'+name+'-error').show();
    return false;
  } else if(!fullName.match(letters)) {
    $('.'+name+'-error').html('Sorry, Name cannot contain digits');
    $('.'+name+'-error').show();
    return false;
  }  else {
    $('.'+name+'-error').hide();
    return true;
  }    
};

function checkPhoneNumber() {
  var phoneNumber = $('.phone').val();
  var Number= /^[0-9]+[0-9- ]+[0-9]+$/
  if( phoneNumber == '' ) {
    $('.phone-error').html('Please enter your Phone Number');
    $('.phone-error').show();
    return false;
   } else if(!(phoneNumber.match(Number)&&(phoneNumber.length > 10))) {  
    $('.phone-error').html('Sorry, Number is not in correct format');
    $('.phone-error').show();
     return false;
  } else {
    $('.phone-error').hide();
    return true;
  }  
};

function validateDropDown(name) {
 if($('.'+name).val()== 'default') {
    $('.'+name+'-error').html('Please select one of the options');
    $('.'+name+'-error').show();
  } else {
     $('.'+name+'-error').hide();
  }
};

function checkNoOfStudents() {
  if(document.Form1.noOfStudents.value == 'default')  {  
   $('.noOfStudents').html('Please select one of the options');
   $('.noOfStudents').show();
  } else {
   $('.noOfStudents').hide();
  }
};

function validateEmptyString(name) {
  var string= $('.'+name).val();
  if(string == '')  {  
    $('.'+name+'-error').html('Please enter the place of activity');
    $('.'+name+'-error').show();
    return false;
  } else {
    $('.'+name+'-error').hide();
    return true;
  }
};

function checkSource() {
  if(document.Form1.howHear.value == 'default') {  
    $('.source').html('Please select one of the options');
    $('.source').show();
    return false;
  } else {
    $('.source').hide();
    return true;
  } 
};

function checkWebsite() {
  var url= /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
  var webAddress = $('.website').val();
  if(webAddress =='') {
     $('.website-error').html('Please enter the Web url');
     $('.website-error').show();
     return false;
   } else if(!webAddress.match(url)) { 
      $('.website-error').html('Please enter a valid Web url');
      $('.website-error').show();
      return false;
   } else {
      $('.website-error').hide();
      return true;
   }
};

