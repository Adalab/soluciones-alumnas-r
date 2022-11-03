'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const students = runners.filter((student) => student.student === true);

students.sort((a, b) => {
  const timeA = a.time;
  const timeB = b.time;
  return timeA - timeB; //si ves que algo no funciona es porque estás intentando hacer las operaciones directamente sin guardarlas en variables
});

console.log(students);
