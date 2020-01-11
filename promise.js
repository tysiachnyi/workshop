let drink = 1;

function shoot(arrow, headshot, fail){
    console.log('Вы сделали выстрел')
    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail("Вы промахунлись");
         }, 3000)
};

function win(){
    console.log('Вы победили');
    (drink == 1) ? buyBear() : giveMoney();
}

function buyBear(){
    console.log('Вам купили пива');
}

function giveMoney(){
    console.log('Вам дали деньги');
}


function loose(){
    console.log('Вы проиграли');
}
shoot({}, 
        function(mark){
            console.log('Вы попали в цель');
            win(mark, buyBear, giveMoney);
        },
        function(miss){
            console.log(miss);
            loose();
        }
    )