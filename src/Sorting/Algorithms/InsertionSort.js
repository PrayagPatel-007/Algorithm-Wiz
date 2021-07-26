export default function InsertionSort(array) {
  let temp = [];
  for (let i = 1; i < array.length; ++i) {
    let j = i;
    while (j >= 1 && array[j].value < array[j - 1].value) {
      temp.push([j, j-1]);
      let t = array[j].value;
      array[j].value = array[j - 1].value;
      array[j - 1].value = t;
      --j;
    }
  }
  return temp;
}
