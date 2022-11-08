
let question_type = document.querySelectorAll('[data-q]');

question_type.forEach(que => {
    que.addEventListener('click', function (e) {
        let selectData = this.dataset.q;
        let qa_contents = document.querySelectorAll('[data-a]');
        question_type.forEach(element => {
            if (element.dataset.q !== selectData) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
        });
        qa_contents.forEach(element => {
            if (element.dataset.a !== selectData) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
        });

    });
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".gsap-h1", {
    y: -30,
});

let animation = gsap.timeline({
    scrollTrigger: {
        trigger: '#sect-chat',
        // markers: true,
        scroller: "main",
        start: 'top 60%',
        end: 'bottom 25%',
        toggleActions: "restart complete reverse none",
    }
});

animation
    .from('.stick-md, .polygon-line, .qa-mark',
        { stagger: 0.4, duration: 0.6, opacity: 0, scale: 0.2, ease: 'elastic(1)' }
    )
    .from('.qa-chat, .exclamation, .maru-line',
        { stagger: 0.4, duration: 0.6, scale: 0.2, opacity: 0, ease: 'elastic(1)' }
    )
    .from('.aq-chat, .tri-line, .stick-lg, .qa-chat2, .mouse',
        { stagger: 0.4, duration: 0.6, scale: 0.2, opacity: 0, ease: 'elastic(1)' }
    );


let main_animate = gsap.timeline({
    scrollTrigger: {
        trigger: '#sect-main',
        // markers: true,
        scroller: "main",
        start: 'top 60%',
        end: 'bottom 25%',
        toggleActions: "restart complete reverse none",
        defaults: {
          duration: 1,
        },
    }
});
main_animate
    .from('.main-title',
        { duration: 0.6, opacity: 0, ease: 'ease-in' }
    )
    .from('.hand',
        { duration: 0.6, opacity: 0, width: 0, ease: 'circ' }
    )
    .from('.coin',
        { duration: 0.6, opacity: 0, rotate: -50, scale: 1.5, ease: 'circ' }
    )
    .from('.section-main:before',
        { duration: 0.6, x: 100, ease: 'circ' }
    );


let active_animate = gsap.timeline({
    scrollTrigger: {
        trigger: '#sect-active',
        // markers: true,
        scroller: "main",
        start: 'top 60%',
        end: 'bottom 25%',
        toggleActions: "restart complete reverse none",
    }
});

active_animate
    .from('.active-content',
        {
            stagger: 0.4, duration: 0.6,
            onComplete: function () {
                let cards = document.querySelector('.active-content');
                cards.classList.add('finish');
            }
        }
    );

let rule_animate = gsap.timeline({
    scrollTrigger: {
        trigger: '#sect-rule',
        // markers: true,
        scroller: "main",
        start: 'top 60%',
        end: 'bottom 25%',
        toggleActions: "play complete reverse none",
    }
});
rule_animate
    .from('.back-major',
        {
            duration: 1, opacity: 0, y: 40, ease: 'ease-in',
            onComplete: function () {
                let car = document.querySelector('.car');
                car.classList.add('finish');
            }
        }

    )
    .to('.piece',
        { stagger: 0.4, duration: 0.6, y: -25, x: -35, rotate: -40, ease: 'circ', delay: 2.4 }
    );