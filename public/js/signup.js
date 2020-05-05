$(document).ready(function () {

    $("#pnumber").on("keypress keyup blur",function (event) {    
        $('#pnumber').val();
         if ((event.which < 48 || event.which > 57)) {
             event.preventDefault();
         }
     }); 

    $('#cpw').keyup(function() {
        var pw = $('#pw').val(); 
        var cpw = $('#cpw').val(); 

        if (pw != cpw) {
            $('#error').text('Password and Confirm Password do not match.');
            $('#submit').prop('disabled', true);
        }
        else
        {
            $('#error').text('');
            $('#submit').prop('disabled', false);
        }
    });
  
    $('#email').keyup(function () {
        
        var email = $('#email').val();

        $.get('/getCheckEmail', {email: email}, function (result) {

            if(result.email == email) {
                $('#error').text('Email already registered. Please use another Email.');
                $('#submit').prop('disabled', true);
            }

            else {
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });


});