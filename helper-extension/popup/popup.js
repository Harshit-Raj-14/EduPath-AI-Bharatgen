document.addEventListener('DOMContentLoaded', function() {
    const fontSizeSlider = document.getElementById('font-size');
    const fontSizeValue = document.getElementById('font-size-value');
    const bionicButton = document.getElementById('bionic-reading');
    const ttsButton = document.getElementById('text-to-speech');
    const stopButton = document.getElementById('stop-speech');
  
    // Font size control
    fontSizeSlider.addEventListener('input', function() {
      const size = this.value;
      fontSizeValue.textContent = size + 'px';
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'updateFontSize',
          size: size
        });
      });
    });
  
    // Bionic reading toggle
    bionicButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'toggleBionicReading'
        });
      });
    });
  
    // Text-to-speech control
    ttsButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'startTextToSpeech'
        });
      });
    });
  
    stopButton.addEventListener('click', function() {
      chrome.tts.stop();
    });
  });