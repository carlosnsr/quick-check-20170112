// question 1
var first_array = [1, 2, 3]
var second_array = [4, 5, 6]

swap(first_array, second_array)

console.log(first_array) // [4, 5, 6]
console.log(second_array) // [1, 2, 3]

function swap(left, right) {
  let tmp_arr = []
  transfer_values(left, tmp_arr)
  transfer_values(right, left)
  transfer_values(tmp_arr, right)

  function transfer_values(src, dest) {
    while(src.length > 0) {
      dest.push(src.shift())
    }
  }
}
