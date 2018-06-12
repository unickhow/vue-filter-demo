<template lang="pug">
	aside.filter_pannel
		.area_filter
			label 地區 
				small Area
			ul
				li(v-for='area in areaList')
					i.far.fa-circle
					label {{area.name_zh}} {{area.name_en}}
						input(type='checkbox')
		.status_filter
			label 使用狀態 
				small Status
			ul
				li
					i.far.fa-circle
					label 可租借 Rentable
						input(type='checkbox')
				li
					i.far.fa-check-circle
					label 可歸還 Returnable
						input(type='checkbox')
</template>
<script>
	export default {
		name: 'filter-pannel',
		computed: {
			areaList() {
				return this.$store.state.areaList 
			}
		},
	}
</script>