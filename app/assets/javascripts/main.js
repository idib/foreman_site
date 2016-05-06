var eps;

$(document).ready(function(){
    var str = 'class="active"';
    var strr = 'active';
    eps = $(window).height()*0.1;
    if($(".item.slid").length !=  $("ol>li").length)
    $(".item.slid").each(function(i){
        $(this).addClass(strr);
        $("ol.carousel-indicators").append(
            '<li data-target="#carousel-example-generic" data-slide-to="'+ i.toString() +'"'+str.toString()+'></li>'
        );
        str = strr = "";
    });
});
