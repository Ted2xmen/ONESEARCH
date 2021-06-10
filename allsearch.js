

// SEARCH INPUT from User from search bar
 let searchInput = "kindle e book reader";

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
let yandexturkish = readyforUrl.turkishtoEnglish();
//  FOR YANDEX
//  https://yandex.com.tr/search/?text= search query


let yandexURL = "https://yandex.com.tr/search/?text="+ yandexturkish;

console.log(yandexURL);























