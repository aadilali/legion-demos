$(document).ready(function(){


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }


    // section two arrow
    scrollGlow('#section_two','#section_two_stop_glow','.section_two_arrow svg .s0')
    

    // section three arrows
    scrollGlow('#section_three','#section_three_stop_glow','.section_three_arrow_one svg .s0')
    scrollGlow('#section_three','#section_three_stop_glow','.section_three_arrow_two_one svg .s0')

    // section four arrows
    scrollGlow('#section_four','#section_four_stop_glow','.section_four_arrow_one svg .s0')
    scrollGlow('#section_four','#section_four_stop_glow','.section_four_arrow_two svg .s0')

    // section five arrow
    scrollGlow('#section_five','#section_five_stop_glow','.section_five_arrow svg .s0')

    // section six arrow
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow svg .s0')
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow_one svg .s0')
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow_two svg .s0')
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow_three svg .s0')
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow_four svg .s0')
    scrollGlow('#section_six','#section_six_stop_glow','.section_six_arrow_five svg .s0')



    function scrollGlow(divId,stopDivId,divArrow){
        let section_two = $(divId).offset().top-300;
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