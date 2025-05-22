chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'speak') {
      chrome.tts.speak(request.text, {
        rate: 1.0,
        pitch: 1.0,
        onEvent: function(event) {
          if (event.type === 'error') {
            console.error('TTS Error:', event);
          }
        }
      });
    }
  });