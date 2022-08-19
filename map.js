
let map = null;
let marker = null;

function initMap() {
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.340045, 127.106696),
        zoom: 5
    });
    marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.340045, 127.106696),
        map: map
    });

}
(function(){
    const mapWrap = document.querySelector('.mapWrap');
    for(let i=0; i<10; i++){
    let div = document.createElement('div');
    div.innerHTML = i;
    div.setAttribute('style', `--row:${Math.floor(Math.random() * 2 + 1)}; --col:${Math.floor(Math.random() * 2 + 1)};`);
    mapWrap.appendChild(div);
    };
})()