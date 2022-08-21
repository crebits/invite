(() => {
    const { createClient } = supabase;
    const commentArea = document.querySelector('#commentArea');
    const commentWrap = document.querySelector('.comment-wrap');
    supabase = createClient('https://vhrvlqeneibkmnpxavfi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocnZscWVuZWlia21ucHhhdmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY0ODUwODQsImV4cCI6MTk3MjA2MTA4NH0.Rixg9sFOIrlM0PwWBsGDbO0rj9XtH0mv0ZEMGJUJN70');

    const loads = async function(){
        let html='';
        let { data, error } = await supabase
        .from('comment')
        .select('*')
        .order('id', { ascending: false })
    
        if (error) {
            console.log(error)
            return
        }
        
        data.forEach( datas => {
            const { id, name, comment } = datas
            html += `<li class="comments">
                        <strong>${name}</strong>
                        <p>${comment}</p>
                        <button type="button" data-action="${id}">
                            <svg data-action="${id}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25,0,32,23.75,55.75,0,64,8.25,40.25,32,64,55.75,55.75,64,32,40.25,8.25,64,0,55.75,23.75,32,0,8.25Z" data-action="${id}"></path>
                            </svg>
                        </button>
                    </li>`
        });
        while (commentArea.hasChildNodes()) commentArea.removeChild(commentArea.firstChild);
        commentArea.insertAdjacentHTML("beforeend", html);
    }
    loads();

    commentArea.addEventListener('click', async e => {
        const el = e.target
        if(el.tagName === 'path' || el.tagName === 'svg' || el.tagName === 'BUTTON') {
          commentWrap.classList.add('delete')
          commentWrap.dataset.cmtid = el.dataset.action
        }
    });

    commentWrap.addEventListener('click', async e => {
      const el = e.target;
      if(el.className === 'btn-popup') commentWrap.classList.add('insert');
      if(el.className === 'comment-popup') {
        commentWrap.classList.remove('insert');
        commentWrap.classList.remove('delete');
      }
    });

    document.querySelector('#insertFrm').addEventListener('submit', async e => {
        e.preventDefault();
        const el = e.target,
              name = el.id.value,
              pw = el.pw.value,
              ta = el.ta.value;

        try {
          if(name === '' || pw === '' || ta === '') {
            alert('다시 작성해주세요!');
            return
          }
          const { status } = await supabase.from('comment').insert([{
              name: name,
              password: pw,
              comment: ta,
          }]);
          await loads();
        } catch (err) {
          console.error(err);
        }
        commentWrap.classList.remove('insert');
        e.target.reset();
    });


    document.querySelector('#deleteFrm').addEventListener('submit', async e => {
        e.preventDefault();
        const el = e.target,
              pw = el.pw.value;

        const { data } = await supabase
              .from('comment')
              .delete()
              .match({ 
                id: commentWrap.dataset.cmtid, 
                password: pw 
              });
        console.log(data.length);

        (data.length > 0) ? await loads() : alert('비밀번호가 맞지 않아요!') ;

        commentWrap.classList.remove('delete');

        e.target.reset();
    });
  })();