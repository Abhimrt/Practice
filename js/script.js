// ============================on scroll animation==============
let lh = document.querySelectorAll('.lefthide');
let rh = document.querySelectorAll('.righthide');
let th = document.querySelectorAll('.tophide');

window.addEventListener('scroll',toshow);
toshow();
function toshow() {
    let bottom = window.innerHeight/6*5;
    lh.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    rh.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    th.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    
}
