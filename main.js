var inkStoneTouched = false;

$(function(){
    $('#inkstone').click(function(e) {
        inkStoneTouched = true;
        if (inkStoneTouched) {
            $('#simple_sketch').sketch();
        }
    });

});