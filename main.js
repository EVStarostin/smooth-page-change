document.addEventListener('DOMContentLoaded', init);

function init() {
    initSmoothPageChange();
}

function initSmoothPageChange() {
    var container = document.querySelector('.container');
    var nav = document.querySelector('.nav');
    var href;

    nav.addEventListener('click', handleClick);
    
    container.classList.add('container--blurred');
    requestAnimationFrame(function() {
        container.classList.remove('container--blurred');
    });

    function handleClick(e) {
        href = e.target.href;
    
        if (!href) {
            return;
        }

        e.preventDefault();
    
        container.addEventListener('transitionend', handleTransitionend);
        container.classList.add('container--blurred'); 
    }

    function handleTransitionend(e) {
        if (e.propertyName === 'opacity') {
            location.href = href;
        }
    }
}