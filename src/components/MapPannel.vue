<template lang="pug">
	#map(:class='{open: isMapOpen}')
		.map_header
			a#close_map(@click='closeMap') ×
			h4 {{selectedStop.sna ? selectedStop.sna : '請選擇站點'}}
			small {{selectedStop.snaen ? selectedStop.snaen : 'Please select a stop'}}
			.area_amounts
				label {{selectedStop.sarea ? selectedStop.sarea : '行政區'}}
					small {{selectedStop.sareaen ? selectedStop.sareaen : 'Area'}}
				.amounts
					span.rentable {{selectedStop.sbi}}
					span.returnable {{selectedStop.bemp}}
		.google-map#bike_map

</template>
<script>
	import {mapState} from 'vuex'
	export default {
		name: 'google-map',
		data() {
			return {
				markerCoordinates: {
					latitude: 25.0408578889,
					longitude: 121.567904444
				}
			}
		},
		computed: {
			...mapState(
				['selectedStop', 'isMapOpen']
			)
		},
		watch: {
			selectedStop() {
				this.updateMap()
			}
		},
		methods: {
			updateMap() {
				const el = document.getElementById('bike_map')
				const options = {
					zoom: 14,
					center: new google.maps.LatLng(this.selectedStop.lat ? this.selectedStop.lat : 25.0408578889, this.selectedStop.lng ? this.selectedStop.lng : 121.567904444)
				}

				const map = new google.maps.Map(el, options)

				const position = new google.maps.LatLng(this.selectedStop.lat ? this.selectedStop.lat : 25.0408578889, this.selectedStop.lng ? this.selectedStop.lng : 121.567904444);
				const marker = new google.maps.Marker({ 
					position,
					map
				});
			},
			closeMap() {
				this.$store.commit('closeMap')
			}
		},
		mounted() {
			this.updateMap()
		}
	}
</script>