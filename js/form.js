
function doSubmit() {

    var email = $("#email").val();

    $.ajax({
        url:"https://docs.google.com/forms/d/whatever/formResponse",
        data: {
            'entry.462923373': email
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function (){

                window.location = "./thankyou.html";
                //Success message
            },
            200: function (){

                window.location = "./thankyou.html";
                //Success message
            }
        }
    });


}
