// Function to convert medical term to simplified term
function convertMedicalTermToNormal(term, mapping) {
    term = term.toLowerCase();
    if (term in mapping) {
        return mapping[term];
    } else {
        return term; // Return the original term if not found in the mapping
    }
}

// Function to replace medical terms in a sentence with simplified terms
function replaceMedicalTerms(sentence, mapping) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);
    // Iterate through each word to identify medical terms and replace them
    const simplifiedWords = words.map(word => {
        return convertMedicalTermToNormal(word, mapping);
    });
    // Join the words back into a sentence
    return simplifiedWords.join(' ');
}

// Given sentence with medical jargon
const sentence = "The patient exhibited symptoms consistent with myocardial infarction, including chest pain radiating to the left arm, diaphoresis, and ST-segment elevation on electrocardiogram.";

// Fetch the JSON file containing medical term mappings
fetch('medical_terms.json')
    .then(response => response.json())
    .then(mapping => {
        // Replace medical terms in the sentence with simplified terms
        const simplifiedSentence = replaceMedicalTerms(sentence, mapping);
        console.log(simplifiedSentence);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });