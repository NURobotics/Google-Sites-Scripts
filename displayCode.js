/* FORMAT CODE ON GOOGLE SITES
*
*  Place your code in an embedded block and type
*    <script src="https://gitcdn.link/cdn/NURobotics/Google-Sites-Scripts/master/displayCode.js"></script>
*  at the end to see in formatted
*   
*  If you want to add code from a file that's on the internet, just add a 'data-src' attribute with a url to the code and it will be automatically placed in
*
*  You can add a 'lang' attribute to set the language and add a 'look' attribute to change the theme of the code to the above script element
*  See here for the list of supported languages and how to type them: https://prismjs.com/#supported-languages
*    C, C#, C++ don't seem to work, but 'clike' is a good substitute
*  See here for a list of different themes the code can use: https://prismjs.com/
*/

(function () {
  // Creates the elements that contain the JavaScript and styles for the code
  const prismJS = document.createElement('script');
  const prismJSLineNums = document.createElement('script');
  const prismCSS = document.createElement('link');
  const prismCSSLineNums = document.createElement('link');

  // Grabs the attribute values of language or theme if they are available
  const scriptParams = document.getElementsByTagName('script')[0];
  const languageClass = scriptParams.getAttribute('lang');
  const codeLook = scriptParams.getAttribute('look');

  // Sets the attributes needed for the script and style to work
  prismJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js';
  prismJSLineNums.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/line-numbers/prism-line-numbers.min.js';
  prismCSS.type = prismCSSLineNums.type = 'text/css';
  prismCSS.rel = prismCSSLineNums.rel = 'stylesheet';
  // The tomorrow theme is the default, but any will do
  prismCSS.href = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-${codeLook || 'tomorrow'}.min.css`;
  prismCSSLineNums.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/line-numbers/prism-line-numbers.min.css';

  // Adds the main Prism script and style sheet to the page
  document.head.appendChild(prismJS);
  document.head.appendChild(prismCSS);

  if (!document.body) {
    document.body = document.createElement('body');
  }

  // Sets the code written on the page to the element that the formatting gets applied to
  const codeDiv = document.createElement('code');
  codeDiv.innerHTML = document.body.innerHTML;

  // Sets the language the code is in with 'clike' as the default
  codeDiv.classList.add(`language-${languageClass || 'clike'}`);
  const preDiv = document.createElement('pre');

  // Allows display of line numbers on the code
  preDiv.classList.add('line-numbers');
  preDiv.classList.add(...codeDiv.classList);
  preDiv.appendChild(codeDiv);
  
  if (scriptParams.getAttribute('data-src')) {
    preDiv.setAttribute('data-src', scriptParams.getAttribute('data-src'));
  }

  // Replaces the old body with the formatted code
  document.body.innerHTML = preDiv.outerHTML;

  // Adds the Prism plugin for line numbers after the them Prism file is loaded
  prismJS.onload = function() {
    document.head.appendChild(prismJSLineNums);
    document.head.appendChild(prismCSSLineNums);
  };

  // Runs the code to activate Prism when both its scripts are loaded
  prismJSLineNums.onload = function () {
    Prism.fileHighlight();
  };
})();
