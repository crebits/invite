(function(){
  const invitation = document.querySelector('.invitation')
  const btnArea = document.querySelector('.btn_area')
    
  btnArea.addEventListener('click', function(e){
    let page = invitation.dataset.page
    if (e.target.className === 'prev') {
      (page === '1') ? page = 5 : page-- ;
    } else {
      (page === '5') ? page = 1 : page++ ;
    }
    invitation.dataset.page = page
  })
})()