$(function(){

$(".ui_carousel_beneficios").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-anterior"></span>',
    prevArrow:'<span class="btn-siguiente"></span>'

})

$(".carousel_fotos_habitacion").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<span class="btn-siguiente"></span>',
    prevArrow:'<span class="btn-anterior"></span>'

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

$(window).click(function(event){
  // determina el elemento en el cual se ejecuto el clcik y si es el elemento fuera del contenido de modal se cierra modal
    if($(event.target).hasClass("ui_marco_modal")){
        $(".ui_fondo_modal.ui_detalle_reserva").fadeOut();
    }
})



})