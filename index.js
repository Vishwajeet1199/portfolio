
var typed = new Typed('.auto-type', {
    strings: ['Vishwajeet .', 'a Web Developer.'],
    typeSpeed: 150,
    backSpeed: 100, 
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
  });

  function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'flex' : 'none';

}
