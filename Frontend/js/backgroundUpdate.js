document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['horoscope_text', 'horoscope_image'], function(result) {
        let horoscopeText = result.horoscope_text ? result.horoscope_text : "Avoid celestial mood swings with daily, bite-sized insights, designed to help you navigate the astrological vibes";
        let birthChartDataDiv = document.getElementById('birthChartData');
        birthChartDataDiv.innerText = horoscopeText;
        birthChartDataDiv.style.display = 'block';

        if (result.horoscope_image) {
            // If horoscope_image is present, set it as the background image
            document.body.style.backgroundImage = 'url(' + result.horoscope_image + ')';
            document.body.style.backgroundSize = 'cover';
        }
    });
});
