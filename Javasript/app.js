// //for of loop for arrays,  for in loop for objects.

// const myPrototype = {
//     "protoProperty" : "Non-enumerable property value."
// };

// const myObject = Object.create(myPrototype, {
//     myProperty : {
//         value : "Enumrable property value.",
//         enumerable : false
//     }
// });

// for (const propKey of Object.keys(myObject)){
//     console.log(propKey)
// };

// for (const propValue of Object.values(myObject)){
//     console.log(propValue)
// };

// for (const [propKey, propValue] of Object.entries(myObject)){
//     console.log(`${propKey} : ${propValue}`)
// };

// //Properties inherited from built-in constructors are non-enumerable, meaning that for…in… doesn't iterate through properties inherited from the Object constructor. However, any enumerable properties within the object's prototype chain are included:
// const myPrototypee = { "protoProperty" : true };
// const myObjectt = Object.create( myPrototype, {
//     myProperty: {
//     value: true,
//     enumerable: true
//     }
// });
// for ( const myKey in myObjectt ) {
//   const myValue = myObject[ myKey ];
//   console.log( `${ myKey } : ${ myValue }` );
// };


// //forEach

// //The callback function used with Array.forEach provides parameters containing the value of the current element, the index of the current element, and the array the forEach method was invoked on:
// const myArray = [true, false];
// myArray.forEach((myElement, i, originalArray) => {
//     console.log(i, myElement, originalArray)
// });

// const myMap = new Map([
//     ['myKey', true],
//     ['mySecondKey', false]
// ]);

// myMap.forEach((myValue, myKey, originalMap) => {
//     console.log(myValue, myKey, originalMap)
// });

// //Because Set doesn't have indexes or keys distinct from values, the second argument instead provides a redundant, ignorable value, strictly to keep the syntax consistent with the other forEach methods.
// const mySet = new Set([ true, false ]);
// mySet.forEach( ( myValue, myKey, originalSet ) => {
//   console.log( myValue, myKey, originalSet  );
// });


// //JavaScript's built-in iterable data structures (such as Array, Map, and Set) aren't iterators in and of themselves, but they do all inherit an iterator method, accessible using the @@iterator well-known Symbol, which returns an iterator object created from the iterable data structure:

// const myIterable = [1,2,3];
// const myIterator = myIterable[Symbol.iterator]();

// console.log(myIterator);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());


// //Generator function
// function* myGeneratorFunction(){
//     console.log("Hello from generator function");
//     yield "My first yielded value";
//     yield "My second yielded value";
// };

// const myGeneratorObject = myGeneratorFunction();

// console.log(myGeneratorObject.next());
// // console.log(myGeneratorObject.next())


// function* myGenerator(){
//     const firstYield = yield;
//     const secondYield = yield firstYield + 100;
//     yield secondYield + 10;
// };

// const myGenObj = myGenerator();

// console.log(myGenObj.next(1)); //Any argument passed to the first call to next() is ignored, because there's no previous yield expression to accept that value.
// console.log(myGenObj.next(10)); // Can be thought of as changing the value of the `firstYield` variable to `10
// console.log(myGenObj.next(20)); // Can be thought of as changing the value of the `secondYield` variable to `20, _not_ `20 + 100;`



//Promises
// const myPromise = new Promise( ( fulfill, reject ) => {
//     const myResult = true;
//     setTimeout(() => {
//         if(myResult == true){
//             // fulfill("This promise was succesful.")
//         }else{
//             reject(new Error("This promse has been rejected"))
//         }
//     }, 1000);
// } );

// //Promise chaining
// myPromise
//     .then( successfulResult => console.log(successfulResult) )
//     .catch( rejectedResult => console.log(rejectedResult) )
    // .finally( () => console.log("The promise has been settled!") );

