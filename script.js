let container=document.querySelector('.container')

for (i=0;i<16;i++) {
    let div=document.createElement('div')
    div.innerHTML='hi'
    div.classList.add('grid')
    container.appendChild(div)
}

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './style.css';
    link.media = 'all';
    head.appendChild(link);
}