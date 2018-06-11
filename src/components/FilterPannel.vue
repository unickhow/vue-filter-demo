<template lang="pug">
	aside.filter_pannel
		.area_filter
			label 地區 
				small Area
			ul
				li
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
		name: 'filter-pannel'
	}
</script>