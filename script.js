window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0 // rewind to the start
  audio.play()
  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if not transform 
  this.classList.remove('playing');
  this.classList.remove('playing')
} 

const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
