'use strict';

// *ibg
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();;
// *Эта функция проверяет поддерживается ли браузером формат изображения webp и если поддерживается, то эта функция добавляет из css-документа внутрь html-документа класс с изобажением формата webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
// *Slider
const slider = document.querySelector('.slide');
if (slider) {
    new Swiper('.slide', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        mousewheel: {
            sensivity: 1,
        },
        speed: 800,
        slideToClickedSlide: false,
        preloadImages: false,
        // todo Отключить предзагрузку картинок
        preloadImages: false,
        // todo Lazy Loading
        lazy: {
            // Подключать на старте переключения слайда
            loadOnTransitionStart: true,
            // Подключить предыдущую и следующие картинки
            loadPrevNext: true,
        },
        // todo Слежка за видимыми слайдами
        watchSlidesProgress: true,
        // todo Добавление класса видимым слайдам
        watchSlidesVisibility: true,
    });
}
;
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// *Определяем мы на мобильных устройствах или нет.
if (isMobile.any()) {
    document.body.classList.add('_touch')
}
// *Burger menu
let burger = document.querySelector('.burger__button');
burger.addEventListener('click', function () {
    document.body.classList.toggle('_active');
});
let header = document.querySelector('.header');
header.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('header__overlay')) {
        document.body.classList.remove('_active');
    }
});
// *Мой авторский js код который добаваляет класс opened к ссылкам которые открыты
const pathName = document.location.pathname;
const links = document.querySelectorAll('.nav__link');
if (links) {
    for (const link of links) {
        const hrefValue = link.getAttribute('href');
        if (hrefValue != '') {
            if (pathName.endsWith(hrefValue) || pathName.includes(hrefValue)) {
                link.classList.add('opened');
            }
        }
    }
}
// *Фильтр
let filterLinksParents = document.querySelectorAll('.sort__links');
const projects = document.querySelectorAll('.projects__project');
if (filterLinksParents.length > 0){
    for (const filterLinksParent of filterLinksParents) {
        if (filterLinksParent) {
            filterLinksParent.addEventListener("click", function (e) {
                if (e.target.tagName !== 'LI') return;
                const filterAtr = e.target.dataset.find;
                for (const project of projects) {
                    if (project.classList.contains(filterAtr) || filterAtr === 'all') {
                        project.classList.remove('hide');
                    } else {
                        project.classList.add('hide');
                    }
                }
            });
            // Добавляем класс clicked к активным ссылкам
            let sortLinks = document.querySelectorAll('.sort__link');
            for (let i = 0; i < sortLinks.length; i++) {
                const sortLink = sortLinks[i];
                sortLink.addEventListener('click', function () {
                    let current = document.querySelectorAll('.clicked');
                    current[0].className = current[0].className.replace(' clicked', '');
                    sortLink.classList.add('clicked');
                })
            };
        }
    }
}




