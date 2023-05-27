function deepClone(array) {
  if (!Array.isArray(array)) {
    return array; 
  }
  
  const newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(deepClone(array[i])); 
  }
  
  return newArray;
}

// 

const array = [
  [
    ['some text', true, [1, 2, 3, 4, [10, 20]]],
  ],
  [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
  ],
];

const clonedArray = deepClone(array);
console.log(clonedArray);
