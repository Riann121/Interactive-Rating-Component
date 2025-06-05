
var nextVar;
for(var i = 0 ; i<5 ; i++){
    document.querySelectorAll('.listOfButton>button')[i].addEventListener('click',function(){
        var key = this.innerHTML;
        localStorage.setItem('rating',key);
        click(key);
    });
}

for(var j = 0 ; j<5 ; j++){
    document.querySelectorAll('.listOfButton>button')[j].addEventListener('mouseover',function(){
        hover(this.innerHTML);
    });    
    document.querySelectorAll('.listOfButton>button')[j].addEventListener('mouseout',function(){
        var inpt = this.innerHTML;
        document.querySelector('.a'+inpt).classList.remove('hover_change');
    });
    
}    

function click(inpt){
    for(var k = 1 ; k<=5 ; k++)
    {
        var tmp = document.querySelector('.a'+k).classList;
        if(tmp.value.includes('clr_change') === true){
            tmp.remove('clr_change');
        }
        else{
            continue;
        }
    }
    document.querySelector('.a'+inpt).classList.toggle ('clr_change') ;
    
}
function hover(inpt){
    document.querySelector('.a'+inpt).classList.add('hover_change');
}


//submit
document.querySelector('.submit_related').addEventListener('click',function(){
    window.location.href = 'thanks.html';
    
})

document.querySelector('.submit_related').addEventListener('mouseover',function(){
        document.querySelector('.submit_related').classList.add('hover_submit')
    });    
document.querySelector('#submit').addEventListener('mouseout',function(){
        document.querySelector('#submit').classList.remove('hover_submit')
    });
