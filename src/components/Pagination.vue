<template lang="pug">
	#pagination
		ul
			li(
				@click='changePage(1)',
				:class='{active: 1 === currentPage}')
				a 1
			li(v-if='currentPage >= 5 && totalPage >= 8')
				a
					i.fas.fa-ellipsis-h
			li(
				v-if='i !== 1 && i !== totalPage && ((totalPage > 8 && (currentPage - i <= 2 && i - currentPage <= 2)) || ( i <= 6 && currentPage <=4 ) || ( totalPage - i <= 5 && totalPage - currentPage <= 3 ))',
				v-for='i in totalPage',
				@click='changePage(i)',
				:class='{active: i === currentPage}')
				a {{i}}
			li(v-if='totalPage - currentPage > 3 && totalPage >= 8')
				a
					i.fas.fa-ellipsis-h
			li(
				v-if='totalPage !== 1',
				@click='changePage(totalPage)',
				:class='{active: totalPage === currentPage}')
				a {{totalPage}}
</template>

<script>
	export default {
		computed: {
			totalPage() {
				return this.$store.state.totalPage 
			},
			currentPage() {
				return this.$store.state.currentPage 
			}
		},
		methods: {
			changePage(to) {
				this.$store.commit('changePage', to)
			}
		}
	}
</script>