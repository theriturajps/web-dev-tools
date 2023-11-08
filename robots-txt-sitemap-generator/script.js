function myFunction(){
      var first = "# Blogger Sitemap created on"
      var second = Date();
      var third = "# Sitemap built with https://www.gitforge.in/2023/11/robots-txt-sitemap-generator.html";
      var fourth = "User-agent: *";
      var fifth = "Disallow: /search";
      var sixth = "Allow: /";
      var seventh = "Sitemap: https://";
      var eight = document.getElementById("U-url").value;
      var nine = "/atom.xml?redirect=false&start-index=1&max-results=500";
      document.getElementById("result").innerHTML = first +" "+ second + "\n" + third + "\n" +  "\n" + "\n"  + fourth + "\n" + fifth + "\n" + sixth + "\n" + seventh + eight + nine;
      document.getElementById('btn').innerHTML = "Sitemap Generated";
      setTimeout(function(){
      document.getElementById('btn').innerHTML = "Generate XML Sitemap";
      
      }, 5000)
      alert("Thanks for using our tools.")
      document.getElementById('Msg').style.display = 'block';
      document.getElementById('site').innerHTML = "https://" + eight;
  }
  function myFunction2(id){
    document.getElementById(id).select();
      document.execCommand('copy');
      document.getElementById('btn_cpy').innerHTML = "copied!";
      setTimeout(function(){
      document.getElementById('btn_cpy').innerHTML = "Copy HTML Code";
      }, 5000)
    }
