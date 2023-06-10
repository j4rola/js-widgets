//Clock

const clock = document.getElementById('clock')

function getCurrentTime() {
    
    clock.innerHTML = new Date().toLocaleTimeString();
   
}

function runEverySecond() {
  setInterval(function() {
    getCurrentTime()
  }, 1000); 
}

runEverySecond();


//Copy to clipboard

const copyButton = document.getElementById('copy-button') 
const textArea1 = document.getElementById('textArea-1').innerHTML.toString()

function addToClipboard(text) {
    // Create a new textarea element
    var textarea = document.createElement("textarea");
  
    // Set the value of the textarea to the desired text
    textarea.value = text;
  
    // Append the textarea to the document
    document.body.appendChild(textarea);
  
    // Select the text inside the textarea
    textarea.select();
  
    // Execute the "copy" command to copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Show the copy tooltip
    var copyTooltip = document.getElementById("copyTooltip");
    copyTooltip.innerText = "Text copied!";
    copyTooltip.style.display = "inline-block";
  
    // Hide the tooltip after a delay
    setTimeout(function() {
        copyTooltip.style.display = "none";
    }, 1000);

}

const copyEvent = copyButton.addEventListener('click', () => addToClipboard(textArea1))

