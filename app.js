
var typed = new Typed(".auto-input",{
    strings: ["Hi there!","Welcome!"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true

});

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
    email.send({
       SecureToken : "e18dd471-c4b9-486d-8631-bc8f8ae03dd8",
        To : "ntethewonder@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Submit from you website",
        Body : "And this is the body"
    }).then(
      message => alert("Message sent successfully")
    );
}