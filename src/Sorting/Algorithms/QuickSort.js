const partition = (array, l, r, res) => {
  let pivot = array[r].value;
  let i = l - 1;
  for (let j = l; j <= r - 1; ++j) {
    if (array[j].value < pivot) {
      ++i;
      res.push([i, j]);
      let t = array[j].value;
      array[j].value = array[i].value;
      array[i].value = t;
    }
  }
  res.push([i+1, r]);
  let t = array[i + 1].value;
  array[i + 1].value = array[r].value;
  array[r].value = t;
  return i + 1;
};

const quickSortUtil = (array, l, r, res) => {
  if (l >= r) return;
  let mid = partition(array, l, r, res);
  quickSortUtil(array, l, mid - 1, res);
  quickSortUtil(array, mid + 1, r, res);
};

export default function QuickSort(array) {
  let res = [];
  quickSortUtil(array, 0, array.length-1, res);
  return res;
}
