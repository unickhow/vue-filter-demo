import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		bikeData: '',
		isLoading: true
	},
	mutations: {
		storeApiData(state, payload) {
			state.bikeData = payload;
			state.isLoading = false
		}
	},
	actions: {
		getApi({commit}) {
			axios.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.gz')
        .then(res => {
					commit('storeApiData', res.data.retVal);
        })
		}
	}
})