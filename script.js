$(document).ready(function(){

    scrollGlow('#section_two','#section_two_stop_glow','.section_two_arrow svg .s0')
    

    scrollGlow('#section_three','#section_three_stop_glow','.section_three_arrow_one svg .s0')
    
    scrollGlow('#section_three','#section_three_stop_glow','.section_three_arrow_two_one svg .s0')

    function scrollGlow(divId,stopDivId,divArrow){
        let section_two = $(divId).offset().top-500;
        let section_two_stop_glow = $(stopDivId).offset().top;

        $(window).on('scroll',function(){
            if($(window).scrollTop() > section_two) {
                if($(window).scrollTop() < section_two_stop_glow){
                    $(divId).addClass('glow_blue');
                    $(divArrow).css('stroke','#1A00FB');
                }
                else{
                    $(divId).removeClass('glow_blue');
                    $(divArrow).css('stroke','#fff');
                }
            }else{
                $(divId).removeClass('glow_blue')
                $(divArrow).css('stroke','#fff');
            }
        })
    }

})