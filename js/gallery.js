(function(){
    const imgWrap = document.querySelector('.img-wrap');
    const imgPop = document.querySelector('.img-pop');
    const weddingImg = document.querySelector('.wedding');
    let html='';
    // --row:${Math.floor(Math.random() * 2 + 1)}; --col:${Math.floor(Math.random() * 2 + 1)};
    for(let i=0; i<16; i++){
        html += `<li style="background-image: url(./images/img_${i}.jpg);" data-acc="${i}">
                </li>`
    };
    imgWrap.insertAdjacentHTML("beforeend", html);

    const imageNmae = (count) => {
        if(count < 0) count = 15
        if(count > 15) count = 0
        weddingImg.src = `./images/img_${count}.jpg`;
        weddingImg.dataset.acc = count;
    }

    imgWrap.addEventListener('click', (e) => {
        const el = e.target;
        if (el.tagName === 'LI') {
            imgWrap.classList.add('show');
            imageNmae(el.dataset.acc)
        }
    });

    imgPop.addEventListener('click', (e) => {
        const el = e.target;
        if (el.tagName === 'DIV') {
            imgWrap.classList.remove('show')
        }
        if (el.tagName === 'BUTTON') {
            el.className ==='prev' ? weddingImg.dataset.acc-- : weddingImg.dataset.acc++;
            imageNmae(weddingImg.dataset.acc)
        }
    });
})()