// Create the ad warning container
const adWarningContainer = document.createElement('div');
adWarningContainer.className = 'adWarningContainer';

// Create the ad warning
const adWarning = document.createElement('div');
adWarning.className = 'adWarning';

adWarning.style.display = 'flex';
adWarning.style.flexDirection = 'column';
adWarning.style.backgroundColor = '#6060a5';
adWarning.style.height = '50%';
adWarning.style.width = '50%';
adWarning.style.borderRadius = '5px';

// create the ad warning heading
const adWarningHeading = document.createElement('h1');
adWarningHeading.className = 'adWarningHeading';
adWarningHeading.textContent = 'WARNING!'

// create the ad warning paragraph
const adWarningParagraph = document.createElement('p');
adWarningParagraph.className = 'adWarningParagraph';
adWarningParagraph.innerHTML = 'I understand that ads can be annoying. But hosting a website is expensive and requires ads to be funded. If you would like to continue using an ad blocker, I request that you donate at least one dollar. Thank you. <br> - Wiley Scheideman, creator of RPSRanked';

// create the "i understand" button

const adWarningButton = document.createElement('button');
adWarningButton.className = 'adWarningButton';
adWarningButton.textContent = 'I understand';

adWarningButton.addEventListener('click', function () {
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
    if (adsBlocked === true) {
        // Add the ad warning to the document
        adWarningContainer.appendChild(adWarning);
        adWarning.appendChild(adWarningHeading);
        adWarning.appendChild(adWarningParagraph);
        adWarning.appendChild(adWarningButton);
        document.body.appendChild(adWarningContainer);
    }
});


// nav drop down toggle

document.querySelector('.navMenuContainer').addEventListener('click', function (e) {
    if (!e.target.matches('.navigation')) {
        var menuContainer = document.querySelector('.navMenuContainer');
        if (menuContainer.classList.contains('show')) {
            menuContainer.classList.remove('show');
        }
    }
});

document.querySelector('.nav').addEventListener('click', function () {
    document.querySelector('.navMenuContainer').classList.add('show');
});