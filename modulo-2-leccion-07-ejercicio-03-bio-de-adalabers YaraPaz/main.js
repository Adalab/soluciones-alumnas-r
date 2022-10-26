'use strict';

const adalaber1 = {
  name: 'Susana',
  years: 34,
  job: 'journalist',
  showBio: function () {
    console.log(
      'My name is' +
        ' ' +
        this.name +
        ' ' +
        ', I am' +
        ' ' +
        this.years +
        ' ' +
        'and I am' +
        ' ' +
        this.job
    );
  },
};

const adalaber2 = {
  name: 'Rocío',
  years: 25,
  job: 'actress',
  showBio: function () {
    console.log(
      'My name is' +
        ' ' +
        this.name +
        ' ' +
        ', I am' +
        ' ' +
        this.years +
        ' ' +
        'and I am a' +
        ' ' +
        this.job
    );
  },
};

console.log(adalaber1.showBio());
