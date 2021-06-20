


// SEARCH is working now
let handleSearch = document.querySelector("#search-js").addEventListener('click' , function(e) {
    let searchInput = document.querySelector("#search-input").value;





  
      event.preventDefault();

 
  // String.prototype.turkishtoEnglish = function () { // "replace" function for turkish letters problem
  //   return this.replace('ğ','g')
  //       .replace('ü','u')
  //       .replace('ş','s')
  //       .replace('ı','i')
  //       .replace('i','i')
  //       .replace('ö','o') // global  /ö/g
  //       .replace('ç','c')
  //       .replace('ğ','g')
  //       .replace('ü','u')
  //       .replace('ş','s')
  //       .replace('ı','i')
  //       .replace('ö','o')
  //       .replace('ç','c');
  // };
  // 

  // let oneSearch = readyforUrl.turkishtoEnglish();
  
  // let oneSearch = searchInput.turkishtoEnglish()  

  var oneSearch = searchInput;








// Titles


// let shopping = document.querySelector("#shoping");
// shopping.innerHTML = ` Shopping: <span class="texto"> ${oneSearch} </span>
// `;

// let searchEngines = document.querySelector("#searchEngines");
// searchEngines.innerHTML = `  <span class="texto"> ${oneSearch} </span>
// `;

// let community = document.querySelector("#community");
// community.innerHTML = ` Community : <span class="texto"> ${oneSearch} </span>
// `;


// search banner text
var showBanner = document.querySelector("#show-banner");
showBanner.innerHTML = ` <span class="deneme">"${oneSearch}"</span>    <i class="bi bi-check-square"></i></span>
`;


// web



// let webURL = "https://" + oneSearch;
// let web = document.querySelector("#web");
// web.href = webURL


// youtube 

let youtubeURL = "https://www.youtube.com/results?search_query=" + oneSearch;
let youtube = document.querySelector("#youtube");
youtube.href = youtubeURL;


// twitter 

let twitterURL = "https://twitter.com/search?q=" + oneSearch;
let twitter = document.querySelector("#twitter");
twitter.href = twitterURL



// linkedin 

let linkedinURL = "https://www.linkedin.com/search/results/all/?keywords=" + oneSearch;
let linkedin = document.querySelector("#linkedin");
linkedin.href = linkedinURL


// who.is
// let whoisURL = "https://who.is/whois/" + oneSearch;
// let whois = document.querySelector("#whois");
// whois.href = whoisURL;

// Github
let githubURL = "https://github.com/search?q=" + oneSearch;
let github = document.querySelector("#github");
github.href = githubURL;
// links for Search Engines
//  FOR YANDEX
// let yandexURL = "https://yandex.com.tr/search/?text="+ oneSearch;
// let yandex = document.querySelector("#yandex");
// yandex.href = yandexURL ;

// FOR GOOGLE 
var googleURL = "https://www.google.com/search?q=" + oneSearch;
var google = document.querySelector("#google");
google.href = googleURL;

// // for YAHOO
// let yahooURL = "https://search.yahoo.com/search?p=" + oneSearch;
// let yahoo = document.querySelector("#yahoo");
// yahoo.href = yahooURL;


// FOR ARCHIVE https://archive.org/search.php?query=osmanl%C4%B1%20tarihi

// let archiveURL = "https://archive.org/search.php?query=" + oneSearch;
// let archive = document.querySelector("#archive");
// archive.href = archiveURL;




// links for ShoppingTR
// trendyol
// let trendyolURL = "https://www.trendyol.com/sr?q=" + oneSearch;
// let trendyol = document.querySelector("#trendyol");
// trendyol.href = trendyolURL;
// // sahibinden
// let sahibindenURL = "https://www.sahibinden.com/ikinci-el-ve-sifir-alisveris?query_text_mf="+oneSearch+"&query_text="+oneSearch+ "";
// let sahibinden = document.querySelector("#sahibinden");
// sahibinden.href = sahibindenURL;
// // letgo : https://www.letgo.com/tr-tr/c/all?searchTerm=ipad
// let letgoURL = "https://www.letgo.com/tr-tr/c/all?searchTerm="+ oneSearch ;
// let letgo = document.querySelector("#letgo");
// letgo.href = letgoURL;




// links for Community
// reddit 
let redditURL = "https://www.reddit.com/search/?q=" + oneSearch;
let reddit = document.querySelector("#reddit");
reddit.href = redditURL
// stackoverflow https://stackoverflow.com/search?q=find+worksheet+name+in
var stackURL = "https://stackoverflow.com/search?q=" + oneSearch;
var stack = document.querySelector("#stackoverflow");
stack.href = stackURL;
// quora 
let quoraURL = "https://www.quora.com/search?q=" + oneSearch;
let quora = document.querySelector("#quora");
quora.href = quoraURL;


// links for blogs
// medium
let mediumURL = "https://medium.com/search?q=" + oneSearch;
let medium = document.querySelector("#medium");
medium.href = mediumURL;
// hash.node
let hashnodeURL = "https://hashnode.com/search?q=" + oneSearch;
let hashnode = document.querySelector("#hashnode");
hashnode.href = hashnodeURL;
// dev.to
let devtoURL = "https://dev.to/search?q=" + oneSearch;
let devto = document.querySelector("#devto");
devto.href = devtoURL;




});





// for bookmark ////////////////////
function rudr_favorite(a) {
	pageTitle=document.title;
	pageURL=document.location;
	try {
		// Internet Explorer solution
		eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
	}
	catch (e) {
		try {
			// Mozilla Firefox solution
			window.sidebar.addPanel(pageTitle, pageURL, "");
		}
		catch (e) {
			// Opera solution
			if (typeof(opera)=="object") {
				a.rel="sidebar";
				a.title=pageTitle;
				a.url=pageURL;
				return true;
			} else {
				// The rest browsers (i.e Chrome, Safari)
				alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
			}
		}
	}
	return false;
}







let handleOne = document.querySelector("#handleOne").addEventListener('click' , function(){



let google2 = document.querySelector(".google");
let googleall = google2.href



let stack2 = document.querySelector("#stackoverflow");
let stackall = stack2.href



setTimeout(function(){ window.open(stackall); }, 2000);
setTimeout(function(){ window.open(googleall); }, 3000);



});

































