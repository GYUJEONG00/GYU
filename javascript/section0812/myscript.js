/* myscript.js */


//두 수 사이의 합을 반환하시오 
function hap(a, b){ 
        //2,5 -> 2+3+4+5
        //5,2 -> 5+4+3+2
    let sum=0;

    if(a>b){
        let temp=a; a=b; b=temp;
    }
    for(let i=a; i<=b; i++){
        sum+=i;
    }
    return sum;
}
        
    

//두 수 사이의 차이를 반환하시오 
function diff(a, b){  //2,5 -> 3
                      //5,2 -> 3
    // let result=a-b;
    // result=Math.abs(result);
    // return result;
    return Math.abs(a-b);
}



// 윤년 평년을 반환하시오
function leap(year){ 
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}
