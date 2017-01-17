$(document).on('turbolinks:load', function() {
  $(".button-collapse").sideNav();
  $('.modal').modal();
  $('.modal-trigger').modal('open');
  $('.modal-trigger').modal('close');
});

$(document).ready(function() {
  //form id
  $('#login-form, #signup-form')
  .bind("ajax:success", function() {
    location.reload();
  })
  .bind("ajax:error", function(evt, xhr, status, error) {
    //function called on status: 401 or 500 (for ex.)
    $(evt.target).find('.errors').html(xhr.responseText);
  });
});
