"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const runnersStudents = runners.filter((runners) => runners.student === true); //Me quedo solo con los estudiantes.
console.log(runnersStudents);

const runnersWinnerStudents = runnersStudents.reduce((prev, curr) => prev.time < curr.time ? prev : curr); //Utilizo la función anterior pero en esta ocasión cambio runners por runnersStudents
console.log(runnersWinnerStudents);
