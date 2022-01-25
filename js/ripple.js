const button = document.querySelector('.hire-button');
const buttonPortfolio = document.querySelectorAll('.portfolio-btn');
const buttonOrder = document.querySelectorAll('.order-shooting-btn');

button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY
    
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
  
    this.appendChild(circle);
  
    setTimeout(() => circle.remove(), 500);
  })

  buttonPortfolio.forEach(el => el.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonBottom = e.target.offsetBottom
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft;
    const yInside = y - buttonBottom;

    const circle = document.createElement('span')
    circle.classList.add('circle-portfolio')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
  
    this.appendChild(circle);
  
    setTimeout(() => circle.remove(), 500);
  }))

  buttonOrder.forEach(el => el.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonBottom = e.target.offsetBottom
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft;
    const yInside = y - buttonBottom;

    const circle = document.createElement('span')
    circle.classList.add('circle-order')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
  
    this.appendChild(circle);
  
    setTimeout(() => circle.remove(), 500);
  }))