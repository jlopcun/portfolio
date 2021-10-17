const cursor = document.getElementById('cursor');
const RootStyles = document.documentElement.style;
const cursorStyle = getComputedStyle(cursor)
window.addEventListener('mousemove',(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    if (x+45<window.innerWidth) RootStyles.setProperty('--Xpos',`${x-25}px`);
    if(y) RootStyles.setProperty('--Ypos',`${y-25}px`);
})
    
console.log(window.innerHeight);


let menuOpener = document.getElementById('menuOpener');
let menuToOpen = document.getElementById('menuToOpen');
menuOpener.addEventListener('click',()=>{
    menuToOpen.classList.toggle('show');
    document.body.classList.toggle('menuOpened');
})

let darklight = document.getElementById('darklight');

darklight.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-moon')){
        e.target.classList.add('fa-sun');
        e.target.classList.remove('fa-moon');
        RootStyles.setProperty('--bodybg','#44E3D8');
        RootStyles.setProperty('--bodytxt','#1E635F');
    }
    else{
        e.target.classList.add('fa-moon'); 
        e.target.classList.remove('fa-sun');
        RootStyles.setProperty('--bodybg','#1E635F');
        RootStyles.setProperty('--bodytxt','#a2f0e9');

    }
    RootStyles.setProperty('--txtquit',`${RootStyles.getPropertyValue('--bodybg')}`);
})



if(window.innerWidth<800){
    menuToOpen.addEventListener('click',(e)=>{
        if(e.target.tagName==='A'){
            menuToOpen.classList.toggle('show');
            document.body.classList.toggle('menuOpened');
        }
        console.log('match')
    })
}