//Concurrency
//Promise.all(), for example, creates a Promise that is fulfilled only if every Promise passed to that method is fulfilled:
// const firstPromise = new Promise((fulfilled, reject) => fulfilled("Successfull!"));
// const secondPromise = new Promise((fulfilled, reject) => fulfilled("Successfull!"));
// const thirdPromise = new Promise((fulfilled, reject) => fulfilled("Successfull!"));
// const failedPromise = new Promise((fulfilled, reject) => reject("Rejected!"));

// const successfullPromises = [firstPromise, secondPromise, thirdPromise];
// const oneFailedPromises = [failedPromise, ...successfullPromises]

// Promise.all(successfullPromises)
//     .then((allValues) => {
//         console.log(allValues)
//     })
//     .catch((failValue) => {
//         console.log(failValue)
//     });

// Promise.all(oneFailedPromises)
//     .then((allValues) => {
//         console.log(allValues)
//     })
//     .catch((failValue) => {
//         console.log(failValue)
//     })

//Promise.any() : Fulfilled if any one of the supplied Promises is fulfilled, and rejected only if all Promises are rejected.
//Promise.allSettled() : Fulfilled when Promises have settled, regardless of their result.
//Promise.race() : Fulfilled when Promises have settled, regardless of their result.

//async/await
// async function myFunc(){
//     return "This my returned value!!"
// };

// myFunc().then(myReturnedValue => console.log(myReturnedValue));


// async function myFunction(){
//     const myPromise = new Promise((fullfilled, reject) => {setTimeout(() => fullfilled("Successfull"), 1000)});
//     const myPromiseResult = await myPromise;
//     return myPromiseResult;
// }

// myFunction()
//     .then(myResult => console.log(myResult))
//     .catch(failedResult => console.log(failedResult))
// console.log("hi")


//new Keyword
function MyF(arg){
    this.value = arg;
    this.doubleValue = () => arg * 2;
};

const myObj = new MyF(10);
// console.log(myObj.value);


//this
function myThis(){
    console.log(this)
}
// console.log(myThis())

let myOBJ = {
    myValue : "This is myValue!! Boy",
    myMethod(){
        console.log(this.myValue)
    }
}

// myOBJ.myMethod()


let myObjct = {
    myMethod() { console.log( this ); },
    myArrowFunction: () => console.log( this ),
    myEnclosingMethod: function () {
        this.myArrowFunction = () => { console.log(this) };
    }
};

myObjct.myMethod()
myObjct.myArrowFunction()
myObjct.myEnclosingMethod()

//An illustrative, if slightly outdated, example is working with this within the callback function of a setTimeout, because this callback has a unique execution context:
var myObject = {
    myString: "This is my string.",
    myMethod() {
      console.log( this.myString );
    }
  };
myObject.myMethod();
  
setTimeout( myObject.myMethod, 100 );


let anotherFunction = function(){
    console.log(this.myValue)
}

let myO = {
    myValue : "This is string"
}
anotherFunction.call(myO) //call()

let objj = {
    myString : "STRING",
    myMethod(){
        console.log(this.myString)
    }
}

setTimeout(objj.myMethod.bind(objj), 1000) //Explicit binding overrides the this value provided by implicit binding.

let myFun = function(){
    console.log(this)
}

let num = 10

myFun.call(num)

// console.log(Object.hasOwn(objj, "myString"))

const myCustomPrototype = {
    "myInheritedProp" : 10
}

//now myCustomePrototype will be a prototype property
const newObj = Object.create(myCustomPrototype, {
    myProperty : { //This is own Property of myCustomPrototype Object
        value : "The new property value.",
        writable: true,
        configurable: true
    }
}) 
console.log("My newObj : ", newObj.myProperty, newObj.__proto__)


console.log({...newObj})

const myFirstObj = { myProperty : true };
const mySecondObj = { additionalProperty : true };
const myMergedObj = { ...myFirstObj, ...mySecondObj };

console.log(myMergedObj) 

