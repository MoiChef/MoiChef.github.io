
function doSubmit() {

    var email = $("#email").val();

    $.ajax({
        url:"https://docs.google.com/forms/d/1ehKjRrixCVh5oYXpECAGppMArw-ZQLIEV9gq6-5y0QE/formResponse",
        data: {
            'entry.474034136': email
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
