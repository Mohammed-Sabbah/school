

    // [hide - show - toggle]
    // [fadeOut - fadeIn - fadeToggle - fadeTo]
    // [slideUp - slideDown - slideToggle]
    
    // [click - dblCLick]
    // [mouseEnter - mouseLeave]

    // [text - html - val] ___set and get
    // [css]
    // [attr] 

    // [console.log]

    // [addClass - removeClass - toggleClass]

    // [append - prepend] in side
    // [before - after] out side

    // [focus - blur]

    // [parent - parents - parentsUntil]
    // [children] just direct child
    // [find("*")] all children
    // [siblings] brothers

    // [position  بالنسبة للأب   -   offset   بالنسبة للصفحة]

    // [scroll - scrollTop رقم]

    // @(window).scroll(function() {  })
    // @(window).scrollTop()  رقم

    // [load]

    // [keyup - keydown - keypress]

$(document).ready(function(){

    $("#btn").click(function (){
        $("body").toggleClass("dark")
    })
});


$(window).on("load",function(){
    
    $(".lds-ellipsis").fadeOut(1200,function(){
        $(this).parent().fadeOut(1200);
    });
    
});





function scrl(x){
    window.scrollTo({
        top : x,
        behavior : "smooth",
    });
}


    