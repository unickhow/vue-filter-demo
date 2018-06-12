import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		bikeData: '',
		isLoading: true,
		areaList: []
	},
	mutations: {
		storeApiData(state, payload) {
			state.bikeData = payload
			state.isLoading = false
			state.areaList = [...new Set(payload.map(bike => bike.sarea))]
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