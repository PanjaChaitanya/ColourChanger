const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["red","blue","green","pink","yellow","orange","indigo"];
body.backgroundcolor="white";

document.querySelector("button").addEventListener("click",function()
{
    const i = parseInt(Math.random() * color.length);
    body.style.backgroundColor=color[i];

});