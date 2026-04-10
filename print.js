import fs from 'fs';

fs.readFile('ascii-art.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Se rompio to:\n', err);
    return;
  }
  console.clear();
  console.log(data);
});