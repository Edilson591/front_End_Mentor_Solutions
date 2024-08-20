const shareButton = document.getElementById('share-button');
const shareIcon = document.getElementById('share-icon');
const shareBox = document.getElementById("share-box")

shareButton.addEventListener('click', () => {
    const isActive = shareButton.classList.toggle('btn-active');
    shareBox.classList.toggle('btn-active');
    shareIcon.src = isActive ? 'images/icon-share-active.svg' : 'images/icon-share.svg';
});
