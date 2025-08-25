document.getElementById('doubleButton').addEventListener('click', async () => {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const number = parseFloat(numberInput.value, 10);
	
    if (isNaN(number)) {
        resultDiv.textContent = 'Пожалуйста, введите корректное число.';
        return;
    }

    const backendUrl = 'http://Doubler.somee.com/Doubler/api/Doubler/double'; 

    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: number }) 
        });

        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }

        const data = await response.json();
        resultDiv.textContent = `Результат: ${data.result}`; 
    } catch (error) {
        console.error('Ошибка:', error);
        resultDiv.textContent = 'Произошла ошибка при получении данных.';
    }
});