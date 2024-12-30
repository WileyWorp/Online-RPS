// Create the ad warning container
const adWarningContainer = document.createElement('div');

adWarningContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
adWarningContainer.style.height = '100%';
adWarningContainer.style.width = '100%';
adWarningContainer.style.position = 'fixed';
adWarningContainer.style.top = '0';
adWarningContainer.style.left = '0';
adWarningContainer.style.display = 'flex';
adWarningContainer.style.justifyContent = 'center';
adWarningContainer.style.alignItems = 'center';
adWarningContainer.style.zIndex = '10';

// Create the ad warning
const adWarning = document.createElement('div');

adWarning.style.display = 'flex';
adWarning.style.flexDirection = 'column';
adWarning.style.backgroundColor = '#6060a5';
adWarning.style.height = '50%';
adWarning.style.width = '50%';
adWarning.style.borderRadius = '5px';

// create the ad warning heading
const adWarningHeading = document.createElement('h1');
adWarningHeading.textContent = 'WARNING!'
adWarningHeading.style.backgroundColor = '#8383c6';
adWarningHeading.style.padding = '5% 0';
adWarningHeading.style.margin = '0';
adWarningHeading.style.textAlign = 'center';
adWarningHeading.style.color = '#fff';
adWarningHeading.style.fontSize = '3.5em';
adWarningHeading.style.borderRadius = '5px 5px 0 0';

// create the ad warning paragraph
const adWarningParagraph = document.createElement('p');
adWarningParagraph.innerHTML = 'I understand that ads can be annoying. But hosting a website is expensive and requires ads to be funded. If you would like to continue using an ad blocker, I request that you donate at least one dollar. Thank you. <br> - Wiley Scheideman, creator of RPSRanked'
adWarningParagraph.style.backgroundColor = '#8383c6';
adWarningParagraph.style.padding = '10% 20%';
adWarningParagraph.style.borderRadius = '25px';
adWarningParagraph.style.margin = '5%';

// create the "i understand" button

const adWarningButton = document.createElement('button');
adWarningButton.textContent = 'I understand';
adWarningButton.style.backgroundColor = '#8383c6';
adWarningButton.style.color = '#fff';
adWarningButton.style.border = 'none';
adWarningButton.style.margin = '5%';
adWarningButton.style.padding = '10px 20px';
adWarningButton.style.borderRadius = '5px';
adWarningButton.style.alignSelf = 'flex-end';
adWarningButton.style.cursor = 'pointer';

adWarningButton.addEventListener('click', function() {
    adWarningContainer.style.display = 'none';
})

// check for ads
var ADS_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

function checkAdsBlocked(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.status === 0 || xhr.responseURL !== ADS_URL);
        }
    };
    xhr.open('HEAD', ADS_URL, true);
    xhr.send(null);
}


// display ad warning
checkAdsBlocked(function (adsBlocked) {
    console.log('ads blocked = ' + adsBlocked)

    if (adsBlocked === true) {
        // Add the ad warning to the document
        adWarningContainer.appendChild(adWarning);
        adWarning.appendChild(adWarningHeading);
        adWarning.appendChild(adWarningParagraph);
        adWarning.appendChild(adWarningButton);
        document.body.appendChild(adWarningContainer);
    }
});