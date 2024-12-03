
//$(function()
$(document).ready(function(){

/*****  HOME ******/
/*$(".ui_carousel_beneficios").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'

})*/

$(".icon_navbar_toggle").click(function (){
    $(".ui_content_navmobile").fadeToggle(100);
})

/*****  END HOME ******/

/*****  GALERIA ******/
/*$(".ui_carrusel_item_galeria").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'
})*/

$(".ui_carrusel_item_galeria .ui_item_slider img").click(function(){
    console.log("click en imagen slider");
})
/***** END GALERIA ******/


/***** RESEÑA ******/
$(".ui_btn_paginacion .ui_item_btn_page").click(function(){
    $(".ui_btn_paginacion .ui_item_btn_page").removeClass("activo")
    $(this).addClass("activo")
})

/***** END RESEÑA ******/

/***** DETALLE RESERVA ******/
/*
$(".info_precio .item_precio").click(function(){

    $(".info_precio .item_precio").removeClass("active")
    $(this).addClass("active")
})


$(".info_servicios .item_servicio img").click(function(){
    $(this).parent().remove();
    if ($('.info_servicios li').length === 0) {
        $('.info_servicios').remove()
    }
})

$(".info_cupon .cupon_title img").click(function(){
    $(this).toggleClass('rotate');
    if ($(this).hasClass('rotate')) {
        $('.info_cupon .cupon_detail').slideDown(200);
    } else {
        $('.info_cupon .cupon_detail').slideUp(200);
    }
})
*/

/***** END DETALLE RESERVA ******/



/*****  PAGE BUSQUEDA ******/
/*$(".carousel_fotos_habitacion").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'
})



$(".ui_carrusel_habitacion_modal").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>',
    asNavFor: '.ui_mini_carrusel',
})

$(".ui_mini_carrusel").slick({
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.ui_carrusel_habitacion_modal',
    focusOnSelect: true,
})*/



$(".ui_info_habitacion_precio .ui_item_precio").click(function(){
    $(".ui_info_habitacion_precio .ui_item_precio").removeClass("activo")
    $(".ui_btn_item_reservar_habitacion").removeClass("activo")

    $(this).addClass("activo")
    $(this).parent().find(".ui_btn_item_reservar_habitacion").addClass("activo")
})

/*$(".ui_listado_habitaciones .ui_info_habitacion .ui_ver_mas").click(function (){
    $(".ui_fondo_modal.ui_detalle_reserva").fadeIn();
})*/

$(".ui_btn_item_reservar_habitacion.activo").click(function (){
    $(".ui_popup.servicios").fadeIn();
})

$(".ui_fondo_modal .ui_close_modal").click(function(){
    $(".ui_fondo_modal").fadeOut();
})

// $(window).click(function(event){
//   // determina el elemento en el cual se ejecuto el clcik y si es el elemento fuera del contenido de modal se cierra modal
//     if($(event.target).hasClass("ui_marco_modal")){
//         $(".ui_fondo_modal.ui_detalle_reserva").fadeOut();
//     }
// })

/*****  END PAGE BUSQUEDA ******/


/***** BUSCADOR HABITACIONES ******/
$(".label_huespedes").click(function() {
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

/***** END BUSCADOR HABITACIONES ******/




})