//The spread operator creates "shallow" copies. This means it doesn't copy the original object's prototype and non-enumerable properties.
const myCustomPrototypee = { protoProp: "My prototype." };
const myObj1 = Object.create( myCustomPrototypee, {
    myEnumerableProp: {
        value: true,
        enumerable: true
    },
    myNonEnumerableProp: {
        value: false,
        enumerable: false
    }
});
const myNewObj = { ...myObj1 };
console.log(myObj1)
//output :
//> Object { myEnumerableProp: true, … }
// myEnumerableProp: true
// myNonEnumerableProp: false
// <prototype>: Object { protoProp: "My prototype." }

console.log(myNewObj)
// output
// Object { myEnumerableProp: true }
//     myEnumerableProp: true
//     <prototype>: Object { … }


///MAP
//The first element in each of these two-element data structures becomes the key, while the second becomes the value associated with that key.
// a Map object differs from an object literal in that both the values and the keys can take any data type and value
//Keys in a Map are unique, meaning that setting an identical key overwrites the previously stored key-value pair:
const myMap = new Map([
    [ "myKey", "A string value" ],
    [ "mySecondKey", 500 ],
    [ "myThirdKey", true ]
])
myMap.set("myKey", "myValue") //Value of "myKey" is changed to "myValue"
myMap.get("myKey")
myMap.delete("myKey")

console.log(myMap)


//SET
//A Set is an iterable collection of unique values somewhat similar to an array, though a Set can only contain unique values. As with a Map, iterating over a Set preserves the order elements were added to it.
const mySet = new Set([ 1, 2, 3 ]);
const mySet2 = new Set()
mySet2.add( "My value." );
mySet2.has( "My value." );
// mySet2.delete( "My value." );
console.log(mySet2)

//Creating set from array
const myArray = Array.from( mySet2 );


//Classes
class MyClass{
    constructor(param){
        console.log(param)
        this.property = param
    }
}

const classInstance = new MyClass("A Class Instance!")

let classExpression = class{  //Class Expression
    constructor(prop){
        this.prop = prop
    }
}

function classMaker(){
    return class{
        constructor(val){
            this.val = val
        }
    }
}

let MyVarible = classMaker()

//Can redefine class with class expression
let NewClassExpression = class NewClass{}

NewClassExpression = class OtherClass{ 
    constructor(string){
        this.prop = string
    }
}
// As seen when the constructor() method is omitted in the context of a child class, JavaScript's implicit constructor calls the parent constructor along with the same set of arguments. However, if there's a constructor in the subclass, it must first call super() along with any necessary arguments before referencing this.
class ParentClass{
    constructor(myValue, myPassedValue){
        this.prop = myValue
        this.anotherProp = myPassedValue
    }
    classMethod(){
        console.log(`Value is : ${this.prop}`)
    }
    anotherMethod(){
        console.log("Another Method")
    }

    //setter
    set doubleValue(newValue){
        this.prop = newValue + 30
    }

    get currentValue(){
        console.log("Current value of prop : ", this.prop)
    }
}
class ChildClass extends ParentClass{
    constructor(myPassedValue){
        super(myPassedValue)
        this.modifiedValue = myPassedValue + 20
    }
    classMethod() {
        //"super" keyword
        super.anotherMethod()
        console.log( `The value was '${ this.instanceProp },' and its type was '${ typeof this.instanceProp }.'`)
    }
}

const myParentClassInstance = new MyClass( "My string." );
const mySubclassInstance = new ChildClass( 100 );

myParentClassInstance.doubleValue = 20
console.log(myParentClassInstance.currentValue)



class Another{
    myResult = false //class field

    // Private fields are tightly scoped to the body of the class that contains them, meaning that even child classes can't access private fields associated with a parent class
    #myPrivateField = true //Private field
    #myPrivateMethod(){} //Private method

    //Static fields : Static fields and methods are members of a class itself, not members of the instances of that class. Because of this, static fields provide a central point for data that won't be unique to each instance of a class, but that those instances might need to reference—for example, shared configuration information.
    static myStaticField = true
    static myStaticMethod(){}

    anotherFunc(){
        console.log("Static field : ", this.myStaticField)
    }

