let crossBtn = document.querySelector('.cross-btn');
let searchBtn = document.querySelector('.search_btn');
let searchBox = document.querySelector('.search-box');
let inputTest = document.querySelector('.input-test');

searchBox.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('active_search')){
        searchBox.classList.remove('active_search');
    }
});

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchBox.classList.add('active_search');
    if(searchBox.classList.contains('active_search')){
        inputTest.classList.add('active_input');
        }else{
        inputTest.classList.remove('active_input');
        }
        });
        
        crossBtn.addEventListener('click', function(e){
            e.preventDefault();
            searchBox.classList.remove('active_search');
            inputTest.classList.remove('active_input');
    
});

$(function(){
    // *JQuery start
    $('.bannerSlider').slick({
        arrows: false,
        dots:true,
        dotsClass:'bannerDots container',
        autoplay: true,
        autoplaySpeed: 2000,


    })
    $('.main_slider').slick({
      arrows:false,
      dots:true,
      dotsClass:'bannerDots container',
      autoplay: true,
      autoplaySpeed: 1800,
  });

})




//ARRIVALS 

$('.parent_arrivals').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    prevArrow: '<span class="left"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow:'<span class="right"><i class="fa-solid fa-chevron-right"></i></span>', 
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

//* ARRIVALS JS END

//tooltip 

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltip ends

// today venobox

new VenoBox({
  selector: '.explore',
});
// today venobox


        
      // latest *****************************
      $('.latest').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
      });
     
  

  // latest ends