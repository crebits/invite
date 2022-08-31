(function(){
    const imgWrap = document.querySelector('.img-wrap');
    for(let i=0; i<10; i++){
    let div = document.createElement('div');
    div.innerHTML = i;
    div.setAttribute('style', `--row:${Math.floor(Math.random() * 3 + 1)}; --col:${Math.floor(Math.random() * 2 + 1)};`);
    imgWrap.appendChild(div);
    };
})()