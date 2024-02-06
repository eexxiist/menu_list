document.getElementById('nav').onmouseover = function(e) {
    let target = e.target;

    if(target.className == 'menu_item'){
        let s = target.getElementsByClassName('submenu');
        closeMenu();

        s[0].style.display = 'block';
    }
}

document.onmouseover = function(e){
    let target = e.target;
    console.log(e.target);
    if(target.className != 'menu_item' && target.className != 'submenu'){
        closeMenu();
    }

}

const closeMenu = () => {
    let nav = document.getElementById('nav');
    let submenu = document.getElementsByClassName('submenu');
    for(let i = 0; i < submenu.length; i++){
        submenu[i].style.display = 'none';
    }
}