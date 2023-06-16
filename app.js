/**
 * JavaScript File for Online Code Editor web application
 */


// Function for compiling the HTML,CSS and JavaScript code entered by the user
function compile() {
  var html;
  var css;
  var js;
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function () {
    html = htmleditor.getValue();
    css = csseditor.getValue();
    js = jseditor.getValue();
    code.open();
    code.writeln(
      html +
      "<style>" +
      css +
      "</style>" +
      "<script>" +
      js +
      "</script>"
    );
    code.close();
  };
}

compile()


// Bind the "compile" function to the "keyup" event on the document body
document.body.addEventListener("keyup", compile);


// Binds the "compile" function to the "keyup" event on the document body
function bindCompileEvent() {
  document.body.addEventListener("keyup", compile);
}

// Call bindCompileEvent() after the page loads
window.onload = function () {
  bindCompileEvent();
};


// Function to download the HTML code entered by the user
function downloadhtml(htmlcontent) {

  const element = document.createElement('a');
  const blob = new Blob([htmlcontent], { type: 'plain/text' });
  const fileUrl = URL.createObjectURL(blob);

  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', "index.html"); // file name
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
};



// Function to download the CSS code entered by the user
function downloadCSS(csscontent) {

  const element = document.createElement('a');
  const blob = new Blob([csscontent], { type: 'plain/text' });
  const fileUrl = URL.createObjectURL(blob);

  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', 'style.css'); // file name
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
};



// Function to download the JavaScript code entered by the user
function downloadJS(jscontent) {

  const element = document.createElement('a');
  const blob = new Blob([jscontent], { type: 'plain/text' });
  const fileUrl = URL.createObjectURL(blob);

  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', 'script.js'); // file name
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
};


window.onload = () => {
  // Event listener for the HTML download button
  document.getElementById('HTMLdownload').
    addEventListener('click', e => {
      const htmlcontent = htmleditor.getValue()
      if (htmlcontent) {
        downloadhtml(htmlcontent);
      }
    });

  // Event listener for the CSS download button
  document.getElementById("CSSdownload").addEventListener("click", (e) => {
    const csscontent = csseditor.getValue()
    if (csscontent) {
      downloadCSS(csscontent);
    }
  });

  // Event listener for the JavaScript download button
  document.getElementById("JSdownload").addEventListener("click", (e) => {
    const jscontent = jseditor.getValue()
    if (jscontent) {
      downloadJS(jscontent);
    }
  });
}



//  Create a CodeMirror instance from the 'html' textarea element
var htmleditor = CodeMirror.fromTextArea
  (document.getElementById('html'), {
    mode: "xml",
    theme: "ayu-dark",
    lineNumbers: true,
    autoCloseTags: true

  });

// Create a CodeMirror instance from the 'css' textarea element
var csseditor = CodeMirror.fromTextArea
  (document.getElementById('css'), {
    mode: "css",
    theme: "ayu-dark",
    lineNumbers: true,
    autoCloseTags: true
  });

// Create a CodeMirror instance from the 'js' textarea element
var jseditor = CodeMirror.fromTextArea
  (document.getElementById('js'), {
    mode: "javascript",
    theme: "ayu-dark",
    lineNumbers: true,
    autoCloseTags: true
  });

// Function to load a local HTML file into the HTML editor
function htmllocalLoad(files) {
  if (files.length == 1) {
    document.title = escape(files[0].name);
    var reader = new FileReader();
    reader.onload = function (e) {
      htmleditor.setValue(e.target.result);
    };
    reader.readAsText(files[0]);
  }
}


// Function to load a local CSS file into the CSS editor
function csslocalLoad(files) {
  if (files.length == 1) {
    document.title = escape(files[0].name);
    var reader = new FileReader();
    reader.onload = function (e) {
      csseditor.setValue(e.target.result);
    };
    reader.readAsText(files[0]);
  }
}

// Function to load a local JavaScript file into the JavaScript editor
function jslocalLoad(files) {
  if (files.length == 1) {
    document.title = escape(files[0].name);
    var reader = new FileReader();
    reader.onload = function (e) {
      jseditor.setValue(e.target.result);
    };
    reader.readAsText(files[0]);
  }
}

// Function to reset the editor
function resetFunction() {
  location.reload();
}

// Function to toggle between two CSS stylesheets for changing layout
function toggle() {
  var el = document.getElementById("style");
  if (el.href.match("style.css")) {
    el.href = "style2.css";
  }
  else {
    el.href = "style.css";
  }
}