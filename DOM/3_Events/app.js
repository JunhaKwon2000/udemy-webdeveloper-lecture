const btnRgb = document.querySelector('.btn-rgb');
const body = document.querySelector('body');
const spans = document.querySelectorAll('span');
btnRgb.addEventListener('click', () => {
    const rgbList = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    const [c1, c2, c3] = rgbList;
    body.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
    spans.forEach((span, idx) => {
        span.textContent = rgbList[idx];
    })
})