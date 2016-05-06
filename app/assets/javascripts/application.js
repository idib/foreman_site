// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	$("a.navbar-brand").each(function(i,v){
		$(v).css("color","white");
	});
	$("li>a").each(function(i,v){
		$(v).css("color","white");
	});
    window.onscroll = function(){
        var pos = $('#NavBar').offset().top - $(window).scrollTop();
        var posabs = $('#Abspos').offset().top - $(window).scrollTop();
        console.log(pos);
        console.log(eps);
        if(pos <= eps)
        {
            $("#NavBar").addClass('navbar-fixed-top');
            $('#Abspos').css("heigth",$("#NavBar").height().toString() + "px");
        }
        if(posabs > eps){
            $("#NavBar").removeClass('navbar-fixed-top');
            $('#Abspos').css("heigth","0px");
        }
    }
});
