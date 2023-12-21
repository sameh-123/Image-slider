const img=document.querySelector('.image');
const right=document.querySelector('.right');
const left=document.querySelector('.left');
let lst=2;
img.src='./images/img1.jpg';
document.querySelector('.b1').innerHTML=`&#11044;`;

function work(){
    img.src=`./images/img${lst}.jpg`;
    let bef=(lst+4)%5;
    if(bef==0)bef=5;
    document.querySelector(`.b${bef}`).innerHTML="&#8413;";
    document.querySelector(`.b${lst}`).innerHTML="&#11044;";
    lst=(lst+1)%5;
    if(lst==0)lst=5;
}

let interval = setInterval(work, 3000);






for(let i=1;i<=5;i++){
    console.log(`.b${i}`);
    const btn=document.querySelector(`.b${i}`);
    btn.addEventListener('click',()=>{
        clearInterval(interval);
        let bef=(lst+4)%5;
        if(bef==0)bef=5;
        document.querySelector(`.b${bef}`).innerHTML=`&#8413;`;
        img.src=`./images/img${i}.jpg`;
        document.querySelector(`.b${i}`).innerHTML=`&#11044;`;
        lst=(i+1)%5;
        if(lst==0)lst=5;
        interval=setInterval(work, 3000);
    });
}



right.addEventListener('click',()=>{
    clearInterval(interval);
    let bef=(lst+4)%5;
    if(bef==0)bef=5;
    document.querySelector(`.b${bef}`).innerHTML=`&#8413;`;
    img.src=`./images/img${lst}.jpg`;
    document.querySelector(`.b${lst}`).innerHTML=`&#11044;`;
    lst=(lst+1)%5;
    if(lst==0)lst=5;
    interval=setInterval(work, 3000);
});


left.addEventListener('click',()=>{
    clearInterval(interval);
    let bef=(lst+4)%5;
    if(bef==0)bef=5;
    document.querySelector(`.b${bef}`).innerHTML=`&#8413;`;
    lst=(bef+4)%5;
    if(lst==0)lst=5;
    img.src=`./images/img${lst}.jpg`;
    document.querySelector(`.b${lst}`).innerHTML=`&#11044;`;
    lst=bef;
    interval=setInterval(work, 3000);
});