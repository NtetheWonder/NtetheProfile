$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

    $(window).on('scroll', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});


function sendEmail(){
    Email.send({
       SecureToken : "e18dd471-c4b9-486d-8631-bc8f8ae03dd8",
        To : "ntethewonder@gmail.com",
        From : "ntethe990327@gmail.com",
        Subject : "New Sumit from you website",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}