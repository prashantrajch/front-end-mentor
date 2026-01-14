const shareToolTip = document.querySelector('.share-tooltip');
const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', (e) => {
    
    e.target.classList.toggle('active');

    if (e.target.classList.contains('active')) {
        shareToolTip.classList.add('active');
    } else {
        shareToolTip.classList.remove('active');
    }
})