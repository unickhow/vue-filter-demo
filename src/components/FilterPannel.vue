<template lang="pug">
	aside.filter_pannel
		.area_filter
			h6 地區 
				small Area
			ul
				li(v-for='area in areaList')
					i.far(:class='area.isSelected ? "fa-check-circle" : "fa-circle"')
					label {{area.name_zh}} 
						small {{area.name_en}}
						input(
							type='checkbox',
							v-model='area.isSelected')
		.status_filter
			h6 使用狀態 
				small Status
			ul
				li
					i.far(:class='rentable ? "fa-check-circle" : "fa-circle"')
					label 可租借 
						small Rentable
						input(
							type='checkbox',
							v-model='rentable'
							)
				li
					i.far(:class='returnable ? "fa-check-circle" : "fa-circle"')
					label 可歸還 
						small Returnable
						input(
							type='checkbox',
							v-model='returnable'
							)
</template>
<script>
	export default {
		name: 'filter-pannel',
		data() {
			return {
				rentable: false,
				returnable: false
			}
		},
		computed: {
			areaList() {
				return this.$store.state.areaList 
			}
		},
	}
</script>