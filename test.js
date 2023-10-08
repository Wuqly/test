var proveritNextq = document.getElementById("proverit-nextq").style.gridTemplateColumns = "2fr auto auto"; // Выравниваем конпки "Проверить ответ" и "Ответ"

function proverit(num){
    otv_uch_1 = document.getElementById('otvet_uch').value; // Проверяем что ввел ученик
    var array = ["Main"] 
    var num_1 = 0; // Main // Индекс подставляем в onclick // Проверка правильного ответа
    if (array[num] == otv_uch_1){ // Если ответ ученика верный выводим "Задание выполнено верно"
        document.getElementById('rezultat').innerHTML = "Задание выполнено верно"; // Вывод сообщения
        document.getElementById("rezultat").style.color = '#1ac91a'; // меняем цвет сообщения на зеленый
        document.getElementById("proverit-nextq").style.gridTemplateColumns = "10.5rem 18rem 0 auto"; // Подравниваем кнопки
        $('.hide-otvet').fadeOut(0).fadeIn(100);
        $('.rezultat').fadeOut(0).fadeIn(100);
        $('.hide').fadeOut(0).fadeIn(100);
        $('.hide').show();
        $('.hide-otvet').hide(); // Скрываем кнопку "Ответ"

    }
    else{ // Если ответ ученика неверный выводим "Задание выполнено неверно, попробуйте еще раз"
        document.getElementById('rezultat').innerHTML = "Задание выполнено неверно, попробуйте еще раз"; // Вывод сообщения
        document.getElementById("rezultat").style.color = '#c91a1a'; // Меняем цвет сообщения на красный
        document.getElementById("nextq").style.display = "none"; // Не даем появится кнопке "Следующее задание"
        document.getElementById("proverit-nextq").style.gridTemplateColumns = "10.5rem auto 10.7rem"; // Подравниваем кнопки
        $('.rezultat').fadeOut(0).fadeIn(100); // Плавное появление сообщения и кнопки
        $('.hide-otvet').fadeOut(0).fadeIn(100);
    }
}

var clickToHide2 = document.querySelector('#otvet'); // Здесь показываем/скрываем кнопки "Ответ" и "Скрыть" 
	clickToHide2.addEventListener("click", hideVisibleElem);
	function hideVisibleElem() {
	let wpcraftBox1 = document.querySelector('.otvet-z');
    wpcraftBox1.classList.toggle("otvet-z-hide");
    $('.input-show-hide').toggle();
	if (wpcraftBox1.classList.contains("otvet-z-hide")){
		clickToHide2.value = 'Ответ';
	} else {
		clickToHide2.value = 'Скрыть';
	}
}

