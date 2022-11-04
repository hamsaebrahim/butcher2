
// animation page index
window.addEventListener('scroll', function(){

    
    var
            // window scroll height 
            wScroll = window.innerHeight;
// first pic in index       
        var  indexOne = document.getElementById('indexOne'),
        scrollTime1 = indexOne.getBoundingClientRect().top;
 // 2nd pic in index 
       var indexTwo = document.getElementById('indexTwo'),
        scrollTime2 = indexTwo.getBoundingClientRect().top;
// 1st pic in about

// first img if cond
     if (scrollTime1 < wScroll){
        indexOne.classList.add('animate__fadeInRight');
     }
    // 2nd img if cond
    if (scrollTime2 < wScroll){
        indexTwo.classList.add('animate__fadeInLeft');
    }

    });

    // animation about page
    window.addEventListener('scroll', function(){

    
        var
                // window scroll height 
                wScroll = window.innerHeight,
    // 1st pic in about
    aboutOne=document.getElementById('aboutOne'),
    scrollTimeAbout1=aboutOne.getBoundingClientRect().top,
    // 2nd pic in about
    aboutTwo=document.getElementById('aboutTwo'),
    scrollTimeAbout2=aboutTwo.getBoundingClientRect().top,
    // 3rd pic in about
    aboutThree=document.getElementById('aboutThree'),
    scrollTimeAbout3=aboutThree.getBoundingClientRect().top,
    // 4th pic in about
    aboutFour=document.getElementById('aboutFour'),
    scrollTimeAbout4=aboutFour.getBoundingClientRect().top,
     // 5th pic in about
     aboutFive=document.getElementById('aboutFive'),
     scrollTimeAbout5=aboutFive.getBoundingClientRect().top,
     // 6th pic in about
     aboutSix=document.getElementById('aboutSix'),
     scrollTimeAbout6=aboutSix.getBoundingClientRect().top,
     // 7th pic in about
     aboutSeven=document.getElementById('aboutSeven'),
     scrollTimeAbout7=aboutSeven.getBoundingClientRect().top,
     // 8th pic in about
     aboutEight=document.getElementById('aboutEight'),
     scrollTimeAbout8=aboutEight.getBoundingClientRect().top,
          // 9th pic in about
          aboutNine=document.getElementById('aboutNine'),
          scrollTimeAbout9=aboutNine.getBoundingClientRect().top,
          // 10th pic in about
          aboutTen=document.getElementById('aboutTen'),
          scrollTimeAbout10=aboutTen.getBoundingClientRect().top;


      // first img if cond about page
      if (scrollTimeAbout1 < wScroll){
        aboutOne.classList.add('animate__fadeInRight');
    }
         // 2nd img if cond about page
         if (scrollTimeAbout2 < wScroll){
            aboutTwo.classList.add('animate__fadeInLeft');
        }
             // 3rd img if cond about page
      if (scrollTimeAbout3 < wScroll){
        aboutThree.classList.add('animate__fadeInRight');
    }
         // 4th img if cond about page
         if (scrollTimeAbout4 < wScroll){
            aboutFour.classList.add('animate__fadeInLeft');
        }
              // 5th img if cond about page
      if (scrollTimeAbout5 < wScroll){
        aboutFive.classList.add('animate__fadeInRight');
    }
         // 6th img if cond about page
         if (scrollTimeAbout6 < wScroll){
            aboutSix.classList.add('animate__fadeInLeft');
        }
             // 7th img if cond about page
      if (scrollTimeAbout7 < wScroll){
        aboutSeven.classList.add('animate__fadeInRight');
    }
         // 8th img if cond about page
         if (scrollTimeAbout8 < wScroll){
            aboutEight.classList.add('animate__fadeInLeft');
        }
                 // 9th img if cond about page
                 if (scrollTimeAbout9 < wScroll){
                    aboutNine.classList.add('animate__fadeInRight');
                }
                     // 10th img if cond about page
              if (scrollTimeAbout10 < wScroll){
                aboutTen.classList.add('animate__fadeInLeft');
            }

        });
      