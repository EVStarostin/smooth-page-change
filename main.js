window.addEventListener('load', init);

function init() {
    var container = document.querySelector('.container');
    var nav = document.querySelector('.nav');
    var href;

    nav.addEventListener('click', handleClick);
    container.classList.add('container--visible');

    function handleTransitionend(e) {
        location.href = href;
    }

    function handleClick(e) {
        e.preventDefault();
        href = e.target.href;
    
        if (!href) {
            return;
        }
    
        container.addEventListener('transitionend', handleTransitionend);
        container.classList.remove('container--visible');   
    }
}
