window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const triggerBtns = document.querySelectorAll('.questions__btn'),
        text = document.querySelectorAll('.questions__text'),
        icons = document.querySelectorAll('[data-icon]');

    //show text and change icon from plus to minus
    function show(i) {
        text[i].classList.add('show');
        icons[i].classList.remove('fa-plus-square')
        icons[i].classList.add('fa-minus-square')
    }
    //hide text and change icon back to plus
    function hide(i) {
        text[i].classList.remove('show');
        icons[i].classList.remove('fa-minus-square')
        icons[i].classList.add('fa-plus-square')
    }

    triggerBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault;
            const target = e.target;
            //if we click on plus-square icon hide all text and change all icons from minus to plus, then show only clicked element
            if (target && target.classList.contains('fa-plus-square')) {
                text.forEach(item => {
                    item.classList.remove('show');
                })
                icons.forEach(icon => {
                    icon.classList.remove('fa-minus-square');
                    icon.classList.add('fa-plus-square')
                })
                show(i);
            } else if (target.classList.contains('fa-minus-square')) {
                //else if we click on minus-square then hide text on clicked element and add plus-square back to icon
                hide(i);
            }
        })
    })
})