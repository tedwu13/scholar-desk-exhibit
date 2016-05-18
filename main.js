var inkStoneTouched = false;

$(function(){
    $('#inkstone').click(function() {
        inkStoneTouched = true;
        if (inkStoneTouched) {
            $('#simple_sketch').sketch();
        }
    });
});