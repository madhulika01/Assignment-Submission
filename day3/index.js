function addTask(){
    let todo= document.getElementById('inp').value; 
    document.getElementById('list').innerHTML+=`<h3>${todo}</h3>`;
    document.getElementById('inp').value=''
}
function changeColour(){
    document.getElementById('list').style.backgroundColor='lightgreen';
}
function changeFont(){
    document.getElementById('list').style.fontFamily='Georgia';
}
