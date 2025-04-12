let speech=new SpeechSynthesisUtterance();


let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]=new Option(voice.name, i)));
    

};


//changing voices on this event(selection)
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});



//for normal voice, this below is sufficient
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
