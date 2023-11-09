function myFunction1(){
      const TITLE = document.getElementById('title').value;
      const AUTHOR = document.getElementById('author').value;
      const DES = document.getElementById('des').value;
      const KEY = document.getElementById('key').value;
      const LAN = document.getElementById('language').value;
      const INDE = document.getElementById('inde').value;
      const CONTYPE = document.getElementById('ConType').value;
      if(TITLE == ""){
        document.getElementById('title').style.border = "1px solid red";
        alert("Enter Post Title");
      }else if(AUTHOR == ""){
        document.getElementById('author').style.border = "1px solid red";
        alert("Enter author name");
      }else if(DES == ""){
        document.getElementById('des').style.border = "1px solid red";
        alert("Enter post description");
        }else if(KEY == ""){
        document.getElementById('key').style.border = "1px solid red";
        alert("Enter keywords");
      }else{
        document.getElementById('title').style.border = "1px solid blue";
        document.getElementById('author').style.border = "1px solid blue";
        document.getElementById('des').style.border = "1px solid blue";
        document.getElementById('key').style.border = "1px solid blue";
        var Ptitle = '<meta name="title" content='+'"'+TITLE+'">';
        var PAuthor = '<meta name="author" content='+'"'+AUTHOR+'">';
        var Desc = '<meta name="description" content='+'"'+DES+'">';
        var Keyw = '<meta name="keywords" content='+'"'+KEY+'">';
        var lAN = '<meta name="language" content='+'"'+LAN+'">';
        var iND = '<meta name="robots" content='+'"'+INDE+'">';
        var cONTYPE = '<meta http-equiv="Content-Type" content="text/html; charset='+CONTYPE+'">';
        var MetaTagsSeo = Ptitle + '\n' + PAuthor +'\n'+Desc+'\n'+Keyw+'\n'+lAN+'\n'+iND+'\n'+cONTYPE;
        
          var timeleft = 10;
          var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
              clearInterval(downloadTimer);
            }
            document.getElementById('Msg').innerHTML= "Generating Meta Tags in 10 seconds:" + " ";  
            document.getElementById('tim').innerHTML =10 - timeleft;
            timeleft -= 1;
          }, 1000);
  
          setTimeout(function(){  
            var SRL = document.getElementById('result');
            SRL.scrollIntoView();
            document.getElementById('result').innerHTML = MetaTagsSeo;
          }, 11000);
        //document.getElementById('result').innerHTML = MetaTagsSeo;
        
        
      }
    }
    
  function myFunction2(id){
  document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "Copied!";
    setTimeout(function(){
    document.getElementById('btn_cpy').innerHTML = "Copy HTML Code"
    }, 5000);
  }
