document.addEventListener('DOMContentLoaded', () =>{
        anime({
            targets: '.logo',
            translateX: [-200, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 1000,
            opacity: [0, 1]
        });
         anime({
            targets: 'nav a',
            translateY: [-50, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => {
                return 1100 + 100 *i;
            },
            opacity: [0, 1]
        });
       anime({
            targets: '.col-1 img',
            translateX: [-400, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 1400,
            opacity: [0, 1]
        });
        anime({
            targets: '.col-2',
            translateX: [-400, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 1600,
            opacity: [0, 1]
        }); /* */
})