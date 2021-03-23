var bookmarkBtn = document.querySelectorAll('.bookmark');
function bookmarkClick(e) 
{
	e.preventDefault();
	var bm = this;
	bm.classList.toggle('added');
	var parentId = bm.parentElement.id;
	var bookMarks = document.querySelector('.bookmark-list');
	if(bm.classList.contains('added')) 
	{
		bm.textContent = 'Удалить из закладок';
		var headerArticle = document.querySelector('#' + parentId +' h2');
		var linkArticle = document.createElement('a');
		linkArticle.textContent = headerArticle.textContent;
		linkArticle.setAttribute('href', '#' + parentId);
		bookMarks.append(linkArticle);
	} else 
	{
		bm.textContent = 'Добавить в закладки';
		var linkRemove = document.querySelector('a[href="#'+ parentId +'"]');
		linkRemove.remove();
	}
}
for(let i=0; i<bookmarkBtn.length; i++)
{
	bookmarkBtn[i].onclick = bookmarkClick;
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() 
{
	modal.style.display = "block";
}
span.onclick = function() 
{
	modal.style.display = "none";
}
window.onclick = function(event) 
{
	if (event.target == modal) 
	{
		modal.style.display = "none";
	}
}