function fact(num){
    if(num===0 || num===1){
        return 1;
    }
    else{
        return fact(num-1)*num;
    }
}

console.log(fact(4))