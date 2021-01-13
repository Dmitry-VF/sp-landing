const btn = document.querySelector('#btn');
btn.onclick = () => {
    document.querySelector('.intro').classList.add('animate__animated', 'animate__bounce');
    document.querySelector('.desktop').style.display = 'none';
}

const viewport = (selector, c) => {
    const classAdd = c;
    const content = document.querySelector(selector);
    window.addEventListener('scroll', () => {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (contentPosition < screenPosition) {
            content.classList.add('animate__animated', `animate__${classAdd}`)
        }
    })
}

viewport('.pros-wrap', 'bounce');
viewport('.section-title', 'backInRight');
viewport('.form', 'zoomInUp');
viewport('.footer', 'rotateIn')