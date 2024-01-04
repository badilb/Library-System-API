const XLSX = require('xlsx');
const fs = require('fs');

exports.getFile= () => {
    // Укажите путь к вашему Excel-файлу
    const filePath = 'C:\\Users\\admin\\OneDrive\\Рабочий стол\\fake_library_data.xlsx';

// Чтение файла
    const fileContent = fs.readFileSync("C:\\Users\\admin\\OneDrive\\Рабочий стол\\fake_library_data.xlsx");

// Преобразование в буфер
    const buffer = Buffer.from(fileContent);

// Чтение Excel-файла из буфера
    const workbook = XLSX.read(buffer, { type: 'buffer' });

// Получение списка листов
    const sheetNames = workbook.SheetNames;

// Чтение данных из первого листа
    const firstSheetName = sheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

// Преобразование данных в JSON
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    console.log(data);

    return data;

}

