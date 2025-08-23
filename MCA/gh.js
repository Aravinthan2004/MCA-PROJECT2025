const con = document.getElementById('container')
const arr=[
"/img/sm1.jpg",
"/img/sm2.png",
"/img/sm3.jpg",
"/img/sm4.jpg",
"/",
"/"
]

let i =0
let changeimg=()=>{
    if(i==arr.length)
    {
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    i++;
    }

let changeleft=()=>{
    i--;
    if(i==-1)
    {
        i= 5;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    } 

let click1=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
} 