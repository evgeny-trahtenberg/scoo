<template>
	<div>
		<v-data-table
			:items-per-page="14"
			v-model="selected"
			:headers="headers"
			:items="scooters"
			item-key="name"
			show-select
		>
			<template
				v-slot:item.status="{ item }"
			>
				<v-icon
					:color="calcStatusColor(item.status)"
				> {{ calcStatusIcon(item.status) }}
				</v-icon>
			</template>
			<template
				v-slot:item.state="{ item }"
			>
				<m-btn
					:color="item.locked ? 'error' : 'imain'"
					:icon="item.locked ? 'mdi-lock-outline' : 'mdi-lock-open-variant-outline'"
				>
				</m-btn>
			</template>
			<template
				v-slot:item.battery="{ item }"
			>
				<m-chip
					:value="item.levelBattery"
					:color="chip(item.levelBattery).color"
					:icon="chip(item.levelBattery).icon"
				>
				</m-chip>
			</template>
			<template
				v-slot:item.coordinates="{ item }"
			>
				<v-btn
					elevation="1"
					small
					icon
					color="main"
					@click="scooterOnMap(item)"
				>

					<v-icon
						color="imain"
					>
						mdi-map-marker-outline
					</v-icon>
				</v-btn>
			</template>
		</v-data-table>
			<v-dialog
				v-model="dialogScooterOnMap"
				max-width="80vw"
			>
				<v-card>
					<SingleMap class="travel-map"/>
				</v-card>
			</v-dialog>
	</div>
</template>

<script>

import MToolBarDataTableScooter from "@/components/MToolBar/MToolBarDataTableScooter"
import MChip from "@/components/MChip/MChip"
import MBtn from "@/components/MBtn/MBtn"
import SingleMap from "@/components/MMap/SingleMap";
import scooters from "@/views/data/scooters.js"

export default {

	name: 'List',

	components: {
		MChip,
		MBtn,
		SingleMap
	},

	data () {
		return {
			selected: [],
			dialogScooterOnMap: false,
		}
	},

	computed: {

		headers () {
			return scooters.headers;
		},
		
		scooters () {
			return scooters.scooters;
		},
	},

	methods: {

		chip (levelBattery) {
			if (levelBattery > 80)
				return { color: 'succes', icon: 'mdi-battery-high' }
					else if (levelBattery > 30) return { color: 'danger', icon: 'mdi-battery-medium' }
						else return { color: 'error', icon: 'mdi-battery-low' }
		},

		calcStatusColor (status) {
			const map = {
				free: {color: 'succes'},
				use: {color: 'danger'},		
				repair: {color: 'error'}
			};

			return map[status].color;
		},

		calcStatusIcon (status) {
			const map = {
				free: {icon: 'mdi-scooter'},
				use: {icon: 'mdi-human-scooter'},		
				repair: {icon: 'mdi-scooter-electric'}
			};

			return map[status].icon;
		},

		scooterOnMap (item) {
			this.dialogScooterOnMap = true
		},
	},

	mounted () {
		console.log();
	}
}

</script>