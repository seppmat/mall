function search() {

    let filter = document.getElementById('find').value.toUpperCase();

    let item = document.querySelectorAll('label');

    let l = document.getElementsByClassName('keyword');

    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByClassName('keyword')[0];
        
        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
        }
    }
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function (){
nav.classList.toggle('slide');
        });

