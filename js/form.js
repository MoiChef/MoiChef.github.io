
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

                success();
            },
            200: function (){

                success();
            }
        }
    });

    function success() {
        var uuid = $.cookie("distinct_id");
        mixpanel.identify(uuid);

        mixpanel.people.set({
            "$email": email
        });


        window.location.href="./thankyou.html";
        return false;
    }


}
