<template lang="pug">
	aside.filter_pannel(:class='{isOpen: $store.state.isMobileFilterOpen}')
		.filter_container
			.area_filter
				h6 地區 
					small Area
				ul
					li(v-for='area in areaList')
						label(@click='toggleAreaTag(area)') 
							i.far(:class='area.isSelected ? "fa-check-circle" : "fa-circle"')
							span {{area.name_zh}} 
							small {{area.name_en}} 
							i.counts {{area.contentLength}}
							input(
								type='checkbox',
								v-model='area.isSelected')
			.status_filter
				h6 使用狀態 
					small Status
				ul
					li
						label 
							i.far(:class='rentable ? "fa-check-circle" : "fa-circle"')
							span 可租借 
							small Rentable
							input(
								type='checkbox',
								v-model='rentable'
								)
						// input(
						// 	type='number',
						// 	v-model='rentableAmount')
					li
						label 
							i.far(:class='returnable ? "fa-check-circle" : "fa-circle"')
							span 可歸還 
							small Returnable
							input(
								type='checkbox',
								v-model='returnable'
								)
						// input(
						// 	type='number',
						// 	v-model='returnableAmount')
			.filter_footer
				p 共 {{$store.state.totalLength}} 個站點
				a(
					v-if='tagsList.length !== 0',
					@click='clearAllTags'
				) × clear all
		.tags_container
			.all_tags
				ul
					li(
						v-for='tag in tagsList',
						@click='cancelTag(tag)')
						span {{tag.name_zh}} {{tag.name_en}}
						a ×
</template>
<script>
	export default {
		name: 'filter-pannel',
		methods: {
			toggleAreaTag(area) {
				this.$store.commit('toggleAreaTag', area)
			},
			cancelTag(tag) {
				this.$store.commit('cancelTag', tag)
			},
			clearAllTags() {
				this.$store.commit('clearAllTags')
			}
		},
		computed: {
			areaList() {
				return this.$store.state.areaList 
			},
			tagsList() {
				return this.$store.state.areaList.filter(area => area.isSelected)
			},
			rentable: {
				get() {
					return this.$store.state.rentable
				},
				set() {
					this.$store.commit('toggleRantable')
				}
			},
			returnable: {
				get() {
					return this.$store.state.returnable
				},
				set() {
					this.$store.commit('toggleReturnable')
				}
			}
		},
	}
</script>