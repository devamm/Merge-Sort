function split(array){
	let mid = Math.floor(array.length/2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);
	return [left, right];
}


function merge(arr1, arr2){
  let result = [];
  let ptr1 = 0;
  let ptr2 = 0
  while(ptr1 < arr1.length && ptr2 < arr2.length){
    if(arr1[ptr1] < arr2[ptr2]){
      result.push(arr1[ptr1]);
      ptr1++;
    } else {
      result.push(arr2[ptr2]);
      ptr2++;
    }
    //console.log(result);
  }
 //console.log(ptr1);
  if(ptr1 == arr1.length){
    result = result.concat(arr2.slice(ptr2));
    //console.log('appending: '+arr2.slice(ptr2));
  } else {
    result = result.concat(arr1.slice(ptr1));
  }
  return result;
} 



function mergeSort(array){
  if(array.length === 1){
    //console.log(array);
    
    return array;
  }
 
  let splitted = split(array);
  array = merge(mergeSort(splitted[0])  , mergeSort(splitted[1]));

  return array;

}