    set setValue(myValue){ //setter
        this.myResult = myValue
        this.#myPrivateField = myValue
    }
}

//Can't access tatic properties from an instance of their class, but they're available on the class constructor:
//Can't do newInstance.myStaticField -> Gives Error
const newInstance = new Another()
newInstance.setValue = true //this is how we pass param to setter method class
console.log("New Instance of another clasee : ", newInstance)


//They're not technically required, but using static methods is best practice for creating utilities to work with instances of a class. Examples of this might include a static method dedicated to sorting instances of a class, or a static factory method that contains any necessary setup for creating an instance of a class and then returns the class instance:
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    static fromObject(myObject){
        return new User(myObject.name, myObject.email ?? "Omitted")
    }
}
const userObject = {
    "name" : "My Name",
    "email" : "my@email.address"
};
const secondUserObject = {
    "name" : "My Name"
};

const firstUser = User.fromObject( userObject );
const secondUser = User.fromObject( secondUserObject );

console.log(firstUser)

//a string literal has no methods of its own, but you can call the .toUpperCase() method on it thanks to the corresponding String object wrapper:
console.log("this is lower".toUpperCase()) //This is called prototypal inheritance—inheriting properties and methods from a value's corresponding constructor.




//Prototype : In addition to its own particular properties, any JavaScript object has an internal property which is a link (known as a reference) to another object called its prototype. When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object.

const myOb = {
    myProp : 2
}

//create another object using myOb as a prototype
const another = Object.create(myOb)

//create yetAnother using "another" object as a prototype
const yetAnother = Object.create(another)

console.log(yetAnother.myProp) // output : 2


//Rpg objects
class Character{
    constructor(name, health, strength){
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0 // XP is always zero for new characters
    }

    //Attack a target
    attack(target){
        if (this.health > 0){
            const damage = this.strength
            console.log( `${this.name} attacks ${target.name} and causes ${damage} damage points`)

            target.health -= damage

            if(target.health > 0){
                console.log(`${target.name} has ${target.health} health points left`);
            }else{
                target.health = 0
                const bonusXp = 10
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXp} experience points`)
                this.xp += bonusXp
            }
        }
        else{
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }

    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this
          .strength} as strength and ${this.xp} XP points`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());



//Discover Functional Programming
const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
];

// imperative programming : In this paradigm, the programmer gives orders to the computer through a series of statements that modify the program state. Imperative programming focuses on describing how a program operates. In imperative programming, the state can be modified anywhere in the source code. This is convenient, but can also lead to nasty bugs and maintenance headaches. As a program grows in size and complexity, it becomes easier for the programmer to mutate a part of the state by mistake and harder to monitor state modifications.


//Pure functions : Its outputs depend solely on its inputs and It has no side effect. Side effect is a change in program state or an interaction with the outside world. A database access or a console.log() statement are examples of side effects. By design, a pure function is independent from the program state and must not access it. Such a function must accept parameters in order to do something useful. The only way for a function without parameters to be pure is to return a constant value.

const title = movies => {
    // const titles = []
    // for (const movie of movies){
    //     title.push(movie.title)
    // }

    // return titles

    //other way-----
    return movies.map(movie => movie.title) //map returns array
}

const nolanMovies = movies => { //here we are not directly access state but using a parameter
    // const nolanMovies = []
    // for (const movie of movies){
    //     if(movie.director === "Christopher Nolan"){
    //         nolanMovies.push(movie)
    //     }
    // }

    // return nolanMovies

    //other way-----------
    // Return a new array containing only movies by Christopher Nolan
    return movies.filter(movie => movie.director === "Christopher Nolan");
}

const bestTitles = movies => {
    const bestTitles = [];
    for (const movie of movies) {
      if (movie.imdbRating >= 7.5) {
        bestTitles.push(movie.title);
      }
    }
    return bestTitles;
}

const averageRating = movies => {
    let ratingSum = 0;
    for (const movie of movies) {
      ratingSum += movie.imdbRating;
    }
    return ratingSum / movies.length;
};