describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect (split([4,5,2,7,1,3,6,8])).toEqual([[4,5,2,7 ], [1,3,6,8]])
  });

   it('is able to split an array into two unequal length halves', function() {
    // your code here 
    expect (split([4,5,2,7,1,3,6,8,9])).toEqual([[4,5,2,7], [1,3,6,8,9]])
  });
});

describe('Merge Array function', function() {
  it('can merge 2 arrays', function() {
    // your code here 
    expect(merge([1,2,3,4], [5,6,7,8])).toEqual([1,2,3,4,5,6,7,8]);
    expect(merge([1,2,3,4,5], [6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(merge([1,2], [3,4,5,6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  
});

describe('Merge Sort', function() {
  it('can sort an array arrays', function() {
    // your code here 
    expect(mergeSort([8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8]);
    //expect(mergeSort([8,7,6,9,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9]);
    //expect(mergeSort([8])).toEqual([8]);
    
  });

  
});


