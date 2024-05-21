'use strict';

document.getElementById('new-thread-btn').addEventListener('click', function() {
    document.getElementById('new-thread-section').style.display = 'block';
});

document.getElementById('new-thread-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('thread-title').value;
    const content = document.getElementById('thread-content').value;
    
    if (title && content) {
        const threadList = document.querySelector('.thread-list');
        
        const threadCard = document.createElement('div');
        threadCard.classList.add('thread-card');
        
        const threadTitle = document.createElement('h3');
        threadTitle.textContent = title;
        
        const threadContent = document.createElement('p');
        threadContent.textContent = content;
        
        const threadMeta = document.createElement('div');
        threadMeta.classList.add('thread-meta');
        threadMeta.textContent = `作成者: 新規ユーザー | 投稿日: ${new Date().toLocaleDateString()} | 最新返信: ${new Date().toLocaleDateString()}`;
        
        threadCard.appendChild(threadTitle);
        threadCard.appendChild(threadContent);
        threadCard.appendChild(threadMeta);
        
        threadList.appendChild(threadCard);
        
        document.getElementById('new-thread-form').reset();
        document.getElementById('new-thread-section').style.display = 'none';
    }
});

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const threads = document.querySelectorAll('.thread-card');
    
    threads.forEach(function(thread) {
        const title = thread.querySelector('h3').textContent.toLowerCase();
        const content = thread.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            thread.style.display = '';
        } else {
            thread.style.display = 'none';
        }
    });
});

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const event = this.getAttribute('data-event');
        document.getElementById('event').value = event;
    });
});

window.addEventListener('scroll',()=>{
    const position = window.scrollY;

    const topBtn = document.querySelector('#page-top');
    if(position>=300){
        topBtn.classList.add('open');
    } else {
        topBtn.classList.remove('open')
    }
});
