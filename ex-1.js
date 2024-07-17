function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  let index = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (students[middle] === searchStudent) {
      index = middle;
      break;
    } else if (students[middle] < searchStudent) {
      left = middle + 1;
    } else if (students[middle] > searchStudent) {
      right = middle - 1;
    }
  }
  return index;
}

const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
console.log(findStudentIndex(students, "Isaac"));

// ตอบคำถามตรงนี้จ้า
//O(log n)
