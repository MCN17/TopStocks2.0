// Index Buttons
sPButtonEl = document.querySelector(".btn1")
dowJonesButtonEl = document.querySelector(".btn2");
nasdaqButtonEl = document.querySelector(".btn3");
stockTitleEl = document.querySelector(".stockTitle")
goButtonEl = document.querySelector("searchBtn");


// Function that fetches api for displaying if that market is open or closed or not. 
// Displays the status in the far right of the navbar.
function marketStatus () {
    fetch("https://api.polygon.io/v1/marketstatus/now?apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const status = data.market
        console.log(data.market);
        document.querySelector(".statusDisplay").innerHTML = `Market: ${status}`;
    });
}

marketStatus();

// Function that fetches api for info on Vanguard 500 etf that follows the S&P 500.
// function getsP () {
//     fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=VOO&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.tickers[0].day.v);
//         const volume = data.tickers[0].day.v
//         const open = data.tickers[0].day.o
//         const high = data.tickers[0].day.h
//         const low = data.tickers[0].day.l
//         const close = data.tickers[0].day.c
//         document.querySelector(".stockTitle").innerHTML = "Vanguard 500 Index Fund ETF"
//         document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
//         document.querySelector(".open").innerHTML = `Open: ${open}`;
//         document.querySelector(".high").innerHTML = `High: ${high}`;
//         document.querySelector(".low").innerHTML = `Low: ${low}`;
//         document.querySelector(".closer").innerHTML = `Close: ${close}`;
//         saveData()
//     });
// }
// When sP Button is clicked getSp is displayed in the trends card.
// sPButtonEl.addEventListener("click", getsP);

// Function that fetches api for info on SPDR etf that follows the Dow Jones.
// function getDowJones () {
//     fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=DIA&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.tickers[0].day.v);
//         const volume = data.tickers[0].day.v
//         const open = data.tickers[0].day.o
//         const high = data.tickers[0].day.h
//         const low = data.tickers[0].day.l
//         const close = data.tickers[0].day.c
//         document.querySelector(".stockTitle").innerHTML = "SPDR Dow Jones Industrial Average ETF Trust"
//         document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
//         document.querySelector(".open").innerHTML = `Open: ${open}`;
//         document.querySelector(".high").innerHTML = `High: ${high}`;
//         document.querySelector(".low").innerHTML = `Low: ${low}`;
//         document.querySelector(".closer").innerHTML = `Close: ${close}`;
//         saveData();
//     });
// }
// When dowJones Button is clicked getDowJones is displayed in the trends card.
// dowJonesButtonEl.addEventListener("click", getDowJones);

// Function that fetches api for info on QQQ etf that follows the Nasdaq.
// function getNasdaq () {
//     fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=QQQ&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.tickers[0].day.v);
//         const volume = data.tickers[0].day.v
//         const open = data.tickers[0].day.o
//         const high = data.tickers[0].day.h
//         const low = data.tickers[0].day.l
//         const close = data.tickers[0].day.c
//         document.querySelector(".stockTitle").innerHTML = "Invesco QQQ Trust Series 1"
//         document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
//         document.querySelector(".open").innerHTML = `Open: ${open}`;
//         document.querySelector(".high").innerHTML = `High: ${high}`;
//         document.querySelector(".low").innerHTML = `Low: ${low}`;
//         document.querySelector(".closer").innerHTML = `Close: ${close}`;
//         saveData();
//     });
// }
// When nasdaq Button is clicked getNasdaq is displayed in the trends card.
// nasdaqButtonEl.addEventListener("click", getNasdaq);



//Function that fetches api for information on the current gainers in the stock market
//Fetched info is displayed in the Top Stocks Card.
fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=false&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE")
  .then(response => response.json())
  .then(data => {
    console.log(data.tickers[0])
    document.getElementById('a1').textContent = data.tickers[10].ticker
    document.getElementById('a2').textContent = `$ ${data.tickers[10].day.c}`
    document.getElementById('a3').textContent = `% ${data.tickers[10].todaysChangePerc.toFixed(2)}`
    document.getElementById('a4').textContent = data.tickers[10].day.v
    document.getElementById('b1').textContent = data.tickers[11].ticker
    document.getElementById('b2').textContent = `$ ${data.tickers[11].day.c}`
    document.getElementById('b3').textContent = `% ${data.tickers[11].todaysChangePerc.toFixed(2)}`
    document.getElementById('b4').textContent = data.tickers[11].day.v
    document.getElementById('c1').textContent = data.tickers[12].ticker
    document.getElementById('c2').textContent = `$ ${data.tickers[12].day.c}`
    document.getElementById('c3').textContent = `% ${data.tickers[12].todaysChangePerc.toFixed(2)}`
    document.getElementById('c4').textContent = data.tickers[12].day.v
    document.getElementById('d1').textContent = data.tickers[13].ticker
    document.getElementById('d2').textContent = `$ ${data.tickers[13].day.c}`
    document.getElementById('d3').textContent = `% ${data.tickers[13].todaysChangePerc.toFixed(2)}`
    document.getElementById('d4').textContent = data.tickers[13].day.v
  })

