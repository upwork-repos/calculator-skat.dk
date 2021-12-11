const {
  run,
  exceptions
} = require('./calc');


test('Validation', () => {
  let thrownError;
  try { run(0,null, "08-12-2021", 499); } catch(error) { thrownError = error; }
  expect(thrownError).toEqual(exceptions.vehicleTypeRequired);
 
});

test('1. Personbil', () => {
  
  expect(run(1,1, "02-01-1885", 499).map(t=>[t.total, t.weightTax])).toEqual([ [265,1060], [280,1100], [300,1170], [310,1240], [330,1320], [370,1460] ]);
  expect(run(1,1, "02-01-1885", 700).map(t=>[t.total, t.weightTax])).toEqual([ [322.5,1290], [340,1330], [360,1420], [380,1510], [410,1610], [450,1770] ]);
  expect(run(1,1, "02-01-1885", 1550).map(t=>[t.total, t.weightTax])).toEqual([ [1050,4200], [1090, 4330], [ 1160, 4610 ], [1230, 4910], [1310, 5230], [1440, 5750] ]);
  expect(run(1,1, "02-01-1885", 3000).map(t=>[t.total, t.weightTax])).toEqual([ [900,3600], [930, 3710], [ 990, 3950 ], [1060, 4210], [1120,4480], [1240,4930] ]);
  expect(run(1,1, "03-01-1997", 499).map(t=>[t.total, t.weightTax])).toEqual([ [1060,1060], [1100,1100], [1170,1170], [1240,1240], [1320,1320], [1460,1460] ]);

  expect(run(1,3, "03-01-1997", 499, true).map(t=>[t.compensationFee, t.weightTax, t.total])).toEqual([ [970,1060, 2030], [970, 1100, 2070], [970,1170, 2140], [970,1240, 2210], [970, 1320,2290], [970,1460, 2430] ]);
  // expect(run(1,3, "03-01-1997", 999, true).map(t=>[t.compensationFee, t.weightTax, t.total])).toEqual([ [1570,1760, 3330], [1570, 1820, 3390], [1570,1940,3510 ], [1570,2060, 3630], [1570, 2190,3760], [1570,2410, 3980] ]);
  
});


test('2. Trailer (Påhængskøretøj)', () => {
  expect(run(2,null, "08-12-2021", 499).map(t=>t.total)).toStrictEqual([ 0, 0, 0, 0, 0, 0 ]);
  expect(run(2,null, "08-12-2021", 599).map(t=>t.total)).toStrictEqual([ 150, 160, 170, 180, 190, 210 ]);
  expect(run(2,null, "08-12-2021", 1500).map(t=>t.total)).toStrictEqual([ 290,  300, 320, 340, 370, 400 ]);
  expect(run(2,null, "08-12-2021", 2500).map(t=>t.total)).toStrictEqual([ 360, 380, 400, 430, 450, 500 ]);
  expect(run(2,null, "08-12-2021", 2501).map(t=>t.total)).toStrictEqual([ 460, 480,  510,  540, 580, 630 ]);
  expect(run(2,null, "08-12-2021", 4000).map(t=>t.total)).toStrictEqual([ 560,  580, 620, 660, 700, 770 ]);
  expect(run(2,null, "08-12-2021", 14001)).toStrictEqual(null);
});


test('3. Campingvogn', () => {
  expect(run(3,null, "08-12-2021", 599).map(t=>t.total)).toStrictEqual([ 339, 350, 380, 400, 430, 470 ]);
  expect(run(3,null, "08-12-2021", 602).map(t=>t.total)).toStrictEqual([ 412, 430, 460, 490, 520, 570 ]);
  expect(run(3,null, "08-12-2021", 1550).map(t=>t.total)).toStrictEqual([ 1344, 1390, 1480, 1570, 1680, 1840 ]);
  expect(run(3,null, "08-12-2021", 2002).map(t=>t.total)).toStrictEqual([ 806.4, 840, 890, 950, 1010, 1110 ]);
});


test('4. Motorcykel', () => {
  expect(run(4,1, "08-12-2021").map(t=>t.total)).toStrictEqual([ 730, 760, 810, 860, 910, 1000 ]);
  expect(run(4,2, "08-12-2021").map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [660, 730, 1390], [660, 760, 1420], [660, 810, 1470], [660,860,1520], [660, 910, 1570], [660, 1000, 1660] ]);
});


test('5. Bus (ikke rutebiler)', () => {
  expect(run(5,2, "08-12-2021", 100, true, 2).map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [1130, 450, 1580], [1130, 470, 1600], [1130, 500, 1630], [1130,530,1660], [1130, 560, 1690], [1130, 620, 1750] ]);
  expect(run(5,2, "08-12-2021", 1900, true, 2).map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [1230, 810, 2040], [1230, 840, 2070], [1230, 890, 2120], [1230,950,2180], [1230, 1010, 2240], [1230, 1110, 2340] ]);
  expect(run(5,2, "08-12-2021", 7500, true, 2).map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [1230, 3640, 4870], [1230, 3750, 4980], [1230, 4000, 5230], [1230,4260,5490], [1230, 4530, 5760], [1230, 4990, 6220] ]);

  expect(run(5,2, "08-12-2021", 9100, true, 2).map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [4550, 1274, 5824], [4690, 1274, 5964], [5000, 1274, 6274], [5320,1274,6594], [5670, 1274, 6944], [6230, 1274, 7504] ]);
  
  expect(run(5,2, "08-12-2021", 19100, true, 2).map(t=>[t.compensationFee, t.weightTax, t.total])).toStrictEqual([ [9550, 2674, 12224], [9840, 2674, 12514], [10480, 2674, 13154], [11160,2674,13834], [11890, 2674, 14564], [13080, 2674, 15754] ]);


  expect(run(5,1, "08-12-2021", 100, true, 2).map(t=>t.total)).toStrictEqual([ 450, 470, 500, 530, 560, 620 ]);
  expect(run(5,1, "08-12-2021", 19100, true, 2).map(t=>t.total)).toStrictEqual([ 9550, 9840, 10480, 11160, 11890, 13080 ]);
 
});

  // expect(run(4,1, "08-12-2021", 1550).map(t=>t.total)).toStrictEqual([ 1344, 1390, 1480, 1570, 1680, 1840 ]);
  // expect(run(4,1, "08-12-2021", 2002).map(t=>t.total)).toStrictEqual([ 806.4, 840, 890, 950, 1010, 1110 ]);
