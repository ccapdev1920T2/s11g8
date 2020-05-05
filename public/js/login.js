$(document).ready(function () {

$('#email').on("change", function () {
        
    var email = $('#email').val();

    $.get('/getCheckAccount', {email: email}, function (result) {

        if(result.email == email) {
            $('#error').text('');
            $('#submit').prop('disabled', false);
        }

        else {
            $('#error').text('Email is invalid. Account does not exist.');
            $('#submit').prop('disabled', true);
        }
    });
});

});