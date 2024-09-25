const currentDate = new Date();
const targetDate = new Date(currentDate.getFullYear() + 1, 0, 1);
const diff = targetDate.getTime() - currentDate.getTime();
const daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));
console.log(`Осталось ${daysRemaining} дня до Нового Года.`);