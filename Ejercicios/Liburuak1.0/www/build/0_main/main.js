$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>10) {
            console.log("Hola scroll");
        }
        else{console.log("No scroll")
        }
    });
})
