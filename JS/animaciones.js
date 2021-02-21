
$(document).ready(function () {
    $("#imagen1").hover(function () {
            
        $("#imagen1").animate ({
            borderRadius: 40
        }, 900);  

        }, function () {
            $("#imagen1").animate ({
                borderRadius: 0
            }, 900);  
        }
    );;
});