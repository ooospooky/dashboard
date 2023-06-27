# Dashboard
<a href="https://dashboard-3daad.web.app//">Check Out My Project!</a>

## 🛠 Tools
React | Typescript | Scss | Highcharts | Firebase

## Issue
在fetch https://od.moi.gov.tw/api/v1/rest/datastore 時遇到CORS error，嘗試多種方式像在package.json中加入
```
"proxy": "https://od.moi.gov.tw",
```
但還是沒有解決，後來嘗試Firebase Cloud Function
```
// create HTTP Cloud Function
exports.exampleFunction = functions.https.onRequest((request, response) => {
  // set CORS head
  response.set('Access-Control-Allow-Origin', '*');

  // 返回 JSON 
  response.json({ message: 'Hello from Cloud Functions!' });
});
```
目前還在解決中，若要開啟Project，要麻煩使用chrome擴充功能 <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Allow CORS: Access-Control-Allow-Origin </a>並在頁面上開啟