// DATELE INITIALE
food_1_name = "Mamaliga" 
food_1_price = 40
food_1_stoc = 2

food_2_name = "Zeama de casa " 
food_2_price = 50
food_2_stoc = 1

drink_1_name = "white wine"
drink_1_price = 100
drink_1_stoc = 10 

///CITEASCA OPTIUNEA ALEASA DE UTELIZATOR///
MENU = 
`
############
MENU
#############
1. ${food_1_name}            |price -- ${food_1_price}
2. ${food_2_name}  |price -- ${food_2_price}
3. ${drink_1_name}          |price -- ${drink_1_price}
choose>
`
//while----
option = prompt(MENU)
if(option=="1"){
    quantity = +prompt(`How many "${food_1_name}"do you want?`)
    if(food_1_name<=0){
        alert("wrong value")
    }
   else if(quantity>food_1_stoc){
        alert("stok")
    }else{
        cost = quantity * food_1_price
       answer = confirm(`option "${food_1_name}" x ${quantity} = ${cost}`)
       //false/true
    }
    ///
   
}
///CITEASCA OPTIUNEA ALEASA DE UTELIZATOR///
//while----
