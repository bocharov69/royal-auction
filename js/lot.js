document.addEventListener("DOMContentLoaded", function () {
    //spoiler
    document.querySelector('.lot__card-spoiler').addEventListener("click", function (e) {
        e.target.classList.toggle('is-active');
        document.querySelector('.lot__card-description').classList.toggle('is-active');
    });

    //play video
    const playbtn = document.querySelector('.lot__review-video-playbtn');
    playbtn.addEventListener("click", function (e) {
        e.target.classList.add('is-active');
        e.target.previousElementSibling.play();
        e.target.previousElementSibling.setAttribute("controls", true);
    });

    //progress steps slider
    const progress_steps = document.querySelectorAll('.progress-step');
    let initial_slide = 0;
    for (let i = 0; i < progress_steps.length; i++) {
        if (progress_steps[i].classList.contains('is-active'))
            initial_slide = i;
    }
    const progress_slider = new Swiper('.lot__progress-steps-wrapper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: initial_slide,
        speed: 300,
        slideToClickedSlide: true,
        allowTouchMove: false,
        watchOverflow: false,
        loop: false,
        autoHeight: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    });


    //copy tracknum
    const tracknum = document.querySelector(".lot__progress-steps__tracknum");
    if (tracknum) {
        tracknum.addEventListener("click", function (e) {
            navigator.clipboard.writeText(e.target.getAttribute("value"));
            e.target.classList.add('is-active');
            setTimeout(function () {
                e.target.classList.remove('is-active');
            }, 1000);
        });
    }
});