var inkStoneTouched = false;
$(document).ready(function() {
  $('#done').magnificPopup({
    type: 'inline',
    midClick: true
  });
});

$(function(){
    $('#inkstone').click(function() {
        inkStoneTouched = true;
        if (inkStoneTouched) {
            $('#simple_sketch').sketch();
        }
        document.getElementById("instructions_text").innerHTML = "Follow the stroke order according to the animation";
    });

    var canvas = document.getElementById("simple_sketch");
    var context = canvas.getContext("2d");
    $('#clear').click(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});

