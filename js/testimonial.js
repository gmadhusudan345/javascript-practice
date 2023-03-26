//array declaration
var custSpeaks = [
    {"cname": "Girish Patil", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'",},
    {"cname": "Amol S", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",},
    {"cname": "Utkarsh G", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s",},
    {"cname": "Ganesh R", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",},
    {"cname": "Utkarsh", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15s",},
    {"cname": "Ajay G", "testContent": "Lorem Ipsum is simply dummy text 1500s",},
    {"cname": "Rushi K", "testContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",},
];

var btn = document.getElementById("btn");

function displayName(index){
    document.getElementById("cname").innerHTML = custSpeaks[index].cname;
    document.getElementById("content").innerHTML = custSpeaks[index].testContent;
}
displayName(0); //on page load display array 1st record

btn.addEventListener("click", function(){
    displayName(Math.floor(Math.random() * custSpeaks.length)); // display data on button click using random
});
