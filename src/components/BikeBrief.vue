<template lang="pug">
	.column.is-6-desktop
		article.bike_brief(:class='{disabled: bike.act === "0"}')
			.text_group
				h2 {{bike.sna}} 
				small {{bike.snaen}}
			.text_group.area_tag
				p {{bike.sarea}} 
					small {{bike.sareaen}}
			.text_group
				p {{bike.ar}} 
				small {{bike.aren}}
			.brief_footer
				.available_count
					label 可租借數 Left
					span {{bike.sbi}}
				.empty_count
					label 可歸還數 Vacancy
					span {{bike.bemp}}
</template>

<script>
	export default {
		name: 'bike-brief',
		props: ['bike'],
		data() {
			return {
			}
		},
	}
</script>