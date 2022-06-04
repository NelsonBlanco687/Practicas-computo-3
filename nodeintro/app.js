
    process.argv.forEach((index, val) =>{
        console.log(`${index}: ${val}`);
    });

console.log('titulo del proceso', process.title);
console.log('so', process.plataform);
console.log('version de node', process.version);