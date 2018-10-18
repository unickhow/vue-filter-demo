<template lang="pug">
  main.geo-map
    .map-container
      #geo-map
</template>

<script>
  export default {
    name: 'Geo-map',
    methods: {
      getLocation() {
        let latlng = { lat: 25.046891, lng: 121.516602 }; // 給一個初始位置
        let map = new google.maps.Map(document.getElementById('geo-map'), {
            zoom: 16, //放大的倍率
            center: latlng //初始化的地圖中心位置
        });

        const stopsMarker = this.allStops.map((stop, index) => {
          return {
            position: {
              lat: parseFloat(stop.lat),
              lng: parseFloat(stop.lng)
            },
            rent: stop.sbi,
            return: stop.bemp
          }
        })

        // locate user's marker
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let userPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            const marker = new google.maps.Marker({
              position: userPos,
              icon: {
                url: 'https://cdn1.iconfinder.com/data/icons/pretty-office-part-13-shadow-style/512/user-green.png',
                scaledSize: new google.maps.Size(40, 40)
              },
              map: map
            });
            map.setZoom(16);
            map.setCenter(userPos);

            const userPosition = new google.maps.LatLng(userPos.lat, userPos.lng)
            stopsMarker.forEach(stop => {
              const stopPosition = new google.maps.LatLng(stop.position.lat, stop.position.lng)
              const distance = (google.maps.geometry.spherical.computeDistanceBetween(userPosition, stopPosition) / 1000).toFixed(2)

              // mark stop within 1km from user's location
              if (distance < 1) {
                const stopMarker = new google.maps.Marker({
                  position: stopPosition,
                  label: {
                    text: `${stop.rent}/${stop.return}`,
                  },
                  map: map
                });
              }
            });
          });
        } else {
            // Browser doesn't support Geolocation
          alert("您的瀏覽器未支援定位服務！");
          stopsMarker.forEach(stop => {
            const stopMarker = new google.maps.Marker({
              position: stop.position,
              label: stop.label,
              map: map
            });
          });
          
        }
      }
    },
    computed: {
      allStops() {
        return this.$store.state.bikeData
      }
    },
    mounted() {
      this.getLocation()
    }
  }
</script>
