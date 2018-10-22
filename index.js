

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a value
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop through the array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

const testingdArr =[1,2,3]
function testFunction(par1){
  return par1*10 ;

}

function map(array, iteratee){
  const myNewArray =[];
  for (let i=0; i< array.length;i++){
    console.log(array[i])

    const results = iteratee(array[i]);
    console.log(results)

    myNewArray.push(results)
    console.log(myNewArray)
  }
  return myNewArray;
}

//console.log(map(testingdArr,testFunction));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
 
function newTestingFucntion(par1){
  if(par1 >1){
    return true;
  } else{
    return false;
  }
}

function filter(array, iteratee){
  const bestArray =[];
  for (let i =0; i< array.length; i++){
    console.log(array[i])

    const results = iteratee(array[i]);// trying to remember why??
    console.log(results)
    if(results){
      bestArray.push(array[i])
    }
  }
  return bestArray
}

//console.log(filter(testingdArr,newTestingFucntion))



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null

function testingFunction3(par1){
   if(par1 >0) {
     return true;
   } else{
     return false;
   }
}

function find(theArray, fnc){
 for (let i =0; i< theArray.length;i++){
   const results = fnc(theArray[i]);
    console.log(results)

    if(results){
      return(theArray[i])
    } 
 }
return null;
}

//console.log(find(testingdArr, testingFunction3))


//return the last item in theArray
function findLast(theArray){
  console.log(theArray.pop());
}
//findLast(testingdArr);

//return the first element of the array
function head(theArray){
  console.log(theArray.shift());
}

//head(testingdArr);

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array


function reverse(theArray){
 for (let i = theArray.length-1; i<0; i--){
   console.log(theArray[i])
   console.log([i])
 }
}
reverse(testingdArr)
console.log(reverse(testingdArr));

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
// function tail(theArray){
//   for (let i =0; i< theArray.length; i++){
//    console.log(theArray[i])
//    console.log([i])
//  }
// }
// console.log(tail(theArray));



// implement the most basic sorting algorithm there is
// assume the array will always have numbers
// use a while loop to constantly loop theArray until it is sorted
// use a for loop to loop theArray
// look at the current item and the next item, compare them
// if the items are out of order, swap them
// initialize a variable that indicates if a swap had to be done, set it to false
// if a swap is done set it to true
// after each for loop check the variable, if true, continue the while loop
// if false return theArray

// NOTES in a function  the parameter is considered a place holder.
//inside the actual function i will use the place holder named
//when i call the function i will use the name of the actual function 
// inside of the function the name of the parameter refers  any possible array or object or nathung else that will be passed thru my actual function.

const thatNumberArray=[5,700,900,57,35,90,3, 500]
const thisNumberArray =[1,200,500,75,3]

function sort(theArray){
 let swap
  do{
    swap = false;
    for( let i =0; i < theArray.length; i++ ){
      // console.log(theArray[i]);
      let firstElement = theArray[i];
      let secondElement = theArray[i+1];

     if(secondElement) {
        if(firstElement< secondElement){
         
        }else{
          console.log('theArray[i] BEFORE SWAP', theArray[i])
          console.log('theArray[i+1] before swap', theArray[i+1])

          theArray[i]=secondElement;
          console.log('theArray[i]', theArray[i])
          
          theArray[i+1]=firstElement;
          console.log('theArray[i+1]', theArray[i+1])
          swap = true;
          //return
          // console.log('the array', theArray)
        }}
      } 
    
    }
  while(swap)
  console.log(swap)
  return theArray
}

console.log(sort(thisNumberArray));
console.log(sort(thatNumberArray));


// exports.map = map;
// exports.filter = filter;
// exports.find = find;
// exports.head = head;
// exports.reverse = reverse;
// exports.tail = tail;
// exports.sort = sort;
// exports.findLast = findLast;

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
