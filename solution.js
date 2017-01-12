// question 1
var first_array = [1, 2, 3]
var second_array = [4, 5, 6]

swap(first_array, second_array)

console.log(first_array) // [4, 5, 6]
console.log(second_array) // [1, 2, 3]

function swap(arr1, arr2) {
  let tmp_arr = []
  for( ; arr1.length > 0 ; ) {
    tmp_arr.push(arr1.shift())
  }

  for( ; arr2.length > 0 ; ) {
    arr1.push(arr2.shift())
  }

  for( ; tmp_arr.length > 0 ; ) {
    arr2.push(tmp_arr.shift())
  }
}
