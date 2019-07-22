
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

let arr = [2,9,1,2,3,4,5,13];

function addFive (i) {
    return i+5
}

function map(array, iteratee){
    let myNewArray = [];
    for (let i=0; i<array.length; i++) {
        let newVar = iteratee(array[i])
        myNewArray.push(newVar);
    }
    return myNewArray;
}

console.log(map(arr, addFive))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray

function removeThree (i) {
    if(i>=3) {
        return true
    }
}

function filter(array, iteratee) {
    let myNewArray = [];
    for (let i=0; i<array.length; i++) {
        let j = array[i];
        if (iteratee(array[i])) {
            myNewArray.push(j);
        }
    }
    return myNewArray;
}

console.log(filter(arr, removeThree))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null

function thingy(x) {
    if (x>4) {
        return true;
    }
}

function find(theArray, fnc){
    for (let i=0; i<theArray.length; i++) {
        if (fnc(theArray[i])) {
            console.log(theArray[i]);
            break;
        }
    }
}

find(arr, thingy);

//return the last item in theArray
function findLast(theArray){
    let lastOne = theArray[theArray.length-1];
    console.log(lastOne);
}

findLast(arr);

//return the first element of the array
function head(theArray){
    let firstOne = theArray[0]
    console.log(firstOne);
}

head(arr);

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array

newArr = [10, 15, 20, 25, 30, 35];

function reverse(theArray){
    let reversedArr = [];
    // while (theArray.length != 0) {
    //     reversedArr.push(theArray.pop());
    // }
    for (let i=theArray.length-1; i>=0; i--) {
        reversedArr.push(theArray[i])
    }
    console.log(reversedArr);
}

reverse(newArr);

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){
    let newArr = [];
    for (let i=1; i<theArray.length; i++) {
        newArr.push(theArray[i]);
    }
    console.log(newArr);
}

tail(newArr);

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray

let yarra = [23,4,6,56,8,13,98,3,4,78]

function sort(theArray){
    
    for (let i=0; i<theArray.length-1; i++) {
        while (theArray[i]>theArray[i+1]) {
            theArray.splice([i],2,theArray[i+1],theArray[i]);
            for (let j=1; j<theArray.length+1; j++) {
                if (theArray[i]>theArray[j]) {
                    i=0
                }
            }
        }
    }
    console.log(theArray);
}

sort(yarra);

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
