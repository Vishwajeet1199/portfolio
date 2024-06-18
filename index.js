
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
let skillCards='';
const skillSet = [
  {
    src: 'images/html.png',
    name: 'html',
    alt:'html'
  },
  {
    src: 'images/css.png',
    name: 'CSS',
    alt:'css'
  },
  {
    src: 'images/bootstrap.png',
    name: 'bootstrap',
    alt:'bootstap'
  },
  {
    src: 'images/js.png',
    name: 'Javascript',
    alt:'javscript'
  },
  {
    src: 'images/react.png',
    name: 'React js',
    alt:'React js'
  },
  {
    src: 'images/1145600_angular_coding_development_front-end_javascript_icon.svg',
    name: 'Angular',
    alt:'Angular'
  },
  {
    src: 'images/1012822_code_development_logo_mongodb_programming_icon.svg',
    name: 'Mongodb',
    alt:'Mongodb'
  },
  {
    src: 'images/1012821_code_development_logo_mysql_icon.svg',
    name: 'MySQL',
    alt:'mysql'
  },
  {
    src: 'images/1012818_code_development_logo_nodejs_icon.svg',
    name: 'node js',
    alt:'node js'
  },
  {
    src: 'images/github.png',
    name: 'github',
    alt:'github'
  },
]
 skillSet.forEach((obj) => {
    skillCards +=`<div class="card  m-4">
       <img src=${obj.src} class="card-img-top img-fluid p-3" alt=${obj.alt}>
        <div class="card-body">
         <h4 class="card-text">${obj.name}</h4>
        </div>
     </div>`
})
document.getElementById('skill-container').innerHTML=skillCards


 