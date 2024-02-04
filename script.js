const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;  // this variable is used to display 1st img of all 6 imgs.

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';  // hide all the imgs
    }
    imgs[n].style.display = 'block';  // display only 1st img of all 6 imgs

}
changeSlide();

prev_btn.addEventListener('click', (e) =>{  // this event used to slide imgs of the left side
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) =>{  // this event used to slide imgs of the right side
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide(); 
});

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) =>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY; // this property perfoms the scroll all item horizontly
    });
}


