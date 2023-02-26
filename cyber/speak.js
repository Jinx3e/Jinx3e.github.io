/* TEXT TO SPEECH
function initVoice(){
    const voices = window.speechSynthesis.getVoices();
    const Voce = voices[voices.length -104];
    const synth = new SpeechSynthesisUtterance('!');
    synth.voice = Voce; // change voice
    window.speechSynthesis.speak(synth);
}
function hello(){
    initVoice()
    const synth = new SpeechSynthesisUtterance('hello');
    const voices = window.speechSynthesis.getVoices();
    const Voce = voices[voices.length -104];
    synth.voice = Voce; // change voice
    window.speechSynthesis.speak(synth);
}
*/


//Speech Recognition
/*
// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
};
              
// start recognition
recognition.start();
*/