const open_button=document.querySelector('.start-button');
const close_button=document.querySelector('.Xclose');
const close_button2=document.querySelector('.second-close');

function EraseFirst(){
    document.querySelector('.first-box').style.display='block';
    document.querySelector('.second-box').style.display='none';
}

open_button.addEventListener('click',()=>{
    document.querySelector('.first-box').style.display='none';
    document.querySelector('.second-box').style.display='block';
});
close_button.addEventListener('click',EraseFirst);
close_button2.addEventListener('click',EraseFirst);