var inkStoneTouched = false;

$(function(){
    $('#inkstone').click(function() {
        inkStoneTouched = true;
        if (inkStoneTouched) {
            $('#simple_sketch').sketch();
        }

        document.getElementById("instructions").innerHTML = "FOLLOW THE STROKE ORDER ACCORDING TO ANIMATION";
    });
});