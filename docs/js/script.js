// $(document).ready(function () {
    
// });



const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
      
hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.proskills__exp-subtitle');
      lines = document.querySelectorAll('.proskills__exp-orange');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

//Smooth scroll and page up
$(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
    });
    return false;
});

AOS.init();

$('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()

    }).done(function () {
        $(this).find("input").val("");
        $('.contacts__descr').fadeOut();
        // $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;

});
