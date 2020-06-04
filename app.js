let favMovie = (name = 'world', movie = 'The Room' ) => console.log(`my name is ${name} and my favorite movie is ${movie}`)

favMovie();


let getFirstName = (name) => {
    console.log(name.split(' ')[0])
}

let getFirstNameConcise = name => console.log(name.split(' ')[0])

getFirstNameConcise('Mister Hanky');
getFirstName('Justin Brooks');

let mathFunc = ( x, y ) => {
    return { exponent: x**y, product: x*y }
}

let math = mathFunc(2,3);

console.log(`2 to third power is ${math.exponent} and the product of 2 and 3 is ${math.product}`);

let randomFunc = (name, location, food) => {
    console.log(`${name} lives in ${location} and likes ${food}`);
}

let arr = ['Dawn', 'New York', 'beans'];

randomFunc(...arr);
