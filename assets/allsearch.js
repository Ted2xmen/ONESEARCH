


// SEARCH is working now
let handleSearch = document.querySelector("#search-js").addEventListener('click' , function(e) {
    let searchInput = document.querySelector("#search-input").value;


    let showInput = document.querySelector("#show-banner");
    showInput.innerHTML = "\"" + searchInput + "\"" + " araması bütün linklere uygulandı";
  
      event.preventDefault();

 
  String.prototype.turkishtoEnglish = function () { // "replace" function for turkish letters problem
    return this.replace('ğ','g')
        .replace('ü','u')
        .replace('ş','s')
        .replace('ı','i')
        .replace('i','i')
        .replace('ö','o')
        .replace('ç','c')
        .replace('ğ','g')
        .replace('ü','u')
        .replace('ş','s')
        .replace('ı','i')
        .replace('ö','o')
        .replace('ç','c');
  };
  // 

  // let oneSearch = readyforUrl.turkishtoEnglish();
  
  let oneSearch = searchInput.turkishtoEnglish();

//  FOR YANDEX
let yandexURL = "https://yandex.com.tr/search/?text="+ oneSearch;
let yandex = document.querySelector("#yandex");
yandex.href = yandexURL ;


// FOR GOOGLE 
let googleURL = "https://www.google.com/search?q=" + oneSearch;
let google = document.querySelector("#google");
google.href = googleURL;


// FOR ARCHIVE https://archive.org/search.php?query=osmanl%C4%B1%20tarihi

let archiveURL = "https://archive.org/search.php?query=" + oneSearch;
let archive = document.querySelector("#archive");
archive.href = archiveURL;


























});














































