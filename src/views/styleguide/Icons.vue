<template>
	<div>
		<m-page-title
			pageTitle="Icons"
		>
		</m-page-title>
			<v-data-table
				:items-per-page="14"
				:headers="headers"
				:items="icons"
			>
				<template
					v-slot:item.icon="{ item }"
				>
					<v-icon
						dense
						color="imain"
					>{{item.name}}
					</v-icon>
				</template>
		</v-data-table>
	</div>
</template>

<script>

	import MPageTitle from '@/components/MPageTitle/MPageTitle';

	export default {

		name: 'Icons',

		data () {
			return {
				headers: [
					{
						text: 'Icon',
						align: 'start',
						sortable: false,
						value: 'icon',
					},
					{ text: 'Name', value: 'name' },
				],
				icons: [
					{
						name: 'mdi-bell-outline'
					},
					{
						name: 'mdi-close'
					},
					{
						name: 'mdi-eraser'
					},
					{
						name: 'mdi-data-matrix-scan'
					},
					{
						name: 'mdi-map-marker-outline'
					},
					{
						name: 'mdi-speedometer'
					},
					{
						name: 'mdi-filter-variant'
					},
					{
						name: 'mdi-arrow-up'
					},
					{
						name: 'mdi-arrow-down'
					},
					{
						name: 'mdi-menu'
					},
					{
						name: 'mdi-lock-outline'
					},
					{
						name: 'mdi-lock-open-variant-outline'
					},
					{
						name: 'mdi-checkbox-blank-outline'
					},
					{
						name: 'mdi-checkbox-intermediate'
					},
					{
						name: 'mdi-battery-low'
					},
					{
						name: 'mdi-battery-medium'
					},
					{
						name: 'mdi-battery-high'
					},
					{
						name: 'mdi-battery-outline'
					},
					{
						name: 'mdi-scooter'
					},	
					{
						name: 'mdi-scooter-electric'
					},					
					{
						name: 'mdi-human-scooter'
					},

				],
		}
	},

		components: {
			MPageTitle,
		},

}

</script>