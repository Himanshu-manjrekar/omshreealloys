/*---------------------------------------------------
    17. Accordion
---------------------------------------------------*/

function emeAccordion() {
    $('.accordion__title')
        .siblings('.accordion__title').removeClass('active')
        .first().addClass('active');
    $('.accordion__body')
        .siblings('.accordion__body').slideUp()
        .first().slideDown();
    $('.accordion').on('click', '.accordion__title', function () {
        $(this).addClass('active').siblings('.accordion__title').removeClass('active');
        $(this).next('.accordion__body').slideDown().siblings('.accordion__body').slideUp();
    });
};
emeAccordion();





window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

