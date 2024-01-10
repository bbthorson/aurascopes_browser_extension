document.getElementById('birthForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const birthDate = document.getElementById('birthDate').value;
  const birthTime = document.getElementById('birthTime').value;
  const birthZip = document.getElementById('birthZip').value;

  // Send this data to your server
  fetch('https://hooks.zapier.com/hooks/catch/85233/3w5i4gz/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ birthDate, birthTime, birthZip })
  })
  .then(response => response.json())
  .then(data => {
    // Assuming data contains 'horoscope_text' and 'horoscope_image'
    if (data.horoscope_text && data.horoscope_image) {
      // Update the display
      document.getElementById('horoscopeResult').innerText = data.horoscope_text;

      // Store the data in browser storage
      chrome.storage.local.set({'horoscope_text': data.horoscope_text, 'horoscope_image': data.horoscope_image}, function() {
        console.log('Horoscope data is saved.');
      });
    } else {
      // Handle the case where one or both of the expected properties are missing
      console.error('Received data is missing required properties.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
