const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now = new Date();
const day = days[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const period = hours >= 12 ? "PM" : "AM";
const adjustedHour = hours % 12 || 12;

console.log(`Today is : ${day}.`);
console.log(`Current time is : ${adjustedHour} ${period} : ${minutes} : ${seconds}`);
