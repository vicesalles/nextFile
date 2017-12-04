const nextFile = require('./nextFile');

//GOPRO
test('nextFile for GOPR9685 should be GOPR9686', () => {
    expect(nextFile('GOPR9685')).toBe('GOPR9686');
  });

test('nextFile for GOPR0099 should be GOPR0100', () => {
    expect(nextFile('GOPR0099')).toBe('GOPR0100');
  });