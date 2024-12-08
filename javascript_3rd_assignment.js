//Create a function greet that takes two positional arguments: name and greeting, and returns a personalized greeting message.
function greet(name,greeting){
    return name + " \n"+greeting;
}
console.log(greet("Alice","welcome"));


//Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.
function calculatePrice(price, taxRate = 0.05) {
    let total= price + (price * taxRate);
    return total;
}
console.log(calculatePrice(100,0.2)); // Output: 105

//Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.
function sumNumbers(...numbers) {
    let sum=0
    let i
    for(i of numbers){
        sum=sum+i
    }
    return sum
}
console.log(sumNumbers(10,50,85,98,80))

//Create a function introduce that takes three positional arguments: firstName, lastName, and age, and returns a sentence introducing the person.
function introduce(firstName,lastName,age){
    return firstName,lastName,age
}
console.log("Divya","Sangwan",19)

//Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat".
function makeSandwich(breadType="whole wheat",filling){
    return breadType + "bread with " + filling
}
console.log(makeSandwich("wheat","potato"))


//Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.
function multiply(x,y=1){
    let multi=x*y
    return multi
}
console.log(multiply(5,4))


//Write a function getTotalPrice that takes an unknown number of prices as arguments using the rest operator and returns the total price.
function getTotalPrice(...prices) {
    let total_price = 0;
    let i
    for(i of prices){
        total_price = total_price + i
    }
    return total_price
}
console.log(getTotalPrice(20,35,55,44,52,64))


//Create a function buildSentence that accepts three arguments: subject, verb, and object. If no object is passed, it should default to "something".
function buildSentence(subject,verb,object="something"){
    return subject + " " + verb + " " + object
}
console.log(buildSentence("My father","is my","everything"))


//Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.
function addNumbers(...numbers) {   
    let sum = 0;
    let i
    for (i of numbers) {
        sum=sum+i
    }
    return sum 
}        
console.log(addNumbers(25,21,24,55,64))                                                                                                                               


//Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".
function displayInfo(Name, age, city = "Unknown") {
    return Name+" "+age+" "+city
}
console.log(displayInfo("Divya",19,"Jaipur"))


//Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".
function orderPizza(size, topping = "cheese") {
    return size + " pizza with " + topping
}
console.log(orderPizza("large","cheese and vegetable"))


//Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator.
function makeCoffee(type,...ingredients) {
    let coffee = type 
    return coffee
}
console.log(makeCoffee("cold coffee"))


//Write a function introducePerson that takes two positional arguments name and profession, with profession defaulting to "Student".
function introducePerson(name,profession = "Student") {
    return name + " is a " + profession
}
console.log(introducePerson("Divya"))


//Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.
function findMax(...numbers) {
    let max = numbers[0]
    for (let i of numbers) {
        if (i > max) {
            max = i
        }
    }
    return max
}
console.log(findMax(18,15,84,97,54))


//Write a function buildPerson that takes two arguments: firstName and lastName, and returns an object representing the person.
function buildPerson(firstName,lastName) {
    return firstName+" "+lastName
}
console.log(buildPerson("Divya","Sangwan"))


//Create an object car with primitive properties: brand, model, and year.
let car = {
    brand: "Mahindra",
    model: "Thar",
    year: 2024
}
console.log(car)


//Create an object book with non-primitive properties: title, author, and reviews (where reviews is an array of review objects).
let book = {
    title: "Bharat ki khoj",
    author: "Jwaharlal Nehru",
    reviews: [
        { rating: 5, comment: "Best book ever!" },
        { rating: 4, comment: "Good book" },
        { rating: 3, comment: "Okay book" }
    ]
}
console.log(book)


//Create an object laptop with both primitive (brand, price) and non-primitive (features - an array) properties.
let laptop = {
    brand:"hp",
    price: 50000,
    features: [
        { ram: 16, storage: 512 },
        { ram: 8, storage: 256 },
        { ram: 32, storage: 1024 }
    ]
}
console.log(laptop)



//Create an object person with a method greet that prints a greeting message using the name property.
let person = {
    name: "Divya",
    age: 19,
    greet: function(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age+" ")
        }
    }
            person.greet()
            console.log(person)


//Write a function buildTeam that takes an unknown number of team members using the rest operator and returns an array of their names.
function buildTeam(...teamMembers) {
    return teamMembers
}
console.log(buildTeam("Divya", "Rahul", "Amit"))


//Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.
function discountPrice(price, discountPercentage = 10) {
    let discount= price - (price * discountPercentage / 100)
    return discount
}
console.log(discountPrice(100, 20)) 



//Write a function describePet that accepts two arguments: petName and petType. If no petType is provided, it should default to "dog".
function describePet(petName, petType = "dog") {
    return petName+" is a "+petType
}
console.log(describePet("Rony"))


//Create a function calculateArea that accepts two arguments: length and width. If width is not provided, it should default to the same value as length (for a square).
function calculateArea(length, width = length) {
    return length * width
}
console.log(calculateArea(8))


//Write a function joinStrings that accepts an unknown number of strings using the rest operator and returns them concatenated into one string.
function joinStrings(...strings) {
    return strings

}
console.log(joinStrings("Hello","World","How are you"))


//Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided, it should default to "user".
function createUserProfile(name, email, role = "user") {
    return name+" "+email+" "+ role
}
console.log(createUserProfile("Divya", "divya@gmail.com","Java Developer Intern"))  


//Write a function divideNumbers that takes two arguments: a and b, with b defaulting to 1 if not provided.
function divideNumbers(a, b = 1) {
    return a / b
}
console.log(divideNumbers(10,2)) 


//Create a function combineArrays that accepts an unknown number of arrays using the rest operator and returns one combined array.
function combineArrays(...arrays) {
}

//Write a function introduceEmployee that takes two positional arguments: employeeName and position, with position defaulting to "intern".
function introduceEmployee(employeeName, position = "intern") {
    return employeeName + " is a " + position
}
console.log(introduceEmployee("Divya"))


//Create a function findAverage that takes an unknown number of scores using the rest operator and returns the average score.
function findAverage(...scores) {
    let sum = 0;
    for (let i of scores) {
        sum=sum+i
    }
    let average = sum / scores.length;
    return average
}
console.log(findAverage(8, 28, 55, 44, 52))


//Write a function buildCar that accepts three arguments: brand, model, and year. If no year is provided, it should default to the current year.
function buildCar(brand, model, year=2024){
    return brand + " " + model + " " + year
}
console.log(buildCar("Mahindra","Thar",2023))
