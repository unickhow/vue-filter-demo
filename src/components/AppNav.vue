<template lang="pug">
	nav#navbar
		.container
			h1 vFilter
			.mode-switch(@click='switchMode')
				i.fas.fa-th-list(v-if='viewMode === "map"')
				i.fas.fa-map-marked-alt(v-else)
			.search_input
				input(
					type='text', 
					v-model='updateKeyword',
					ref='searchInput',
					:disabled='viewMode === "map"',
					@compositionstart='composition($event)',
					@compositionupdate='composition($event)',
					@compositionend='composition($event)')
				i.fas(
					:class='$store.state.searchKeyword === "" ? "fa-search" : "fa-times"',
					@click='clearSearchInput')
</template>

<script>
	export default {
		computed: {
			updateKeyword: {
				get() {
					return this.$store.state.searchKeyword
				},
				set(newInput) {
					this.$store.commit('updateKeyword', newInput)
				}
			},
			viewMode() {
				return this.$store.state.viewMode
			}
		},
		methods: {
			composition(e) {
				this.$store.commit('updateKeyword', e.data)
			},
			clearSearchInput() {
				this.$store.commit('clearSearchInput')
			},
			switchMode() {
				if (this.viewMode === 'list') {
					this.$store.commit('switchMode', 'map')
					this.$router.push('/map')
				} else {
					this.$store.commit('switchMode', 'list')
					this.$router.push('/')
				}
			}
		},
		mounted() {
			const input = this.$refs.searchInput
			const path = this.$route.path

			if (path === '/') {
				this.$store.commit('switchMode', 'list')
			} else if (path === '/map') {
				this.$store.commit('switchMode', 'map')
			}
			
			// input.addEventListener('compositionstart', e => {
			// 	console.log(`start: ${e.data}`)
			// })
			// input.addEventListener('compositionupdate', e => {
			// 	console.log(`update: ${e.data}`)
			// })
			// input.addEventListener('compositionend', e => {
			// 	console.log(`end: ${e.data}`)
			// })
		}
	}
</script>