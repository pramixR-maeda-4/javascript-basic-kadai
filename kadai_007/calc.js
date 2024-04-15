// 倍数 : multiple
const multiple_3 = "3の倍数です";
const multiple_5 = "5の倍数です";
const multiple_3_5 = "3と5の倍数です";
const multiple_num_3 = 3;
const multiple_num_5 = 5;
const multiple_num_3_5 = 15;

let num = 150;

if (num % multiple_num_3_5 == 0) {
  console.log(multiple_3_5);
} else if (num % multiple_num_5 == 0) {
  console.log(multiple_5);
} else if (num % multiple_num_3 == 0) {
  console.log(multiple_3);
} else {
  console.log(num);
}
