(function(){
  const invitation = document.querySelector('.invitation')
    
  invitation.addEventListener('click', function(e){
    let el = e.target;
    if (el.tagName === 'BUTTON') {
      let classis = el.dataset.go;
      let url = `${location.href}#${classis}`;
      this.classList.replace(this.classList[1], classis);
    }
  })
})()