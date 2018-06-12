<template lang="pug">
	nav#navbar
		.container
			h1 vFilter
			.search_input
				input(
					type='text', 
					v-model='updateKeyword',
					ref='searchInput',
					@compositionstart='composition($event)',
					@compositionupdate='composition($event)',
					@compositionend='composition($event)')
				i.fas.fa-search
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
			}
		},
		methods: {
			composition(e) {
				this.$store.commit('updateKeyword', e.data)
			}
		},
		mounted() {
			const input = this.$refs.searchInput
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