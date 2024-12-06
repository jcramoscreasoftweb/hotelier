$(document).ready(function(){
    console.log( $(".label_huespedes"));
    $(".label_huespedes").click(function() {
        console.log("click aqui")
        $(this).parents(".item_input_form").find(".ui_box_huespedes").fadeIn(300);
    });
    $(".increment").click(function() {
        let target = $(this).data("target");
        let $input = $(this).parent(".contador_huesped").find("#" + target);
        let value = parseInt($input.val());
        let max = parseInt($input.attr("max"));
        if (value < max) {
            $input.val(value + 1);
        }
    });
    $(".decrement").click(function() {
        let target = $(this).data("target");
        let $input = $(this).parent(".contador_huesped").find("#" + target);
        let value = parseInt($input.val());
        let min = parseInt($input.attr("min"));
        if (value > min) {
            $input.val(value - 1);
        }
    });
    $(".ui_box_huespedes .btn_huesped").click(function() {
        let adults = parseInt($(this).parent(".ui_box_huespedes").find("#adults").val());
        let children = parseInt($(this).parent(".ui_box_huespedes").find("#children").val());
        let labelText = adults + " adulto" + (adults > 1 ? "s" : "");
        if (children > 0) {
            labelText += " y " + children + " niño" + (children > 1 ? "s" : "");
        }
        $(".label_huespedes").text(labelText);
        $(".ui_box_huespedes").fadeOut(300);
    });

})
