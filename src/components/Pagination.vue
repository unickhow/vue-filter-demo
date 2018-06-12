<template lang="pug">
	#pagination
		ul
			li(
				v-for='i in totalPage',
				@click='changePage(i)',
				:class='{active: i === $store.state.currentPage}')
				a {{i}}
</template>

<script>
	export default {
		computed: {
			totalPage() {
				return this.$store.state.totalPage 
			}
		},
		methods: {
			changePage(to) {
				this.$store.commit('changePage', to)
			}
		}
	}
</script>