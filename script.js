import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";

let generator;

async function loadModel(){
document.getElementById("output").innerText="Loading AI model (first time takes 20-30 sec)...";

generator=await pipeline(
"text-generation",
"Xenova/distilgpt2"
);

document.getElementById("output").innerText="AI Ready ✅ Ask anything!";
}

loadModel();

window.generate=async function(){

let input=document.getElementById("input").value;

document.getElementById("output").innerText="Thinking...";

let result=await generator(input,{
max_new_tokens:60
});

document.getElementById("output").innerText=result[0].generated_text;

}