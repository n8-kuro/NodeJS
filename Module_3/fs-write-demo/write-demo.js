import { writeFile, appendFile, readFile } from 'fs/promises';

console.log('1)создаем notes.txt');
await writeFile('notes.txt', 'Первая версия текста\n', 'utf-8');
console.log(await readFile('notes.txt', 'utf-8'));

console.log('2) Перезаписываем notes.txt');
await writeFile('notes.txt', 'Вторая версия файла(старая удалена)\n', 'utf-8');
console.log(await readFile('notes.txt', 'utf-8'));

console.log('3) Дописываем в конец файла');
await appendFile('notes.txt', 'Третья строка добавлена через appendFile\n', 'utf-8');
console.log(await readFile('notes.txt', 'utf-8'));

console.log('4) Записываем JSON-отчет');
const report = { savedAt: new Date().toISOString(), status: 'ok', lines: 2 };
await writeFile('report.json', JSON.stringify(report, null, 2), 'utf-8');

console.log('5) Пытаемся создать новый файл только если его нет');
try {
    await writeFile('unigue.txt', 'Создан один раз\n', { encoding: 'utf-8', flag: 'wx' });
    console.log('uniogue.txt создан');
} catch (err) {
    if (err.code === "EXIST") {
        console.log('unigue.txt уже существует, файл не перезаписан');
    }
    else {
        console.error('Ошишбка записи:', err.message);
    }
}
