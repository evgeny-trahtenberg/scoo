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
			<GoogleMapLine
				v-for="line in lines"
				:key="line.id"
				:path.sync="line.path"
				:google="google"
				:map="map"
			/>
		</template>
	</GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader"
import GoogleMapMarker from "./GoogleMapMarker"
import GoogleMapLine from "./GoogleMapLine"
import scooters from '@/views/data/scooters.js'

import { mapSettings } from "./constants/mapSettings";

export default {
	components: {
		GoogleMapLoader,
		GoogleMapMarker,
		GoogleMapLine
	},

	data() {
		return {
			
			markers: scooters.scooters,

			lines: [
				{
					id: "1",
					path: [{ lat: 49.82420935735316, lng: 24.021308433777634 }, { lat: 49.82566286062619, lng: 24.022080910757218 }]
				},
			]
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
