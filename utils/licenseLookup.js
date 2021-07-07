// Declare needed packages
const fetch = require('node-fetch');

// Declare array to hold values
let licenseArr = ['No license'];

// Function licenseLookup creates an array of all available licenses on GitHub
function licenseLookup() {

    // Set fetch URL
    let lookupURL = 'https://api.github.com/licenses';

    // Fetch data
    fetch 
        fetch(lookupURL)
            .then (function(response) {
                return response.json();
            })
            .then(function(data){
        
                // Add names of available licenses to array
                for (let i = 0; i < data.length; i++) {
                    licenseArr.push(data[i].key);
                }
            })
}

// Run function when called
licenseLookup();

// Export 'licenceArr'
module.exports = licenseArr;