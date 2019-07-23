/* swith(expressio){ expresion === value1 !!!
 case value1: code1; break;
 case value2: code3; break;
 case value3: code3; break;
  ...
  default: code_default; break; - - - - daca nici una no mers
}*/
day = +prompt("Alege o zi ");  // numarul de ordena a zilei saptaminei
switch(day){                          /// alege varianta corecta (1 == 1)(2 == 2)
  case 1: alert("Luni");break;
  case 2: alert("Marti"); break;
  case 3: alert("Miercuri"); break;
  case 4: alert("Joi"); break;
  case 5: alert("Vineri"); break;
  case 6: alert("Sinbata"); break;
  case 7: alert("Duminica"); break;
  default: alert("Asa zi nu exista"); break;
  
}

// while --- sa avem atentie = unde Starteaa  conditia  si codul
/* for == while e ca while 
 cum se scrie -- for(# start; # conditia; # unde se opreste( #step )){

}
----
# do while
cum se scrie in cod
# start
do{
  #code
  #step
}while( #conditia )
*/


