ChangeSlidVal = document.querySelector(".filter-info .value");

const remDis = document.querySelector(".container");


var blurss=0;
var sat =100;
var bri = 100;
var inv =0;
var grays = 0;
var roateeee=0;
var deg = 0;
var spp = 0;
var sgsg=0;
var scaleHoriz=1;
var scaleVertic=1;
function RotateLeft()
{
    deg= deg-90;
    document.getElementById("leftss").style.transform="rotate("+deg+"deg)";
}
function RotateRight()
{
    deg= deg+90;
    document.getElementById("leftss").style.transform="rotate("+deg+"deg)";
}
function horizScale()
{
    if(scaleHoriz==1)
    {
        scaleHoriz=-1;
    }
    else if (scaleHoriz==-1)
    {
        scaleHoriz=1;
    }
    document.getElementById("leftss").style.transform="scaleX("+scaleHoriz+")";
}
function verticScale()
{
    if(scaleVertic==1)
    {
        scaleVertic=-1;
    }
    else if (scaleVertic==-1)
    {
        scaleVertic=1;
    }
    document.getElementById("leftss").style.transform="scaleY("+scaleVertic+")";
}
function AllResett()
{
     sat =100;
     bri = 100;
     inv =0;
     grays = 0;
     blurss=0;
     deg = 0;
     roateeee=0;
     scaleHoriz=1;
     scaleVertic=1;
    document.getElementById("leftss").style.transform="rotate("+deg+"deg)";
    document.getElementById("leftss").style.transform="scaleX("+scaleHoriz+")";
    document.getElementById("leftss").style.transform="scaleY("+scaleVertic+")";
    document.getElementById("leftss").style.filter="none";
    ChangeSlidVal.innerText=`${100}%`;
    document.querySelector(".preview-img img").style.filter=`brightness(${bri}%) saturate(${sat}%) invert(${inv}%)  grayscale(${grays}%) blur(${blurss}px)` ;
}
function thisssss()
{
    document.querySelector(".preview-img img").style.filter=`brightness(${bri}%) saturate(${sat}%) invert(${inv}%) grayscale(${grays}%) blur(${blurss}px)`;
}
function bris()
{

    document.querySelector(".preview-img img").style.filter=`brightness(${bri}%) saturate(${sat}%) invert(${inv}%) grayscale(${grays}%)`;
    thisssss();
    /*document.querySelector(".preview-img img").style.filter=`brightness(${bri}%) saturate(${sat}%) invert(${inv}%) grayscale(${grays}%) blur(${blurss}px)`;
    */
   /* document.querySelector(".preview-img img").style.filter=`saturate(${sat}%)`;
    document.querySelector(".preview-img img").style.filter=`invert(${inv}%)`;
    document.querySelector(".preview-img img").style.filter=`grayscale(${grays}%)`;*/

}
/*function saturt()
{
    
}
function  invnn()
{
    
}
function   scalee()
{
    
    
}*/
function removeDisable()
{
    remDis.classList.remove("disable");
}
function ShowPic()
 {
    let ff = document.querySelector(".file-input").files[0];
    if(!ff)
    {
        return;
    }
    document.querySelector(".preview-img img").src=URL.createObjectURL(ff);
    document.querySelector(".preview-img img").addEventListener("load",removeDisable);
    

}

