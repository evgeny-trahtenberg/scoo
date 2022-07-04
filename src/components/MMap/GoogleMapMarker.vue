<script>
import { POINT_MARKER_ICON_CONFIG } from "./constants/mapSettings";

export default {
	
	props: {
		google: {
			type: Object,
			required: true
		},
		map: {
			type: Object,
			required: true
		},
		marker: {
			type: Object,
			required: true
		},
		color: {
			type: String,
			default: 'accent'
		},
	},

	mounted() {
		const { Marker } = this.google.maps;

		new Marker({
			position: this.marker.position,
			marker: this.marker,
			map: this.map,
			icon: {
				path: "M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z",
				strokeOpacity: 0.2,
				strokeWeight: 20,
				strokeColor: this.color,
				fillColor: this.color,
				fillOpacity: 0.5,
				scale: 1
			}
		})
	},

	render(h) {
		return h(null)
	},
}
</script>

