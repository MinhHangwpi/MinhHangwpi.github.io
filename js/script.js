$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',   
            queue: false
        }
    });
})

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ['Software Engineer.', 'Web Developer.', 'Student.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
        loopCount: Infinity
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    // when window is scrolled, this code will be executed
    $(window).scroll(function () {
        

        if (!countUpFinished && window.scrollY > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
    
                // Create a new countUp instance for each element
                var options = {
                    startVal: 0,  // Start value for counting
                    endVal: endVal,
                    duration: 2,  // Duration in seconds
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                };
    
                var countUp = new CountUp(this, 0, endVal, 0, options);
                if (!countUp.error) {
                    countUp.start();
                } else {
                    console.error(countUp.error);
                }
            });
    
            countUpFinished = true;
        }
    })

    // fancy box
    $("[data-fancybox]").fancybox(); // select all elements with the [data-fancybox] attribute

    // init Isotope
    var $grid = $('.items').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });



    // make the navbar stick to the top
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        // when we scroll the window, we will call this function
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.addClass("fixedNav");
        } else {
            body.removeClass("fixedNav");
        }
    }


    // // for the counter in the stats section
    // const counters = $('.counter');

    // const options = {
    //     threshold: 0.2, // Adjust this value to control when the animation starts relative to view port 
    // };


    // const handleIntersection = (entries, observer) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       const targetCounter = $(entry.target);
    //       const finalCount = parseInt(targetCounter.text(), 10);

    //       let start = 0;
    //       const duration = 2000; // Animation duration in milliseconds
    //       const step = Math.ceil(finalCount / (duration / 10));

    //       const counterInterval = setInterval(() => {
    //         start += step;
    //         if (start >= finalCount) {
    //           targetCounter.text(finalCount);
    //           clearInterval(counterInterval);
    //         } else {
    //           targetCounter.text(start);
    //         }
    //       }, 10);

    //       observer.unobserve(targetCounter[0]);
    //     }
    //   });
    // };

    // const observer = new IntersectionObserver(handleIntersection, options);

    // counters.each(function() {
    //   observer.observe(this);
    // });
});



