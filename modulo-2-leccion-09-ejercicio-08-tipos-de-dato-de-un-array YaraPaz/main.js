'use strict';

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

for (i = 0; i < items.length; i++) {
  console.log(
    `El dato ${items[i]} está en la posición ${i} y es de tipo ${typeof items[
      i
    ]}`
  );
}
