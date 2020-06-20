function createMenu() {
    var ul = document.createElement('ul');
    ul.innerHTML = `
<li id="nav-item-2"  class="nav-item" onclick="makeCurrent(this.id)"><a href="page-01.html">Page One</a></li>
<li id="nav-item-3"  class="nav-item" onclick="makeCurrent(this.id)"><a href="page-02.html">Page Two</a></li>
<li id="nav-item-4"  class="nav-item" onclick="makeCurrent(this.id)"><a href="page-03.html">Page Three</a></li>
`;
    document.getElementById('main-nav').appendChild(ul);
    var y = sessionStorage.getItem('myCurrent');
    document.getElementById(y).className = 'nav-item-current';
}


function makeCurrent(clicked_id) {
    x = clicked_id;
    sessionStorage.setItem('myCurrent', x);
    document.getElementById(x).className = 'nav-item';
}
