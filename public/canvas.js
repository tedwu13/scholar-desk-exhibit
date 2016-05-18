var inkStoneTouched = false;
$(function(){
    $('#inkstone').click(function() {
        inkStoneTouched = true;
        if (inkStoneTouched) {
            $('#simple_sketch').sketch();
        }
        document.getElementById("instructions").innerHTML = "FOLLOW THE STROKE ORDER ACCORDING TO ANIMATION";
    });

    var canvas = document.getElementById("simple_sketch");
    var context = canvas.getContext("2d");
    $('#clear').click(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});