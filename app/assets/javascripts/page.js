var eps;

jQuery(document).ready(function(){
    var str = 'class="active"';
    var strr = 'active';
    eps = $(window).height()*0.1;
    $(".item.slid").each(function(i){
        $(this).addClass(strr);
        $("ol.carousel-indicators").append(
            '<li data-target="#carousel-example-generic" data-slide-to="'+ i.toString() +'"'+str.toString()+'></li>'
        );
        str = strr = "";
    });
    window.onscroll = function(){
        var pos = $('#NavBar').offset().top - $(window).scrollTop();
        var posabs = $('#Abspos').offset().top - $(window).scrollTop();
        console.log(pos);
        console.log(eps);
        if(pos <= eps)
        {
            $("#NavBar").addClass('navbar-fixed-top');
        }
        if(posabs > eps){
            $("#NavBar").removeClass('navbar-fixed-top');
        }
    }
});
