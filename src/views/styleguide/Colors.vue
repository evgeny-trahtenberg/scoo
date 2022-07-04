<template>
	<div>
		<m-page-title
			pageTitle="Colors"
		>
		</m-page-title>
		<div
			class="d-flex flex-wrap gap"
        >
<!-- 			<v-card
				v-for="color in colors"
				:key="color"
				:color="color"
				width="300"
				flat
			>
				<v-card-text>
					<v-row>
						<v-col>
							<h3>{{color}}</h3>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card
					v-for="colorsLevel in colorsLevels"
					:key="colorsLevel"
					:color="color + colorsLevel"
					width="300"
					flat
				>
					<v-card-text>
						<v-row>
							<v-col
								class="text-caption"
							>
								{{color}} {{colorsLevel}}
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-card> -->
				<v-card
					color="red lighten-5"
					width="300"
					flat
				>
					<v-card-text>
						<v-row>
							<v-col
								class="text-caption"
							>
								{{color}} {{colorsLevel}}
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
		</div>
	</div>
</template>

<script>

	import MPageTitle from '@/components/MPageTitle/MPageTitle';

	export default {

	name: 'Colors',

	components: {
		MPageTitle,
	},

	computed: {
		colors () {
			return [
				'red',
				'pink',
				'purple',
				'deep-purple',
				'indigo',
				'blue',
				'light-blue',
				'cyan',
				'teal',
				'green',
				'light-green',
				'lime',
				'yellow',
				'amber',
				'orange',
				'deep-orange',
				'brown',
				'blue-grey',
				'grey',
				'shades',
			]
		},
		colorsLevels () {
			return [
				'lighten-5',
				'lighten-4',
				'lighten-3',
				'lighten-2',
				'lighten-1',
				'darken-1',
				'darken-2',
				'darken-3',
				'darken-4',
				'accent-1',
				'accent-2',
				'accent-3',
				'accent-4',
			]
		},
		
	},

	mounted () {
		console.log(this.allColors);
	},
		
}

</script>