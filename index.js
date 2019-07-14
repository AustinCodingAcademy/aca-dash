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

function map(array, iteratee){
    let myNewArray=[];
    for(let i = 0; i<array.length;i++){
        let myIndex = array[i];
        let myValue = iteratee(myIndex);
        myNewArray.push(myValue);
    }
    return myNewArray;

}

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
    let myNewArray = [];
    for(let i = 0; i<array.length;i++){
        let index = array[i];
        if(iteratee(index) === true){
            myNewArray.push(index);
        }
    } return myNewArray;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
function find(theArray, fnc){
    for(let i=0; i<array.length;i++)
    if(fnc(array[i]) === true){
        return array[i];
    }else{
        return "Nothing returns true."
    }
}


//return the last item in theArray
function findLast(theArray){
    return theArray[theArray.length-1];
}

//return the first element of the array
function head(theArray){
    return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
function reverse(theArray){
    myNewArray = [];
    for(let i = theArray.length-1; i>=0; i--){
    myNewArray.push(theArray[i]);
    }
    return myNewArray;
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){
    myNewArray = [];
    for(let i = theArray.length[1]; i<theArray.length; i++){
        myNewArray.push(theArray[i]);
    }
    return myNewArray;
}

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
    for (let i = 0; i<theArray.length;i++){
        for(let j = i+1; j<theArray.length;j++){
          let holder;
          if(theArray[i] > theArray[j]){
            holder = theArray[i];
            theArray[i] = theArray[j];
            theArray[j] = holder;
          }
        }
      }
      return theArray;
}

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;

