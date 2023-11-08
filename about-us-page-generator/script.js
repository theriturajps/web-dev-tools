      function generateAboutUs() {
      var WebsiteName = document.getElementById('WebsiteName').value;
      var WebsiteType = document.getElementById('WebsiteType').value;
      var WebsiteSpeciality = document.getElementById('WebsiteSpeciality').value;
      
      var AboutUsContent = `<h3 style="text-align: center;">Welcome To <span>${WebsiteName}</span></h3><p><span>${WebsiteName}</span> is a Professional <span>${WebsiteType}</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span>${WebsiteType}</span>, with a focus on dependability and <span>${WebsiteSpeciality}</span>. We're working to turn our passion for <span>${WebsiteType}</span> into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" style="color: inherit; text-decoration: none;">online website</a>. We hope you enjoy our <span>${WebsiteType}</span> as much as we enjoy offering them to you.</p><p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p><p style="font-weight: bold; text-align: center;">Thanks For Visiting Our Site<br /><br /><span style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day!</span></p>`;
      
      document.getElementById('AboutUsContent').value = AboutUsContent;
    }
    
    function copyToClipboard() {
      var AboutUsContent = document.getElementById('AboutUsContent');
      AboutUsContent.select();
      document.execCommand('copy');
      alert('About Us Content copied to clipboard!');
    }
