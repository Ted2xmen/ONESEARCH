


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


// links 
//  FOR YANDEX
let yandexURL = "https://yandex.com.tr/search/?text="+ oneSearch;
let yandex = document.querySelector("#yandex");
yandex.href = yandexURL ;

// FOR GOOGLE 
let googleURL = "https://www.google.com/search?q=" + oneSearch;
let google = document.querySelector("#google");
google.href = googleURL;

// for YAHOO
let yahooURL = "https://search.yahoo.com/search?p=" + oneSearch;
let yahoo = document.querySelector("#yahoo");
yahoo.href = yahooURL;


// FOR ARCHIVE https://archive.org/search.php?query=osmanl%C4%B1%20tarihi

// let archiveURL = "https://archive.org/search.php?query=" + oneSearch;
// let archive = document.querySelector("#archive");
// archive.href = archiveURL;

// trendyol
let trendyolURL = "https://www.trendyol.com/sr?q=" + oneSearch;
let trendyol = document.querySelector("#trendyol");
trendyol.href = trendyolURL;

// sahibinden
let sahibindenURL = "https://www.sahibinden.com/ikinci-el-ve-sifir-alisveris?query_text_mf="+oneSearch+"&query_text="+oneSearch+ "";
let sahibinden = document.querySelector("#sahibinden");
sahibinden.href = sahibindenURL;

// letgo : https://www.letgo.com/tr-tr/c/all?searchTerm=ipad
let letgoURL = "https://www.letgo.com/tr-tr/c/all?searchTerm="+ oneSearch ;
let letgo = document.querySelector("#letgo");
letgo.href = letgoURL;


// reddit t

let redditURL = "https://www.reddit.com/search/?q=" + oneSearch;
let reddit = document.querySelector("#reddit");
reddit.href = redditURL

// stackoverflow https://stackoverflow.com/search?q=find+worksheet+name+in
let stackURL = "https://stackoverflow.com/search?q=" + oneSearch;
let stack = document.querySelector("#stackoverflow");
stack.href = stackURL;


// quora 
let quoraURL = "https://www.quora.com/search?q=" + oneSearch;
let quora = document.querySelector("#quora");
quora.href = quoraURL;




});














































