//task-1 Finding Leap Year
function isLeapYear(year:number):boolean{
        if(year % 400===0 ){
            return true
         }
         if(year%100 === 0)
            return false
        if(year%4 === 0)
            return false
}
let a= prompt("Enter a year");
console.log(isLeapYear(+a))

//task-2 String Reversal
function stringReversal(str:string):string{
        let arr = str.split("");
        arr= arr.reverse();
        let ans = arr.join('');
        return ans;
}

let str = prompt("Enter Any String")
console.log(stringReversal(str));
