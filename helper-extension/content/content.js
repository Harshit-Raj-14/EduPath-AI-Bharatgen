let isBionicEnabled = false;

// Helper function to convert text to bionic reading format
function convertToBionic(text) {
  return text.split(' ').map(word => {
    if (word.length <= 1) return word;
    const boldLength = Math.ceil(word.length * 0.4);
    return `<strong>${word.substring(0, boldLength)}</strong>${word.substring(boldLength)}`;
  }).join(' ');
}

// Function to get all text nodes
function getTextNodes() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        return node.parentElement.tagName !== 'SCRIPT' &&
               node.parentElement.tagName !== 'STYLE'
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node);
  }
  return textNodes;
}

// Message listener for popup actions
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.action) {
    case 'updateFontSize':
      document.body.style.fontSize = request.size + 'px';
      break;

    case 'toggleBionicReading':
      isBionicEnabled = !isBionicEnabled;
      const textNodes = getTextNodes();
      
      if (isBionicEnabled) {
        textNodes.forEach(node => {
          const span = document.createElement('span');
          span.innerHTML = convertToBionic(node.textContent);
          node.parentNode.replaceChild(span, node);
        });
      } else {
        location.reload();
      }
      break;

    case 'startTextToSpeech':
      const text = document.body.innerText;
      chrome.runtime.sendMessage({
        action: 'speak',
        text: text
      });
      break;
  }
});