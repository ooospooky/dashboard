# Dashboard
<a href="https://dashboard-3daad.web.app//">Check Out My Project!</a>

## 🛠 Tools
React | Typescript | Scss | Highcharts | Firebase

## ~Issue~ Fixed
6/30更新：

Doc上的舊API，會遇到cors問題，平台在備註欄增加了新的API路徑https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/yyy
即可避免cors

---

在fetch https://od.moi.gov.tw/api/v1/rest/datastore 時遇到CORS error，嘗試多種方式像在package.json中加入
```
"proxy": "https://od.moi.gov.tw",
```
但還是沒有解決，後來嘗試Firebase Cloud Function仍然沒能解決
```
// create HTTP Cloud Function
exports.exampleFunction = functions.https.onRequest((request, response) => {
  // set CORS head
  response.set('Access-Control-Allow-Origin', '*');

  // 返回 JSON 
  response.json({ message: 'Hello from Cloud Functions!' });
});


```
