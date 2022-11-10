'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const students = runners.filter((student) => student.student === true);

const studentsWinner = students.reduce((acc, student) => {
  if (student.time === 28) {
    const acc = {};
    acc.name = student.name;
    acc.time = student.time;
    // return acc;
  }
  return acc;
});

console.log(studentsWinner);
