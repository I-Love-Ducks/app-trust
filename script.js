const burger = document.querySelector('.burger_container');
const menu = document.querySelector('.menu');
const vertLine = document.querySelector('.vertical-line');
const month_year_stat = document.querySelector('.month_and_year_stats_container');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    vertLine.classList.toggle('active');
    month_year_stat.classList.toggle('menuOpened');
})
