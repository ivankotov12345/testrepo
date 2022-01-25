const portfolioBtns = document.querySelector('.portfolio-buttons');
const image = document.querySelectorAll('.portfolio-image');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');

image.forEach((img, index) => img.src = `assets/img/portfolio/winter/${index + 1}.jpg`);

function changeClassActive(portfolioBtns) {
    portfolioBtn.forEach(el => el.classList.remove('active'));
    if(portfolioBtns.target.classList.contains('portfolio-btn')) {
        portfolioBtns.target.classList.add('active');
        image.forEach((img, index) => img.src = `assets/img/portfolio/${portfolioBtns.target.dataset.season}/${index + 1}.jpg`);
    }
}

portfolioBtns.addEventListener('click', changeClassActive);
