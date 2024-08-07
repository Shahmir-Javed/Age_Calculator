let userInput = document.querySelector("#date");
let button = document.querySelector("#btn");
const result = document.querySelector("#result");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  // Seperating date, month and year from the user input
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  console.log(d1, m1, y1);

  let today = new Date();
  // seperating date, month and year from the current date
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
  console.log(d2, m2, y2);

  let d3, m3, y3;
// calculation for years
  y3 = y2 - y1;
// calculation for months
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
// calculation for days
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log(y3, m3, d3);
 
result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and<span> ${d3}</span> days old.`;
 
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

button.addEventListener("click", calculateAge);
