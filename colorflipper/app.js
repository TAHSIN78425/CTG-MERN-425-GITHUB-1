const btn=document.getElementById('change-color');
btn.addEventListener('click',function(){

const newcolor=getrandomcolor();
document.body.style.backgroundColor=newcolor;
const colorvalue=document.getElementById('color-value').textContent=newcolor;


});

function getrandomcolor(){
const Letter="123456789ABCDEF"
let color="#";
for(let i=0;i<6;i++){

color+=Letter[Math.floor(Math.random()*16)];
console.log(color);


}
return color;
};