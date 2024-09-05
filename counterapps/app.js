const count=document.getElementById('count-text');
const increment=document.getElementById('Increment');
const decrement=document.getElementById('decrement');
const Restart=document.getElementById('reset');

let counter=0;
function showdata(){



    count.textContent=counter;
}
increment.addEventListener('click',function(){


    counter++;
    showdata();
});
decrement.addEventListener('click',function(){

if(counter>0){
    counter--;
    showdata();
}
else{

decrement.style.backgroundColor="Red";
decrement.style.color="black";


}
    
});
Restart.addEventListener('click',function(){

counter=0;

showdata();
});