// Tooltip correo
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//Envio de correo
$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

$(".card-title").on("click", function () {
  $(".card-text").toggle("slow");
});

//Cambio de color
$("h3").dblclick(function () {
  $(this).css({
    "color": "red",
  });
});