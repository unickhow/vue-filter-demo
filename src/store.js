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

			// find repeat object{} in array
			payload = payload.filter((bike, index, self) =>
				index === self.findIndex((t) => (
					t.sarea === bike.sarea && t.sareaen === bike.sareaen
				))
			)

			let areaArray = payload.map(bike => {
				return {
					name_zh: bike.sarea,
					name_en: bike.sareaen,
					isSelected: false
				}
			})
			state.areaList = [...new Set(areaArray)]
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