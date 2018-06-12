import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		isMobileFilterOpen: false,
		bikeData: [],
		searchKeyword: '',
		isLoading: true,
		areaList: [
			{
				isSelected: false,
				name_en:"Xinyi Dist.",
				name_zh:"信義區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Daan Dist.",
				name_zh:"大安區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Zhongshan Dist.",
				name_zh:"中山區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Songshan Dist.",
				name_zh:"松山區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Nangang Dist.",
				name_zh:"南港區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Zhongzheng Dist.",
				name_zh:"中正區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Wanhua Dist.",
				name_zh:"萬華區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Wenshan Dist.",
				name_zh:"文山區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Datong Dist.",
				name_zh:"大同區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Shilin Dist.",
				name_zh:"士林區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Neihu Dist.",
				name_zh:"內湖區",
				contentLength: 0
			},
			{
				isSelected: false,
				name_en:"Beitou Dist.",
				name_zh:"北投區",
				contentLength: 0
			}
		],
		pageStart: 1,
		currentPage: 1,
		pageSize: 10,
		totalPage: 0
	},
	getters: {
		selectedTags: state => {
			return state.areaList.filter(area => area.isSelected)
		},
		filteredData: state => {
			let finalData = []
			// search keyword filter
			finalData = state.searchKeyword === '' ? state.bikeData : state.bikeData.filter(bike => {
				let tempStr = JSON.stringify(bike)
				if (tempStr.match(new RegExp(state.searchKeyword, 'i')) !== null) return true
			})

			// compute content of each area
			state.areaList.forEach(area => {
				let count = 0
				finalData.forEach(bike => {
					if (bike.sarea === area.name_zh) count++
				})
				area.contentLength = count
			})

			// checkbox filters
			finalData = store.getters.selectedTags.length === 0 ? finalData : finalData.filter(bike => store.getters.selectedTags.some(tag => tag.name_zh === bike.sarea))
			state.totalPage = Math.ceil(finalData.length / state.pageSize)

			// pagination
			let start = (state.currentPage - 1) * state.pageSize
			let end = start + state.pageSize

			return finalData.slice(start, end)
		}
	},
	mutations: {
		changePage(state, to) {
			state.currentPage = to
			store.commit('scrollToTop')
		},
		mobileToggleFilter(state) {
			state.isMobileFilterOpen = !state.isMobileFilterOpen
		},
		updateKeyword(state, input) {
			state.searchKeyword = input
		},
		storeApiData(state, apiData) {
			state.bikeData = apiData.sort((a, b) => a.sarea - b.sarea)
			state.isLoading = false
		},
		toggleAreaTag(state, area) {
			area.isSelected = !area.isSelected
			state.currentPage = 1
			store.commit('scrollToTop')
		},
		cancelTag(state, tag) {
			tag.isSelected = false
			state.currentPage = 1
			store.commit('scrollToTop')
		},
		scrollToTop() {
			const scrollHeight = window.scrollY
      const scrollStep = Math.PI / ( 500 / 15 )
			const cosParameter = scrollHeight / 2
			let scrollCount = 0
      let scrollMargin
			const scrollInterval = setInterval( function() {
					if ( window.scrollY != 0 ) {
							scrollCount = scrollCount + 1
							scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep )
							window.scrollTo( 0, ( scrollHeight - scrollMargin ) )
					} 
					else clearInterval(scrollInterval)
			}, 15 )
		}
	},
	actions: {
		getApi({commit}) {
			axios.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.gz')
        .then(res => {
					let oriData = res.data.retVal
					let dataArr = []
					for (const key in oriData) {
						dataArr.push(oriData[key])
					}
					commit('storeApiData', dataArr);
        })
		}
	}
})