const sum = require('./sum');
const run = require('./calc');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});




test('3. Campingvogn', () => {
  expect(run(3,null, "08-12-2021", 599).map(t=>t.total)).toStrictEqual([ 339, 350, 380, 400, 430, 470 ]);
  expect(run(3,null, "08-12-2021", 602).map(t=>t.total)).toStrictEqual([ 412, 430, 460, 490, 520, 570 ]);
  expect(run(3,null, "08-12-2021", 1550).map(t=>t.total)).toStrictEqual([ 1344, 1390, 1480, 1570, 1680, 1840 ]);
  expect(run(3,null, "08-12-2021", 2002).map(t=>t.total)).toStrictEqual([ 806.4, 840, 890, 950, 1010, 1110 ]);
});
