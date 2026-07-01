// Пользовательская функция для Задания 4 с оператором return
function calculateFormula(x, y) {
    var numerator = 2 * x + Math.sqrt(y) + (x - y);
    var denominator = y + (1/(Math.pow(x, 2) - 5));
    return numerator / denominator;
}