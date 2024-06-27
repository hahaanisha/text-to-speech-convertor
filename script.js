const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking=true;

const speechConv = () => {

    const synth = window.speechSynthesis;
    const text = textarea.value;

    if(!synth.speaking && text){
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

if (text.length > 50){
    if(synth.speaking && isSpeaking){
        button.innerText= "Pause";
        synth.resume();
        isSpeaking=false;
    }
    else{
        isSpeaking= false;
        button.innerText = "Speaking";
    }
    setInterval(() => {
if (!synth.speaking && !isSpeaking){
    isSpeaking= true;
    button.innerText = "Convert to Speech";
}
    });
}
}

button.addEventListener("click",speechConv);