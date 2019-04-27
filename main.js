document.addEventListener('DOMContentLoaded', init);

function init() {
    var container = document.querySelector('.container');
    var nav = document.querySelector('.nav');
    var href;

    nav.addEventListener('click', handleClick);
    
    requestAnimationFrame(function() {
        container.classList.add('container--visible');
    });

    function handleClick(e) {
        e.preventDefault();
        href = e.target.href;
    
        if (!href) {
            return;
        }
    
        container.addEventListener('transitionend', handleTransitionend);
        container.classList.remove('container--visible');   
    }

    function handleTransitionend(e) {
        if (e.propertyName === 'opacity') {
            location.href = href;
        }
    }
}
