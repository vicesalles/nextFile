const nextFile = require('./nextFile');
const filenames = require('./filenameSamples');


//Gets all samples from filenameSamples and runs the test

filenames.map((cam)=>{
  test(`${cam.name}: nextFile for ${cam.file} should be ${cam.solution}`,()=>{
    expect(nextFile(cam.file)).toBe(cam.solution);
  });
})