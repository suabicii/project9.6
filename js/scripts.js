var list = document.getElementById('list');
var add = document.getElementById('addElem');
var a = 0;
var listLenght;

add.addEventListener('click', function() {
	a = a+1;
	list.innerHTML += '<li>item ' + a + '</li>';
	listLenght = document.getElementsByTagName('li');
	console.log(listLenght.length);
});