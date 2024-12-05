//Ques:1 
//Takes an array of numbers.
//Filters out odd numbers from the array.
//Squares the remaining even numbers.
/*
let array=[1,2,5,4,7,8,6,3]
let len
for(let i=0;i<array.length;i++){
    if(array[i]%2!=0){
        console.log(array[i])
    }
    if(array[i]%2==0){
        array[i]=array[i]**2
        console.log(array[i])
    }
}


//Ques:2
//Write a program that counts the number of even and odd elements in a given array of integers. Use a for and for in loop both  loop for this task.

let array=[1,2,5,4,7,8,6,3,0,7,5]
let evenCount=0
let oddCount=0
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log("The number of even elements",evenCount)
console.log("The number of odd elements",oddCount)

let array=[1,2,5,4,7,8,6,3,0,7,5]
let evenCount=0
let oddCount=0
for(let index in array){
    if(array[index]%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log("The number of even elements",evenCount)
console.log("The number of odd elements",oddCount)

/*
//Ques:3
//Create a program that an  array of integers and returns a new array with all duplicate elements removed. Use nested loops  
let array=[1,2,3,2,4,5,9,1,6,4,7,4]
let array2=[]
for(let i=0; i<array.length ;i++){
    let isDuplicate = false
    for(let j=0; j<array2.length;j++){
        if(array[i]==array[j]){
            isDuplicate = true
            break
        }
    }
    if(isDuplicate==false){
        array2[array2.length]=array[i]
    }
}
console.log(array2)


//Ques:4
//Write a program to find the second largest number in an array. Avoid using built-in sorting methods.
let array = [10, 20, 5, 15, 30, 25];
let largest = array[0];
let secondLargest = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest; 
        largest = array[i];    
    } 
    else if (array[i] > secondLargest && array[i] !== largest) {
        secondLargest = array[i]; 
    }
}
console.log("Second Largest Number:", secondLargest);

//Ques:5
//Write a program that  an array of numbers and returns a new array where each element is multiplied by its index in the original array. (store all that values in a new array)
let array=[5,3,8,1,4,7,9,2]
let array2=[]
for(let i=0; i<array.length ;i++){
    array2[i]=array[i]*i
}
console.log("Original array is",array)
console.log("New array is",array2)


//Ques:6
//Write a program that merges two arrays into one without using built-in concatenation methods. Use a loop to append the elements of the second array to the first.
let array1=[1,2,8,9,4]
let array2=[8,7,5,6,3]
for(let i=0; i<array2.length ;i++){
    array1[array1.length]=array2[i]
}
console.log("The two merged array is",array1)
*/