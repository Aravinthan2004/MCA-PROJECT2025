const con = document.getElementById('container')
const arr=[
"/f1.jpg",
"/mission.jpg",
"/jurrasic.jpg",
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
        i= 3;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    } 

let click1=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
} 