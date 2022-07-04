<template>
	<div class="panel-main-wrap">
		<v-btn-toggle
			v-model="toggle_exclusive"
			group
			borderless
		>
			<v-tooltip
				bottom
				color="blue-grey lighten-3"
				open-delay="600"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						icon
						small
						elevation="1"
						active-class
						@click.prevent="$router.push({ path: 'list' })"
						>
						<v-icon
							color="imain"
						>
							mdi-scooter
						</v-icon>
					</v-btn>
				</template>
				<span>Scooter List</span>
			</v-tooltip>
			<v-tooltip
				bottom
				color="blue-grey lighten-3"
				open-delay="600"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						icon
						small
						elevation="1"
						active-class
						@click.prevent="$router.push({ path: 'maps' })"
						>
						<v-icon
							color="imain"
						>
							mdi-map-marker-outline
						</v-icon>
					</v-btn>
				</template>
				<span>Scooter List</span>
			</v-tooltip>
		</v-btn-toggle>
	</div>
</template>

<script>
	
		export default {

		name: 'MScooterListActionPanel',

		data () {
			return {
				toggle_exclusive: undefined,
			}
		},

	}

</script>
