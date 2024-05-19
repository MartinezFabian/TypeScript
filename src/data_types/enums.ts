enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(DaysOfWeek); // Output: {1: 'Lunes', 2: 'Martes', 3: 'Miercoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sabado', 7: 'Domingo'}

let day = DaysOfWeek.Wednesday;

console.log(day); // Output: 3

console.log(`Today is ${DaysOfWeek[day]}`); // Today is Wednesday
