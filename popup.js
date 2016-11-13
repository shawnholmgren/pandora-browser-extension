// working addition of bookmark button

var bookmarkButton = document.createElement('div');

bookmarkButton.className ='bookmark';
bookmarkButton.innerHTML = '<a href="#"><img src="https://cdn4.iconfinder.com/data/icons/bold-purple-free-samples/32/List_Text_Menu_Numbers_String_Burger-20.png"></a>';

document.getElementById('playbackControl').appendChild(bookmarkButton);

document.title = 'TEST';
console.log("JavaScript is active.");

