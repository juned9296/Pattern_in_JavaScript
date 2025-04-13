
let row = 5;

for (let i=1; i<=row; i++){
    str = "";
   
    // pahle space 
    for( let j=1; j<=row-i; j++){
        str += " ";
    }

    // fir
    for(let k =1; k<=i; k++){
        str += "#";
    }
    console.log(str);
}