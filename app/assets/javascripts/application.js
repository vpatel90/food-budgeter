// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require materialize-sprockets
//= require_tree .
$(document).on('turbolinks:load', function() {
  $(".button-collapse").sideNav();
  $('.modal').modal();
  $('.modal-trigger').modal('open');
  $('.modal-trigger').modal('close');
});

$(document).on('submit', '#login-form', '#signup-form', function(){
  var $form, $btn;

  $form = $(this);
  $btn = $form.find('input[type="submit"]');
  $form.find('.errors').remove();

  $.post({
    url: this.action,
    data: $form.serialize()
  }).error(function(jqXHR, textStatus, errorThrown){
    $form.prepend('<div class="errors">Invalid email or password</div>');
    // Unlocks the UI button
    $btn.prop( "disabled", false );
  });

  // prevent default submission
  return false;
});