function funccd()
{
    document.querySelector(".filter .active").classList.remove("active");
    optio.classList.add("active");
}
document.querySelectorAll(".filter button").forEach(Kuchh=>
    {
        Kuchh.addEventListener("click",()=>
        {
            document.querySelector(".filter .active").classList.remove("active");
            Kuchh.classList.add("active");
            document.querySelector(".filter-info .name").innerText=Kuchh.innerText;
            if (Kuchh.id === "brightness")
            {
                document.querySelector(".slider input").value= bri;
                ChangeSlidVal.innerText=`${bri}%`;

            }
            else  if (Kuchh.id === "saturation")
            {
                document.querySelector(".slider input").value= sat;
                ChangeSlidVal.innerText=`${sat}%`;

            }
            else  if (Kuchh.id === "inversion")
            {
                document.querySelector(".slider input").value= inv;
                ChangeSlidVal.innerText=`${inv}%`;

            }
            else  if (Kuchh.id === "grayscale")
            {
                document.querySelector(".slider input").value= grays;
                ChangeSlidVal.innerText=`${grays}%`;

            }
        });
    });
    function funcc()
{
    document.querySelector(".filter .active").classList.remove("active");
    optio.classList.add("active");
}
function ss()
{
    transform: rotate(90);
}
function Newsm()
{
    
    document.querySelector(".filter-infos .value").innerText= `${document.querySelector(".sliderr input").value}px`;
    blurss= document.querySelector(".sliderr input").value;

    /*document.querySelector(".sliderr input").value= blurss;
    document.querySelector(".filter-infos .value").innerText=`${blurss}px`;*/
    document.querySelector(".preview-img img").style.filter=`blur(${blurss}px)`;
    

    
}

function Newrt()
{
    
    document.querySelector(".filter-infoss .value").innerText= `${document.querySelector(".sliderrs input").value}deg`;
    roateeee= document.querySelector(".sliderrs input").value;

    /*document.querySelector(".sliderrs input").value= roateeee;
    document.querySelector(".filter-infoss .value").innerText=`${roateeee}px`;*/
    document.getElementById("leftss").style.transform="rotate("+roateeee+"deg)";

    /*document.querySelector(".preview-img img").style.filter=`rotate(${roateeee}deg)`;*/

    
}
function Newsp()
{
    
    document.querySelector(".filter-infosss .value").innerText= `${document.querySelector(".sliderrss input").value}`;
    spp= document.querySelector(".sliderrss input").value;

    /*document.querySelector(".sliderrss input").value= blurss;
    document.querySelector(".filter-infosss .value").innerText=`${blurss}px`;*/
    document.querySelector(".preview-img img").style.filter=`sepia(${spp})`;

    
}

function Newfp()
{
    
    document.querySelector(".filter-infossss .value").innerText= `${document.querySelector(".sliderrsss input").value}%`;
    sgsg= document.querySelector(".sliderrsss input").value;

    document.querySelector(".sliderrsss input").value= sgsg;
    document.querySelector(".filter-infossss .value").innerText=`${sgsg}%`;
    document.querySelector(".preview-img img").style.filter=`grayscale(${sgsg}%)`;
    

    
}

function dd()
{
    document.querySelector(".preview-img img").style.filter=`blur(${blurs}px) `;
}

   
function FiltUdp(params) 
{
    ChangeSlidVal.innerText= `${document.querySelector(".slider input").value}%`;
    const filtSS = document.querySelector(".filter .active");
    if(filtSS.id ===  "brightness")
    {
        bri= document.querySelector(".slider input").value;
    }
    else if(filtSS.id ==="saturation")
    {
        sat= document.querySelector(".slider input").value;
    }
    else if(filtSS.id==="inversion")
    {
        inv= document.querySelector(".slider input").value;
    }
    else if(filtSS.id==="grayscale")
    {
        grays= document.querySelector(".slider input").value;
    }
   /* bris();*/
   document.querySelector(".preview-img img").style.filter=`brightness(${bri}%) saturate(${sat}%) invert(${inv}%) grayscale(${grays}%) `;

    /*dd();-->*/
   
   /* saturt();
    invnn();
    scalee();*/


    
}
document.querySelector(".sliderr input").addEventListener("input",Newsm)
document.querySelector(".sliderrs input").addEventListener("input",Newrt)
document.querySelector(".sliderrss input").addEventListener("input",Newsp)
document.querySelector(".sliderrsss input").addEventListener("input",Newfp)

document.querySelector(".slider input").addEventListener("input",FiltUdp)
document.querySelector(".choose-img").addEventListener("click",()=>document.querySelector(".file-input").click());
document.querySelector(".file-input").addEventListener("change",ShowPic);

