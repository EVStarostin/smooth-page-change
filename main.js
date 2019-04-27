document.addEventListener('DOMContentLoaded', init);

function init() {
    initSmoothPageTransition();
}

function initSmoothPageTransition() {
    var container = document.querySelector('.container');
    var nav = document.querySelector('.nav');
    var href;

    nav.addEventListener('click', handleClick);
    
    container.classList.add('container--blurred');
    requestAnimationFrame(function() {
        container.classList.remove('container--blurred');
    });

    function handleClick(e) {
        e.preventDefault();
        href = e.target.href;
    
        if (!href) {
            return;
        }
    
        container.addEventListener('transitionend', handleTransitionend);
        container.classList.add('container--blurred');   
    }

    function handleTransitionend(e) {
        if (e.propertyName === 'opacity') {
            location.href = href;
        }
    }
}