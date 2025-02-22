import path from 'node:path';
// import fs from 'node:fs';
// import fs from 'node:fs/promises';


// path.join('x', 'y', 'z')

const mainDir = process.cwd();
const folderDir = (path.join(mainDir, 'src', 'index.js'));

// path.parse(path)

path.parse(folderDir);
console.log(path.parse(folderDir));

// !!!!  синхронний варіант  !!!!!
// const fileContent1 = fs.readFileSync('path_to_file');



// !!!!!  aсинхронний варіант з колбеком  !!!!!!!!
// fs.readFile('path_to_file', (err, fileContent2) => {
//     if (err) {
//         return err.message;
//     }
//     return fileContent2;
// });



// !!!!! aсинхронний варіант з Promise !!!!
// const fileContent3 = await fs.readFile('path_to_file');





// const buffer = await fs.readFile('hello.txt');
// // припустимо, що в файлі hello.txt був текст Hello World!

// console.log(buffer.toString("utf-8"));
// /// Hello World!














// !!!!!!!!!!!! Reading file !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// (async () => {
//   try {
//     const data = await fs.readFile('file.txt', 'utf8');
//     console.log('Вміст файлу:', data);
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// })();




// !!!!!!!!!!!! Updating file !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// // Записуємо дані у файл 'output.txt'
// (async () => {
//   const data = 'Це дані, які ми записуємо у файл.';
//   try {
//     await fs.writeFile('output.txt', data, 'utf8');
//     console.log('Дані успішно записані у файл.');
//   } catch (err) {
//     console.error('Помилка запису у файл:', err);
//   }
// })();



// !!!!!!!!!!!! adding smth to the end of the file !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// // Додаємо дані до файлу 'output.txt'
// (async () => {
//   const data = 'Це дані, які ми додаємо до файлу.';
//   try {
//     await fs.appendFile('output.txt', data, 'utf8');
//     console.log('Дані успішно додані до файлу.');
//   } catch (err) {
//     console.error('Помилка додавання даних до файлу:', err);
//   }
// })();




// !!!!!!!!!!!! renaming or replacing the file !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// // Перейменовуємо або переміщуємо файл чи каталог зі шляху 'oldfile.txt' до 'newfile.txt'
// (async () => {
//   try {
//     await fs.rename('oldfile.txt', 'newfile.txt');
//     console.log('Файл або каталог успішно перейменовано або переміщено.');
//   } catch (err) {
//     console.error('Помилка перейменування або переміщення:', err);
//   }
// })();





// !!!!!!!!!!!! async deleting the file !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// // Видаляємо файл за шляхом 'file.txt'
// (async () => {
//   try {
//     await fs.unlink('file.txt');
//     console.log('Файл успішно видалено.');
//   } catch (err) {
//     console.error('Помилка видалення файлу:', err);
//   }
// })();







// !!!!!!!!!!!! async receiving the list of files and directories in current directory !!!!!!!!!!!!

// import fs from 'node:fs/promises';

// // Отримуємо список файлів і каталогів у поточному каталозі
// (async () => {
//   try {
//     const files = await fs.readdir('.');
//     console.log('Список файлів і каталогів:', files);
//   } catch (err) {
//     console.error('Помилка отримання списку файлів і каталогів:', err);
//   }
// })();







//  перевірка наявності папок

// import fs from 'node:fs/promises';

// // Перевіряємо доступність файлу або каталогу за вказаним шляхом
// (async () => {
//   const path = 'file.txt';
//   try {
//     await fs.access(path);
//     console.log(`Файл або каталог '${path}' доступний.`);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log(`Файл або каталог '${path}' не існує.`);
//     } else {
//       console.error(
//         `Помилка перевірки доступності файлу або каталогу '${path}':`,
//         err,
//       );
//     }
//   }
// })();
