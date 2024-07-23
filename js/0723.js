document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const nav = document.getElementsByTagName('nav')[0];
    const slide = document.getElementById("slide"); 
    const slideArea = document.getElementById("slideArea");



    //slide의 범위설정을 위해.
    let sw = slidearea.clientWidth;

    //<h2>의 위치설정
    let sh = slidearea.clientHeight;
    let h2 = document.getElementsByTagName('h2')[0];
    let h2Width = h2.clientWidth;
    let h2Height= h2.clientHeight;
    
    let sww = (sw - h2Width) / 2;            
    h2.style.left = sww + "px";
    let shh = Math.trunc(( sh - h2Height ) /2 );
    //alert(shh);
    h2.style.top = shh + "px";     

    let menu = () => {
        if( nav.clientHeight == 0 )  nav.style.height = "200px";
        else nav.style.height = "0px";
    }

    let ss = () => {
        if( window.innerWidth>=1024 )  nav.style.height = "auto";
        else      nav.style.height = 0; 
        pos =   sw* (-1) + "px"; 

        //slide의 범위설정을 위해.
        sw = slidearea.clientWidth;

        //<h2>의 위치설정
        sh = slidearea.clientHeight;
        h2 = document.getElementsByTagName('h2')[0];
        h2Width = h2.clientWidth;
        h2Height= h2.clientHeight;

        sww = (sw - h2Width) / 2;            
        h2.style.left = sww + "px";
        shh = Math.trunc(( sh - h2Height ) /2 );
        h2.style.top = shh + "px";  
    }
    
    let pos =  sw * (-1) + "px"; 
    const circlearea = document.getElementById('circle');//동글라미 3개의 부모영역          
    let i = 0;
   
    const move = () => {
        slide.style.transition = "left 1.5s";
        slide.style.left = pos;

        setTimeout( po, 1500  );
        
       //동그라미에서 빨간색을 제거//
        document.getElementsByClassName('red')[0].classList.remove('red');
        i= (i+1)%3;
       circlearea.children[i].classList.add('red');
    }


    const po = () => {
        slide.append( slide.firstElementChild );
        slide.style.left = 0;
        slide.style.transition = "none";
    }
               
    btn.addEventListener("click" , menu );
    window.addEventListener("resize" , ss  );
    setInterval( move , 2500);
});/////////// 마지막 부분