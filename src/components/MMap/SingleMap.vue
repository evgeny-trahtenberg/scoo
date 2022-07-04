<template>
	<GoogleMapLoader
		:mapConfig="mapConfig"
		apiKey=""
	>
		<template slot-scope="{ google, map }">
			<GoogleMapMarker
				v-for="marker in markers"
				:key="marker.id"
				:marker="marker"
				:google="google"
				:map="map"
				:color="calcMarkerColor(marker.status)"
			/>
		</template>
	</GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader"
import GoogleMapMarker from "./GoogleMapMarker"
import scooters from '@/views/data/scooters.js'
import { mapSettings } from "./constants/mapSettings";

export default {
	components: {
		GoogleMapLoader,
		GoogleMapMarker,
	},

	props: {
		marker: {
			type: String,
			default: 'main'
		},
	},

	data() {
		return {
			markers: scooters.scooters,
		};
	},

	computed: {

		mapConfig() {
			return {
				...mapSettings,
				center: this.mapCenter
			};
		},

		mapCenter() {
			return this.markers[1].position;
		}
	},

	methods: {

		calcMarkerColor (status) {
			const map = {
				free: {
					color: 'green',
				},
				use: {
					color: 'orange',
				},		
				repair: {
					color: 'red',
				}
			};

			return map[status].color;
		}
	},
}
</script>
