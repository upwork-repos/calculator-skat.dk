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



