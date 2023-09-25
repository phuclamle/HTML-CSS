let cart = document.querySelector(".click-bought");
let sideNav = document.querySelector(".sideNav");
let close_btn = document.querySelector(".btn-close");
let slider_shipper = document.querySelector(".slider-shipper");
let scrollBar = document.getElementById('scrollBar')
 

    cart.onclick = function(){
        if(sideNav.style.right =="-400px"){
            sideNav.style.right ="0px";
        }
        else{
            sideNav.style.right ="-400px";
        }
    }
    close_btn.onclick = function(){
        if(sideNav.style.right =="0px"){
            sideNav.style.right = "-400px";
        }
    }

    window.addEventListener('scroll',function(){
        slider_shipper.style.top ="427px";
         slider_shipper.style.width = "400px";
         slider_shipper.style.height ="400px";
         slider_shipper.style.left = "250px";
    })
    // window.addEventListener('scroll', () =>{
    //     if( ===0){
    //         console.log(7);
    //         slider_shipper.style.top = "627px";
    //         slider_shipper.style.width ="105px";
    //         slider_shipper.style.height = "121px";
    //         slider_shipper.style.left = "105px";
    //     }
    // }
    //)

    //Price:
    let item = document.querySelectorAll(".item");
    let totaldished = document.querySelector(".total-dished")
    
    let total=0;
     
    

