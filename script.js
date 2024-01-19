console.log('JS is running');

new Set([1,1,2,2,3,4])

/*
Returns a set with duplicates removed.
The key is automatically set and incremental.
The values will be the non-duplicate numbers in the 
passed in array.
{1, 2, 3, 4}
*/

// -------------------------------------------------------
// [...new Set("referee")].join("")

/*
This will iterate over the string and add the unique elements 
to a new set.
Next the remaining (unique) letters will be converted to 
an array using array literals and the spread object.
Next the array elements (unique letters) will be joined
back together, resulting in a string:
'ref'
*/

// -------------------------------------------------------

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/* 
This will return the map m which will first be populated
with a key value pair of an array as the key and true
as the value.
Next the map will be populated with another array as the
key, and false as the value.
m will be a set containing two key value pairs.
*/

// -------------------------------------------------------
// hasDuplicate

function hasDuplicate(arr) {
  let asSet = new Set(arr);
  if (asSet.size === arr.length){
    return false;
     }
  else {
    return true;
  }
}

// -------------------------------------------------------
// vowelCount

function vowelCount(str){
  const vowels = 'aeiou';
  str = str.toLowerCase();
  const letters = [...str];
  // Create an array of only the foundVowels
    const foundVowels = letters.filter(function(letter){
      return vowels.includes(letter)  })
  // create a map to store the counted vowels
    const vowelCount = new Map();
    // Iterate over the foundVowel array & update the count in the Map
  foundVowels.map(function(vow){
      if (vowelCount.has(vow)){
        vowelCount.set(vow, vowelCount.get(vow) +1);
      }
      // if the vowel is not in the Map already:
      else {
        vowelCount.set(vow,1);
      }
      })
      return vowelCount;
    }