
function createMenu() {
var ul = document.createElement('ul');
ul.innerHTML = `
<li><a href="#">Menu Item 1</a></li>
<li><a href="#">Menu Item 1</a></li>
<li><a href="#">Menu Item 1</a></li>
<li><a href="#">Menu Item 1</a></li>
`;
document.getElementById('main-nav').appendChild(ul);
}
