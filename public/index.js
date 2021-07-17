const socket = io();

//DOM
const chatBox = document.querySelector('.chat-box');
const Uname = document.getElementById('name');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');
const feedback = document.getElementById('feedback');


msg.addEventListener('keypress', (e)=>{
    socket.emit('typing', {
        username : Uname.value
    })
})

btn.addEventListener('click', ()=>{

    socket.emit("chat", {
        username : Uname.value,
        message : msg.value
    })
    Uname.value="";
    msg.value= "";
})

socket.on('chat', data=>{
    feedback.innerHTML="";
chatBox.innerHTML += `<p><span style="color:blue;" >${data.username} :</span> ${data.message}</p>`
})

socket.on('typing', data=>{
    feedback.innerHTML = `<span>${data.username} is typing.....</span>`
})