// Function to convert medical term to simplified term
function convertMedicalTermToNormal(term, mapping) {
    term = term.toLowerCase();
    if (term in mapping) {
        return mapping[term];
    } else {
        return "Simplified term not found";
    }
}

// Function to handle button click
function handleConvertClick() {
    const medicalTermInput = document.getElementById('medical-term').value.trim();
    const resultElement = document.getElementById('result');
    
    // Fetch the JSON file
    fetch('medical_terms.json')
        .then(response => response.json())
        .then(mapping => {
            const normalTerm = convertMedicalTermToNormal(medicalTermInput, mapping);
            resultElement.textContent = normalTerm;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Event listener for the convert button
document.getElementById('convert-btn').addEventListener('click', handleConvertClick);

// Function to convert medical term to simplified term
function convertMedicalTermToNormal(term, mapping) {
    term = term.toLowerCase();
    if (term in mapping) {
        return mapping[term];
    } else {
        return "Simplified term not found";
    }
}

// Function to handle button click
function handleConvertClick() {
    const medicalTermInput = document.getElementById('medical-term').value.trim();
    const resultElement = document.getElementById('result');
    
    // Fetch the JSON file
    fetch('medical_terms.json')
        .then(response => response.json())
        .then(mapping => {
            const normalTerm = convertMedicalTermToNormal(medicalTermInput, mapping);
            resultElement.textContent = normalTerm;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Event listener for the convert button
document.getElementById('convert-btn').addEventListener('click', handleConvertClick);


// Function to convert text to speech
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  
  // Add event listener to the Convert button
  document.getElementById("convert-btn").addEventListener("click", function() {
    const inputText = document.getElementById("medical-term").value;
    // Perform your conversion and display the result
    const resultDiv = document.getElementById("result");
    // For demonstration, let's assume the conversion result is stored in a variable called 'conversionResult'
    const conversionResult = "Your conversion result goes here";
    resultDiv.innerText = conversionResult;
  });
  
  // Add event listener to the Speak button
  document.getElementById("speak-btn").addEventListener("click", function() {
    const resultText = document.getElementById("result").innerText;
    if (resultText) {
      speak(resultText);
    } else {
      alert("Please perform the conversion first.");
    }
  });