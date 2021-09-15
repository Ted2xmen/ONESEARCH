let handleSearch = document.querySelector("#search-js").addEventListener('click' , function(e) {
    let searchInput = document.querySelector("#search-input").value;

      event.preventDefault();

  	var oneSearch = searchInput;


	// search info text
	var showBanner = document.querySelector("#show-banner");
	showBanner.innerHTML = ` <span class="deneme">"${oneSearch}"</span> all links are clickable    <i class="bi bi-check-square"></i></span>
`;

	function makeFunction(queryy, selectorr ) {
		let nameURL =  queryy  + oneSearch;
		let isim = document.querySelector( `${selectorr}` );
		isim.href = nameURL;
	};


// search engines

let youtube = "#youtube";
makeFunction( "https://www.youtube.com/results?search_query=", youtube );

let twitter = "#twitter";
makeFunction( "https://twitter.com/search?q=", twitter );

let linkedin = "#linkedin";
makeFunction( "https://www.linkedin.com/search/results/all/?keywords=", linkedin );

let github = "#github";
makeFunction( "https://github.com/search?q=", github );

let google = "#google";
makeFunction( "https://www.google.com/search?q=", google );

let reddit = "#reddit";
makeFunction( "https://www.reddit.com/search/?q=", reddit );

let stackoverflow = "#stackoverflow";
makeFunction( "https://stackoverflow.com/search?q=", stackoverflow );

let quora = "#quora";
makeFunction( "https://www.quora.com/search?q=", quora );

let medium = "#medium";
makeFunction( "https://medium.com/search?q=", medium );

let hashnode = "#hashnode";
makeFunction( "https://hashnode.com/search?q=", hashnode );

let devto = "#devto";
makeFunction( "https://dev.to/search?q=", devto );

});


// for bookmark 
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
