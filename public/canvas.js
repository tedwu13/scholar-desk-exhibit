var inkStoneTouched = false;
$(document).ready(function() {
  $('#done').magnificPopup({
    type: 'inline',
    // Delay in milliseconds before popup is removed
    removalDelay: 300,
    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
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

    var popup = document.getElementById('content');
    $('#next').click(function() {
        popup.innerHTML = "<h4>Evolution of the character</h4> <img src='img/yue.gif'>";
    });
});

