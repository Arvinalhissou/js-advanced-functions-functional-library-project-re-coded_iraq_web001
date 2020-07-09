<<<<<<< HEAD
const fi = (function() {
  return {
    libraryMethod: function() {
        return 'Start by rceading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
                      // Check if collection is an Array                  // collection is an Objecct
      let arrayCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

        // Iterates over a collection of elements
        for (let i = 0; i < arrayCopy.length; i++) {
          //passing each element in turn to a callback function
          callback(arrayCopy[i]) 
        } 
      console.log("collection", collection)
      // collection [ 1, 2, 3, 4 ]
      // collection { one: 1, two: 2, three: 3, four: 4 }
      // returns the original collection
      return collection
    },

    map: function(collection, callback) {
      // Produces a new array of values by mapping each value in collection through a transformation function (callback)
      let newArray = !(collection instanceof Array) ? Object.values(collection) :  collection.slice()
      // let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection) // Alternative
      let newArrayResult = []
      // iterate over collection of elements
      for (let i = 0; i < newArray.length; i++) {
        newArrayResult.push(callback(newArray[i]))    
      }
      // console.log("newArray", newArray)
      // newArray [ 1, 2, 3, 4 ]
      // console.log("newArrayResult", newArrayResult)
      // newArrayResult [ 3, 6, 9, 12 ]
      return newArrayResult
    },

    reduce: function(collection, callback, accumulator) {
      // set newArray
      let newArray = collection.slice()
        if (!accumulator) {
         
          accumulator = collection[0]
         
          newArray = collection.slice(1)
        }
      // for loop iterate over length of newArray
      for (let i = 0; i < newArray.length; i++) {
        // Set accumulator to callback of accumulator, currentValue, initialValue
        accumulator = callback(accumulator, newArray[i], newArray)
      }
      return accumulator
    },
     find: function(collection, predicate) {
      // set new array
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      // console.log("newArray", newArray)
      // newArray [
      //   -1, 4, 0, 1, 3,
      //    2, 3, 4, 5, 6
      // ]      
      // console.log("collection", collection)
      // collection [
      //   -1, 4, 0, 1, 3,
      //    2, 3, 4, 5, 6
      // ]

      // iterate over the newArray
      for (let i = 0; i < newArray.length; i++) {

        // console.log("predicate(newArray[i])", predicate(newArray[i]))
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        //       ✓ returns the value if found
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true

        if (predicate(newArray[i])) {
          return (newArray[i])
        }
      }
        return undefined
    },
     filter: function(collection, predicate) {
      // set newArray to collection if an array use .slice on collection : else use Object.values
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      // set save in variable
      let truthResults = []

      // console.log("newArray", newArray)
      // newArray [
      //   6, 11, 5, 12, 17,
      // 100,  9, 1, -8
      // ]

      // iterate over the newArray
      for (let i = 0; i < newArray.length; i++) {            
        if (predicate(newArray[i])) {
          // saves all elements that return truthy 
          truthResults.push(newArray[i])
        }
      }
      return truthResults
    },
     size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length

      // ALTERNATIVE
      // let newArray = (collection instanceof Array) ? collection.length : Object.keys(collection).length
      //     return newArray
    },
      first: function(array, stop = false) {
      // Conditional for stop
      if (stop) {
          // slice(begin, end)
          return array.slice(0, stop)
      } else {
          // Array within Array
          return array[0]
          // return array.slice(0) Does NOT work
          // return array.slice() Does NOT work
      }
    },
      last: function(array, stop = false) {
      if (stop) {
        // returns the last n elements of the collection when the second optional argument (n) is provided
        // return array.slice(Math.max(array.length - n, 0));  
        return array.slice(Math.max(array.length -stop, 0))
      } else {
          // returns the last element of the collection
          return array[array.length - 1];
      }
    },
 compact: function(array) {
      // returns a copy of the **array** with all falsy values removed. 
        // In JavaScript, _false_, _null_, _0_, _""_, _undefined_ and _NaN_ are all falsy.
        // does not modify the original array
        let filterArray = array.filter(Boolean);
          return filterArray
      },

    sortBy: function(array, callback) {
    // does not modify the original arrays
      let newArray = [...array]
        return newArray.sort(function(a, b) {
        // correctly sorts arrays of integers and arrays of strings
        // correctly sorts arrays of integers with non-standard sort
          return callback(a) - callback(b)
        })
    },

      // flatten: function(array, [shallow]) {
    flatten: function(array, shallow, newArray = []) { 
    // console.log("array", array)   
    // console.log("shallow", shallow)
    // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // shallow undefined
    // 1) correctly flattens a ludicrously nested array
    // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // console.log("newArray", newArray)
    // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]
    // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]

    if (shallow === true) {
      for (let i = 0; i < array.length; i++) {  
        // console.log("I am on the first level")
        if (Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) { 
          // console.log("I am on the second level")
          newArray.push(array[i][j])
          }
        } else {
          newArray.push(array[i])
        }
        }
    } else {
      for (let i = 0; i < array.length; i++) {  
      // console.log("I am on the first level")
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, newArray)
          } else {
            newArray.push(array[i])
          }
      }
    }
      return newArray
    },

    // HELPER
    uniqueSorted: function(array, interatee) {
    const sorted = [array[0]]
    for (let i = 1; i < array.length; i++) {
      if (sorted[i -1] !== array[i]) {
        sorted.push(array[i])
      }
       return sorted
    }
    },

    uniq: function(array, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(array, iteratee)
      } else if (!iteratee) {
         return Array.from(new Set(array))
       } else {
         const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
           }
        }
        return Array.from(uniqVals)
      }
    },

    // keys: function(Object) {
    keys: function(object) {
        // console.log("object", object) 
      // object { one: 1, two: 2, three: 3, four: 4 }
      // console.log("Object.getOwnPropertyNames(object)", Object.getOwnPropertyNames(object))
      // Object.getOwnPropertyNames(object) [ 'one', 'two', 'three', 'four' ]
      return (Object.getOwnPropertyNames(object))
    },

    // values: function(Object) {
    values: function(object) {
      // console.log("object", object) 
      // object { one: 1, two: 2, three: 3, four: 4 }
      // console.log("Object.values(object)", Object.values(object)); 
      // Object.values(object) [ 1, 2, 3, 4 ]
      return (Object.values(object));
    },

    functions: function(object) {
    // console.log("object", object) 
    // object { a: '', z: [Function: z], p: '', c: [Function: c], k: [Function: k] }
    // console.log(Object.getOwnPropertyNames(object))
    // [ 'a', 'z', 'p', 'c', 'k' ]
    // for (const property in object) {
    //   console.log(`${property}: ${object[property]}`);
    // a:
    // z: () => null
    // p:
    // c: () => null
    // k: () => null
    // }

      // set variable to empty array
      let functionNames = []
      // iterate over object key
      for (const key in object) {
        // check typeof object[key] has the text function
        if (typeof object[key] === "function") {
          // shovel key to functionNames array
          functionNames.push(key)
        }
      }
      return functionNames.sort()
   },
