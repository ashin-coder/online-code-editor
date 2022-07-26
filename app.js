function compile() {
  var html ;
  var css ;
  var js ;
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    html =htmleditor.getValue();
    css=csseditor.getValue();
    js=jseditor.getValue();
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

compile();






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






function downloadCSS(csscontent) {
 
  const element = document.createElement('a');
  
 
  const blob = new Blob([csscontent], { type: 'plain/text' });

   
  const fileUrl = URL.createObjectURL(blob);
  
  
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download','style.css'); // file name
  element.style.display = 'none';
  
   
  document.body.appendChild(element);
  element.click();
  
  
  document.body.removeChild(element);
};






function downloadJS(jscontent) {
 
  const element = document.createElement('a');
  
 
  const blob = new Blob([jscontent], { type: 'plain/text' });

   
  const fileUrl = URL.createObjectURL(blob);
  
  
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download','script.js'); // file name
  element.style.display = 'none';
  
   
  document.body.appendChild(element);
  element.click();
  
  
  document.body.removeChild(element);
};

window.onload = () => {
  document.getElementById('HTMLdownload').
  addEventListener('click', e => {
    const htmlcontent = htmleditor.getValue()
    if (htmlcontent) {
      downloadhtml(htmlcontent);
    }
  });
  document.getElementById("cssdownload").addEventListener("click", (e) => {
    const csscontent = csseditor.getValue()
    if (csscontent) {
      downloadCSS(csscontent);
    }
  });
  document.getElementById("jsdownload").addEventListener("click", (e) => {
    const jscontent = jseditor.getValue()
    if (jscontent) {
      downloadJS(jscontent);
    }
  });
}







var htmleditor = CodeMirror.fromTextArea
   (document.getElementById('html'), {
    mode:"xml",
    theme:"ayu-dark",
    lineNumbers:true,
    autoCloseTags:true
    
  });


  var csseditor = CodeMirror.fromTextArea
   (document.getElementById('css'), {
    mode:"css",
    theme:"ayu-dark",
    lineNumbers:true,
    autoCloseTags:true
  });

  var jseditor = CodeMirror.fromTextArea
  (document.getElementById('js'), {
   mode:"javascript",
   theme:"ayu-dark",
   lineNumbers:true,
   autoCloseTags:true
 });



      

        function htmllocalLoad(files) {
     if (files.length == 1) {
          document.title = escape(files[0].name);
          var reader = new FileReader();
          reader.onload = function(e) {
            htmleditor.setValue(e.target.result);
          };
          reader.readAsText(files[0]);
       }
      }



      function csslocalLoad(files) {
        if (files.length == 1) {
             document.title = escape(files[0].name);
             var reader = new FileReader();
             reader.onload = function(e) {
               csseditor.setValue(e.target.result);
             };
             reader.readAsText(files[0]);
          }
         }

         function jslocalLoad(files) {
          if (files.length == 1) {
               document.title = escape(files[0].name);
               var reader = new FileReader();
               reader.onload = function(e) {
                 jseditor.setValue(e.target.result);
               };
               reader.readAsText(files[0]);
            }
           }


           function resetFunction() {
            htmleditor.setValue('');
            csseditor.setValue('');
            jseditor.setValue('');
            document.getElementById('code').contentWindow.location.reload(true);
        }
          



      
         function toggle() {
          var el = document.getElementById("style");
          if (el.href.match("style.css")) {
              el.href = "style2.css";    
          }
          else {
              el.href = "style.css";  
          }
      }