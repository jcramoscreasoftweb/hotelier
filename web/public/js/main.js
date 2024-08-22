$(function(){

/*****  HOME ******/
$(".ui_carousel_beneficios").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-anterior"></span>',
    prevArrow:'<span class="btn-siguiente"></span>'

})
/*****  END HOME ******/

/*****  GALERIA ******/
$(".ui_carrusel_item_galeria").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'
})

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



/*****  PAGE BUSQUEDA ******/
$(".carousel_fotos_habitacion").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'
})

$(".ui_mini_carrusel").slick({
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.ui_carrusel_habitacion_modal',
})

$(".ui_carrusel_habitacion_modal").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>',
    asNavFor: '.ui_mini_carrusel',  
})



$(".ui_info_habitacion_precio .ui_item_precio").click(function(){
    $(".ui_info_habitacion_precio .ui_item_precio").removeClass("activo")
    $(".ui_btn_item_reservar_habitacion").removeClass("activo")

    $(this).addClass("activo")
    $(this).parent().find(".ui_btn_item_reservar_habitacion").addClass("activo")
})

$(".ui_listado_habitaciones .ui_info_habitacion .ui_ver_mas").click(function (){
    $(".ui_fondo_modal.ui_detalle_reserva").fadeIn();
})

$(".ui_fondo_modal .ui_close_modal").click(function(){
    $(".ui_fondo_modal.ui_detalle_reserva").fadeOut();
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
    $(".ui_box_huespedes").fadeIn(300)
});
$(".increment").click(function() {
    let target = $(this).data("target");
    let $input = $("#" + target);
    let value = parseInt($input.val());
    let max = parseInt($input.attr("max"));
    if (value < max) {
        $input.val(value + 1);
    }
});
$(".decrement").click(function() {
    let target = $(this).data("target");
    let $input = $("#" + target);
    let value = parseInt($input.val());
    let min = parseInt($input.attr("min"));
    if (value > min) {
        $input.val(value - 1);
    }
});
$(".ui_box_huespedes .btn_huesped").click(function() {
    let adults = parseInt($("#adults").val());
    let children = parseInt($("#children").val());
    let labelText = adults + " adulto" + (adults > 1 ? "s" : "");
    if (children > 0) {
        labelText += " y " + children + " niño" + (children > 1 ? "s" : "");
    }
    $(".label_huespedes").text(labelText);
    $(".ui_box_huespedes").fadeOut(300);
});

/***** END BUSCADOR HABITACIONES ******/





})