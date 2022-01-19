$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('navbar').addClass("sticky");
        } else{
            $('navbar').removeClass("sticky");
        }

        //scroll-up button show/hide script
        if(this.scrollY > 50){
            $('scroll-up-btn').addClass("show");
        }else{
            $('scroll-up-btn').removeClass("show");
        }
        
    })
});