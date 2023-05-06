function generateRedirectUrl() {
    const longUrl = document.getElementById("long-url").value;
    const numbersToCheck = ["191530", "184222", "174805", "184505", "178709", "188152", "182650", "189821", "180256"]; // add the numbers to check here
  
    if (!numbersToCheck.some(num => longUrl.includes(num))) {
      alert("This URL does not shorten without registration.");
      return;
    }
  
    const apiUrl = "https://tinyurl.com/api-create.php?url=";
    const requestUrl = apiUrl + encodeURIComponent(longUrl);
  
    fetch(requestUrl)
      .then(response => response.text())
      .then(shortUrl => {
        const outputElement = document.getElementById("short-url");
        outputElement.value = shortUrl;
        outputElement.select();
        document.execCommand("copy");
        alert("Shortened URL copied to clipboard: " + shortUrl);
      })
      .catch(error => {
        alert("Failed to shorten URL: " + error.message);
      });
  }
  