import fs from 'fs/promises';

export async function printear(miniatura = false) {
  const file = `ascii-art${miniatura? " mini":""}.txt`
  try{
    return await fs.readFile(file, 'utf8');
  } catch (err){
    return ('Se rompio to:\n', err);
  }
}

console.log(await printear())