$("body").css({
	"margin": 0,
	"padding": 0,
});

// Добавить класс
$('#num1').addClass('newClass net');

// Удалить класс
$('#num1').removeClass( "unClass" );

// Проверить если есть такой класс то удалить если нет то добавить
$('#mydiv').toggleClass('active');

// Добавляет css стили
// Через запятую !
$('#num1').css( "background-color", 'red' );
$('#num1').css( "height", 400 );

// Добавляет css стили 2
$('#num1').css({
  "background-color": "red",
  "height": 400,
});

// Добисывает строку
  //innerHtml = $('#num1').html();
  //var name = "Vasya"
  //innerHtml = name;
  //$('#num1').html(name);

// Определяет, назначен ли какой-либо из сопоставленных элементов данному классу.
var qwer = $( "#mydiv" ).hasClass( "next" );
console.log(qwer);
   

var qwe = $( "#mydiv" ).height();
console.log(qwe);

// Элемент + css стиль (значение)
$('#num1').height(200);
$('#num1').width(200);
   
var a = $( "#mydiv" ).position();
// Показать позиции слева
console.log(a.left);
// Показать позиции справа
console.log(a.right);
// Показать позиции сверху
console.log(a.top);
// Показать позиции снизу
console.log(a.bottom);
   
// Скрыть элементы
$('#num1').hide();
// Показать элементы
$('#num1').show();
// Показать или скрыть элементы
$('#num1').toggle();
// Показать или скрыть соответствующие элементы
$('#num1').toggle();
   
// Скрыть скрытые элементы, превращая их в прозрачные.
$('#num1').fadeOut(2000);
// Отобразить элементы, превратив их в непрозрачные.
$('#num1').fadeIn();
// Отображение или скрытие элементов путем анимации их непрозрачности
$('#num1').fadeToggle();
// Отрегулируйте непрозрачность соответствующих элементов (милисек, прозрачность)
$('#num1').fadeTo();
// $('#num1').fadeTo(2000, 0.5);

// Скрыть элементы с помощью скользящего движения вверх
$('#num1').slideUp(2000);
// Скрыть элементы с помощью скользящего движения вниз
$('#num1').slideDown();

// Выполнить пользовательскую анимацию набора свойств CSS
// 1
$( "#num1" ).animate({
  opacity: 0.5,
  left: "+=0",
}, 1000, "linear", function() {
      // Animation complete.
    });

// 2
$("html, body").animate({ 
	scrollTop: 200 
},600);

// Функция при клике
$('#num1').click(function() {
	alert('Ты, не кликай !');
});

// ===============================================

$("#mydiv2").css({
	"width": 200,
	"height": 200,
	"background-color": "pink",
});

$("#mydiv2").click(function() {
	$(this).slideUp(2000);
});

var t = $("#mydiv3");

t.height(250);
t.width(250);

t.css("background-color", "green");

t.click(function() {
	$(this).hide();
});

$("#mydiv4").css({
	"width": 10,
	"height": 10,
	"background-color": "red",
});

$("#mydiv4").click(function() {
	$(t).show();
});