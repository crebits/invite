(function(){
    const imgWrap = document.querySelector('.img-wrap');
    const imgPop = document.querySelector('.img-pop');
    let html='';
    // --row:${Math.floor(Math.random() * 2 + 1)}; --col:${Math.floor(Math.random() * 2 + 1)};
    for(let i=0; i<19; i++){
        html += `<li style="background-image: url(./images/img_${i}.jpg);" data-acc="${i}">
                </li>`
    };
    imgWrap.insertAdjacentHTML("beforeend", html);

    imgWrap.addEventListener('click', (e) => {
        const el = e.target;
        if (el.tagName === 'LI') {
            imgWrap.classList.add('show');
            imgPop.children[0].src = `./images/img_${el.dataset.acc}.jpg`;
        }
    });

    imgPop.addEventListener('click', (e) => {
        const el = e.target;
        if (el.tagName === 'DIV') {
            imgWrap.classList.remove('show')
        }
    });
})()