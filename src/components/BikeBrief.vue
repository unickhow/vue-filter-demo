<template lang="pug">
	article.bike_brief
		p {{bike.sna}} 
			small {{bike.snaen}}
		p {{bike.sarea}} 
			small {{bike.sareaen}}
		p {{bike.ar}} 
			small {{bike.aren}}
		p 可租借數：{{bike.sbi}}
		p 可歸還數：{{bike.bemp}}
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