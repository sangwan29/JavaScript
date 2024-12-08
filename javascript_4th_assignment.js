function greet(greeting, punctuation) {
    return `${greeting}, ${this.name},${punctuation}`;
}

const person = { name: "Alice" };
console.log(greet.call(person,"Hello","!"))

// Use the `call` method to invoke `greet` with `person` as the context and arguments "Hello" and "!".


function sum(a, b, c) {
    return a + b + c + this.offset;
}

const context = { offset: 5 };
console.log(sum.apply(context,[1,2,3]))
// Use `apply` to calculate the sum with the context and an array of arguments `[1, 2, 3]`.

function describe(hobby, age) {
    return `${this.name} likes ${hobby} and is ${age} years old.`;
}

const user = { name: "John" };
console.log(describe.call(user,"cycling",25))
console.log(describe.apply(user,["cycling",25]))
// Use both `call` and `apply` to invoke `describe` with the context `user` and arguments "cycling" and 25.

const obj1 = { name: "David" };
const obj2 = { name: "Sarah" };

function sayName() {
    return this.name;
}
console.log(sayName.call(obj1))
console.log(sayName.apply(obj2))
// Use `call` to borrow `sayName` from `obj1` and apply it to `obj2`.

function calculateFinalPrice(tax, discount) {
    return this.price + tax - discount;
}

const product = { price: 100 };
console.log(calculateFinalPrice.call(product,20,10))
console.log(calculateFinalPrice.apply(product,[20,10]))
let product2=calculateFinalPrice.bind(product,20,10)
console.log(product2())
// Use `call`, `apply`, and `bind` to calculate the final price with tax = 20 and discount = 10.
