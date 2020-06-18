
function createMenu() {
var ul = document.createElement('ul');
ul.innerHTML = `
<li><a href="page-01.html">Page One</a></li>
<li><a href="page-02.html">Page Two</a></li>
<li><a href="page-03.html">Page Three</a></li>
`;
document.getElementById('main-nav').appendChild(ul);
}
