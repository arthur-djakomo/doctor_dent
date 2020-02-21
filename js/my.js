$(document).ready(function(){
    
    $('.slider').slick({
        
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
        
    });
    
    $('.exit__menu').on('click', function(event){
        
       $('#nav').toggleClass('active');
       
        
    })
    
    
    
    });