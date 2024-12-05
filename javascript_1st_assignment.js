//Ques:1. Write a program to print all natural numbers from 1 to n. – using whileloop
let n=10
let number=1
while(number<=n){
    console.log(number)
    number++
}

//2. Write a program to print all natural numbers in reverse (from n to 1). –using while loop
let num=10
let b=num
while(b>=1){
    console.log(b)
    b--
}


//3. Write a program to print all alphabets from a to z. – using while loop
let a=97
while(a<=122){
    console.log(String.fromCharCode(a))    
    a++
}

//4. Write a program to print all even numbers between 1 to 100. – using while loop   
let i=1
while(i<=100){
    if(i%2==0){
        console.log(i)
    }
    i++
}
 

//5. Write a program to find the sum of all odd numbers between 1 to n.
let sum=0
for(let i=1;i<=100;i++){
    if(i%2!=0){
        sum=sum+i
    }
}
console.log("The sum of odd numbers is",sum)
