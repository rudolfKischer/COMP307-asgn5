
console.log("Hello");

//nav


// function navBar(){
//     let navPages = document.getElementById('nav').children;
//     for (let i=0; i<navPages.length; i++) {
//         page = navPages[i];
//         page.setAttribute("onclick", "playAudio("+i+");")
//         page.onClick = loadPage(page.innerHTML.toLowerCase()+","+page+")";
//     }
// }

function loadPage(page, elementid){
    let navPages = document.getElementById('navPages').children;
    for (let page of navPages) {
        if(page.id == elementid){
            page.classList.add('activeNavPage');
        }else{
            page.classList.remove('activeNavPage');
        }
       
    }
    
    let path = './matter/mini5'+page+'.txt';
    loadDoc(path, 'content');
}

function loadDoc(docName, elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", docName, true);
    xhttp.send();
}

function load(){
    loadDoc('./matter/mini5home.txt','content');
}

function hamburgerToggle(x) {
    document.getElementById('nav').classList.toggle("hide");
    x.classList.toggle("change");
  }