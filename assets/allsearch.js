

// SEARCH INPUT from User from search bar
 let searchInput = "OTTOMAN BOOKS";

// remove all white space AND  toLocaleLowerCase();
let readyforUrl = searchInput.toLowerCase().replace(/\s/g,'+');

// replace function for turkish letters problem
String.prototype.turkishtoEnglish = function () {
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
let oneSearch = readyforUrl.turkishtoEnglish();




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


























