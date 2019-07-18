//sea ships


ship = 5//cordonata vaporului ->
hp = 100// cita viata are vaporu
mine_1 = 2 //cordonata minei
mine_2 = 12
mine_3 = 22
//fiecare mina scade cite 55% din viata (hp)
// hp<=0--->Game over
// cind se afiseaza vaporul hp 50%+ W
                        //  hp 50%- w

direction = ""//directia aleasa de utilizator
while(direction != null){ // prompt cancel
    ///MUVING THE SHIP///
    if(direction == ">"){
        ship++
    }
     ///MUVING THE SHIP///
     if(direction == "<"){
        ship--
    }
    if(ship == mine){ // daca vaporucalca pe mina
     alert("Game over")
     break;          // se opreste ciclul
    }
      ///MUVING THE SHIP///

      ///afiseaza mapa
     sea = ""
     a=1
    while(a<=40){
    if(a==ship){
      sea+="W"
    }else{
     if(a==mine){
           sea+="x"
    }else{sea+="~"}    
    }
    a++               //1=2 pina la 10 se repeta
   } 

 direction=prompt(sea)
  /// 
}
/*
Math. --- rendom() ------ numere aleatorii 

x = Math.random()*40
Math.round(x)
*/