# vue-filter-demo

[DEMO](http://vfilter.s3-website-ap-northeast-1.amazonaws.com/)


由於[這週](https://hexschool.github.io/THE_F2E_Design/week2-filter/)主打功能是 Filter，想要找個實用的主題來實作，前後看了國內外的 open api 最後決定拿跟我們生活最親近的 youBike 來做：

* 主要目的是可以查詢所有站點單車的車輛數狀況
* 篩選功能可依行政區、是否可租借及歸還篩出結果
* 再者，套入 google map 延伸應用地圖查詢功能

專案最後有加入搜尋功能，並採用 oncomposition 的方式來優化中文輸入的篩選，但實際效果還不盡理想，整體做完覺得這次的主題比第一週的 Todo List 更需要做 PWA 才對😅


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
