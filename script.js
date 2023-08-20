const audioPlayer = document.getElementById('audio-player');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const audioSrc = card.getAttribute('data-audio');
        if (audioPlayer.src.includes(audioSrc)) {
            if (audioPlayer.paused) {
                audioPlayer.play();
                card.classList.add('playing');
            } else {
                audioPlayer.pause();
                card.classList.remove('playing');
            }
        } else {
            audioPlayer.src = audioSrc;
            audioPlayer.play();
            cards.forEach(c => c.classList.remove('playing'));
            card.classList.add('playing');
        }
    });
    
    audioPlayer.addEventListener('ended', () => {
        card.classList.remove('playing');
    });
});
// ==========================================================================
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      if (tab.id === tabId) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  }
  
  const audioListItems = document.querySelectorAll('.audio-list-item');
  
  audioListItems.forEach(item => {
    item.addEventListener('click', () => {
      const audioPlayer = item.closest('.audio-player').querySelector('.player');
      const audioSrc = item.getAttribute('data-audio');
      
      audioPlayer.src = audioSrc;
      audioPlayer.play();
    });
  });
  