// Function that fetches an api for news on a particular stock that is searched by the user.
// Links to different news articles are then displayed in the News Card.

const newsTicker = (ev)=>{
    ev.preventDefault();
    let ticker1 =  document.getElementById('searchText').value.toUpperCase(); 
    var newsApi = 'https://api.polygon.io/v2/reference/news?ticker=';
    var newsApiKey = '&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE';
    var final = newsApi + ticker1 + newsApiKey;
     fetch(final)
     .then(response => response.json())
     .then(data => {

        // document.getElementById('z1').textContent = data.results[0].title
        // document.getElementById('z2').textContent = data.results[1].title
        // document.getElementById('z3').textContent = data.results[2].title
        // document.getElementById('z4').textContent = data.results[3].title
        // document.getElementById('z5').textContent = data.results[4].title
        // saveNews(); 
                 
        //Need to fix this function--> once saved to local storage the news for a specific stock won't change if user searches a new stock.

        document.getElementById('link1').innerHTML = data.results[0].title
        document.getElementById('link2').innerHTML = data.results[1].title
        document.getElementById('link3').innerHTML = data.results[2].title
        document.getElementById('link4').innerHTML = data.results[3].title
        document.getElementById('link5').innerHTML = data.results[4].title
        document.getElementById('link6').innerHTML = data.results[5].title
        document.getElementById('link7').innerHTML = data.results[6].title
        document.getElementById('link8').innerHTML = data.results[7].title
        document.getElementById('link1').href = data.results[0].article_url 
        document.getElementById('link2').href = data.results[1].article_url 
        document.getElementById('link3').href = data.results[2].article_url 
        document.getElementById('link4').href = data.results[3].article_url 
        document.getElementById('link5').href = data.results[4].article_url 
        document.getElementById('link6').href = data.results[5].article_url 
        document.getElementById('link7').href = data.results[6].article_url 
        document.getElementById('link8').href = data.results[7].article_url 

     })
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('searchBtn').addEventListener('click', newsTicker);
});


// Function that fetches an api for information on a specific stock that is searched by the user.
// Information on that stock is then displayed in the same card as trends card
const indexTicker = (ev)=>{
    ev.preventDefault();
    let indexTicker1 =  document.getElementById('searchText').value.toUpperCase(); 
    var indexApi = 'https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=';
    var indexApiKey = '&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE';
    var final = indexApi + indexTicker1 + indexApiKey;
     fetch(final)
     .then(response => response.json())
     .then(data => {
        document.getElementById('stockTitle').textContent = data.tickers[0].ticker
        const volume = data.tickers[0].day.v
        const open = data.tickers[0].day.o
        const high = data.tickers[0].day.h
        const low = data.tickers[0].day.l
        const close = data.tickers[0].day.c
        document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
        document.querySelector(".open").innerHTML = `Open: $${open}`;
        document.querySelector(".high").innerHTML = `High: $${high}`;
        document.querySelector(".low").innerHTML = `Low: $${low}`;
        document.querySelector(".closer").innerHTML = `Close: $${close}`;
        saveData();
     })
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('searchBtn').addEventListener('click', indexTicker);
});

const tickerDetails = (ev)=>{
  ev.preventDefault();
  let indexTicker2 =  document.getElementById('searchText').value.toUpperCase(); 
  var indexApi = `https://api.polygon.io/v3/reference/tickers/${indexTicker2}?=`;
  var indexApiKey = '&apiKey=brtbbSwEG9PunzaxnWZkCOLrdY0ckIyE';
  var final = indexApi + indexApiKey;
   fetch(final)
   .then(response => response.json())
   .then(data => {
      const description = data.results.description
      console.log(data.results);
      const logo = data.results.branding.logo_url
      document.querySelector(".description").innerHTML = `${description}`
      document.querySelector(".logo").innerHTML = `${logo}`;
   })
}
document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('searchBtn').addEventListener('click', tickerDetails);
});



// These functions are for saving information on the indexes/stocks searched by the user to Local Storage.
function saveData () {
  var text = $("#stock-info")[0].textContent;
  localStorage.setItem("Stock", text)
}

// function saveNews () {
//   var text = $("#table")[0].textContent;    //Need to fix this function--> once saved to local storage the news for a specific stock won't change if user searches a new stock.
//   localStorage.setItem("news", text)
// }

//Allows the information displayed to persist if user refreshes the page.
document.getElementById("stockTitle").innerHTML = localStorage.getItem("Stock");
// document.getElementById("table").innerHTML = localStorage.getItem("news");    //Need to fix this or the function above--> once saved to local storage the news for a specific stock won't change if user searches a new stock.

// Function that fetches an api for the current time.
// Current time is displayed in center of the navbar.
 function time () {
    fetch("https://worldtimeapi.org/api/ip%22")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const time = data.datetime.slice(11,19)
      console.log(data.datetime);
      document.querySelector(".timeDisplay").innerHTML = `Time: ${time}`;

    });
  };
  time ()