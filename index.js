
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

let array1 = [11,3,5,8,4];
console.log(array1);
function map(array, iteratee){
  let newArr = [];
    for(let i=0; i<array.length; i++){
        newArr.push(iteratee(array[i]));
    }
  console.log(newArr);
  return newArr;
}

//adds 5 to each item in array
function iteratee1(item){
  return item + 5;
}

map(array1, iteratee1); //output: [16,8,10,13,9]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray

function filter(array, iteratee){
    let newArr = [];
    for(let i=0; i<array.length; i++){
        if(iteratee2(array[i])){
            newArr.push(array[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

//function returns true if item is greater than 5
function iteratee2(item){
    return item > 5;
}

filter(array1, iteratee2); //output: [11,8]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
function find(theArray, fnc){
    for(let i=0; i<theArray.length; i++){
        if(fnc(theArray[i])){
            let firstItem = theArray[i];
            console.log(firstItem);
            return firstItem;
        }
        
    }
}

//function find the first item in an array that is less than 5
function fnc1(item){
    return item < 5;
}

find(array1, fnc1); //output: 3


//return the last item in theArray
function findLast(theArray){
    console.log(theArray[theArray.length-1]);
    return theArray[theArray.length-1];

}
findLast(array1); //output: 4


//return the first element of the array
function head(theArray){
    console.log(theArray[0]);
    return theArray[0];
}
head(array1); //output: 11


//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
function reverse(theArray){
    let newArr = [];
    for(i = theArray.length-1; i>=0; i--){
        newArr.push(theArray[i]);
    }
    console.log(newArr);
    return newArr;
}

reverse(array1); //output: [4,8,5,3,11]


//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){
    let newArr = [];
    for(let i=1; i<theArray.length; i++){
        newArr.push(theArray[i]);
    }
    console.log(newArr);
    return newArr;
}

tail(array1); //output: [3,5,8,4]

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
function sort(theArray){
    let swapped = false;
    for (let i=0; i<theArray.length; i++){
      if (theArray[i] > theArray[i+1]){
        let temp = theArray[i];
        theArray[i] = theArray[i+1];
        theArray[i+1] = temp;
        swapped = true;
      }
    }
   if(swapped){
      sort(theArray);
   }
  else{
    console.log(theArray);
    return theArray;
  }
}

sort(array1); //output: [3,4,5,8,11]

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
