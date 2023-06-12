let screen=document.querySelector('.screen')
let main=true
let dimBt=document.querySelector('.dimBt')

dimBt.addEventListener('click',()=>{
    let dimensions=0;
    while (+dimensions<16||dimensions>50) {
        dimensions=prompt('What dimension should the grid be?\nAnswer from 16 to\
 50')
    }
    screen.innerHTML=''
    let boxSize=480/dimensions
    boxSize=(boxSize/2)-1

    for (i=0;i<dimensions**2;i++) {
        const div = document.createElement('div')
        div.classList.add('box')
        div.style.cssText=`border:solid 1px;background:white;padding:${boxSize}px`
        screen.appendChild(div)
        div.addEventListener("mouseover",()=>{
            div.style.backgroundColor='red';
    
        })
    }

})

for (i=0;i<256;i++) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.cssText=`border:solid 1px;background:white;padding:14px`
    screen.appendChild(div)
    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor='red';

    })
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