=======
   return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function() {
    // 1) calls alert with each element passed
    // 2) calls alert properly on object values
    // 3) returns the original collection
    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(element => 
          callback(element)
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element)
          }
        }
      }
      return collection
    },

    // 1) successfully returns a correctly populated array
    // // does not modify the original array
    //  2) successfully returns a correctly populated array from modified object values
    //  // does not modify the original object
    map: function(collection, callback) {
      let newCollection = []

      if (Array.isArray(collection)) {
        collection.forEach(element => 
          newCollection.push(callback(element))
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element))
          }
        }
      }
      return newCollection
    },

    // 1) returns the correct reduced value when passed an initial value
    // 2) returns the correct reduced value when not passed an initial value
    // 3) does not modify the original array
    reduce: function(collection, callback, acc) {
      let total = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      return total
    },

    // Looks through each value in the collection, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. 
    // The function returns as soon as it finds an acceptable element, and doesn't traverse the entire collection.
    find: function(collection, predicate) {
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // iterate over collection array until predicate true
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    // Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
    // 1) correctly filters for values that the callback evaluates as true
    filter: function(collection, predicate) {
      let truthValues = []
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // iterate over collection array and push predicate(collection[i]) values into new array
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          truthValues.push(collection[i])
        }
      }
      // return array of all the values that pass truth test (predicate)
      return truthValues
    },

    // Return the number of values in the collection
    // 1) correctly returns the size of the collection when an array is passed
    // 2) correctly returns the size of the collection (amount of keys) when an object is passed
    size: function(collection) {
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // Return the number of values in the collection
      return collection.length
    },

    // Returns the first element of an array. 
    // Passing n will return the first n elements of the array.
    // 1) returns the first element of the collection
    // 2) returns the first n elements of the collection when the second optional argument (n) is provided
    first: function(array, num) {
      let n = (!!num) ? num : 1
      let nArray = array.slice(0, n)

      return (!!num) ? nArray : nArray[0]
    },

    map: function() {
    // Returns the last element of an array. Passing n will return the last n elements of the array.
    // 1) returns the last element of the collection
    // 2) returns the last n elements of the collection when the second optional argument (n) is provided
    last: function(array, num) {
      let n = (!!num) ? -num : -1
      let nArray = array.slice(n)

      return (!!num) ? nArray : nArray[0]
    },

    reduce: function() {
    // Returns a copy of the array with all falsy values removed. 
    // In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
    compact: function(array) {
      let compactArray = []

      for (const i of array) {
        if (!!i) {
          compactArray.push(i)
        }
      }
      return compactArray
    },

    functions: function() {
    // Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. 
    // The values from the original array should be retained within the sorted copy, just in ascending order.
    // 1) correctly sorts arrays of integers and arrays of strings
    // 2) does not modify the original arrays
    // 3) correctly sorts arrays of integers with non-standard sort
    sortBy: function(array, callback) {
      let sortedArray = [...array]

      return sortedArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    // Produces a duplicate-free version of the array, using === to test object equality. 
    // In particular only the first occurrence of each value is kept.
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    // Retrieve all the names of the object's own enumerable properties.
    keys: function(object) {
      let keysArray = []

      for (const key in object) {
        keysArray.push(key) 
      }

      return keysArray
    },

    // Return all of the values of the object's own properties
    values: function(object) {
      let valuesArray = []

      for (const key in object) {
        valuesArray.push(object[key]) 
      }

      return valuesArray
    },

    // returns a sorted collection of the names of every method in an object
    functions: function(object) {
      let sortedArray = []

      for (const key in object) {
        if (typeof object[key] === 'function') {
          sortedArray.push(key)
        }
      }

      return sortedArray.sort()
    },
>>>>>>> 3f1f9bda0e26d4af0eb6cb42e6db41eb5e6ee4c1
  }
})()
