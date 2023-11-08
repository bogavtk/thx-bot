export function addProduct(event, card, count) {

    card.countProduct = count + 1
    console.log(card)

    event.stopPropagation();
    let dataArray = [];
    if (localStorage.getItem('items')) {
        dataArray = JSON.parse(localStorage.getItem('items'));
    }

    // Шаг 2: Проверяем, существует ли объект с таким же id
    const itemId = card.id;
    const isItemExist = dataArray.some(item => item.id === itemId);

    // Шаг 3: Если объект с таким id не существует, добавляем его в массив
    if (isItemExist) {
        const newDataArray = dataArray.filter( (item) => item.id !== itemId)
        newDataArray.push(card);
        // Шаг 4: Обновляем localStorage с обновленным массивом
        localStorage.setItem('items', JSON.stringify(newDataArray));
    } else {
        dataArray.push(card);
        localStorage.setItem('items', JSON.stringify(dataArray));
    }
}