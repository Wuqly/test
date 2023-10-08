var otvet = document.getElementById("otvet").hidden = false;
var proveritNextq = document.getElementById("proverit-nextq").style.gridTemplateColumns = "2fr auto auto";



function proverit(num){
    otv_uch_1 = document.getElementById('o_1').value;
    var array = ["Main"]
    var num_1 = 0; // Main
    if (array[num] == otv_uch_1){
        document.getElementById('rezultat').innerHTML = "Задание выполнено верно";
        document.getElementById("rezultat").style.color = '#1ac91a';
        document.getElementById("proverit-nextq").style.gridTemplateColumns = "10.5rem 18rem 0 auto";
        document.getElementById("nextq").style.display="none";
        $('.hide-otvet').fadeOut(0).fadeIn(100);
        $('.hide-otvet').hide();
        $('.rezultat').fadeOut(0).fadeIn(100);
        $('.hide').fadeOut(0).fadeIn(100);
    }
    else{
        document.getElementById('rezultat').innerHTML = "Задание выполнено неверно, попробуйте еще раз";
        document.getElementById("rezultat").style.color = '#c91a1a';
        document.getElementById("nextq").style.display = "none";
        document.getElementById("proverit-nextq").style.gridTemplateColumns = "10.5rem auto 10.7rem";
        $('.rezultat').fadeOut(0).fadeIn(100);
        $('.hide-otvet').fadeOut(0).fadeIn(100);
        $('.hide-otvet').show();
    }
}

var clickToHide2 = document.querySelector('#otvet');
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

