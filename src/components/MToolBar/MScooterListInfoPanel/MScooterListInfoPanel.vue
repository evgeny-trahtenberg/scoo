<template>
	<div class="panel-main-wrap">
		<template
			v-for="(chip, status) in chips"
		>
			<m-chip
				:key="status"
				:icon="chip.icon"
				:value="totalByStatus(status)"
				:color="chip.color"
			>
			</m-chip>
		</template>
	</div>
</template>

<script>

	import scooters from '@/views/data/scooters.js'
	import MChip from '@/components/MChip/MChip'

	export default {

		name: 'MScooterListInfoPanel',

		components: {
			MChip,
		},

		computed: {

			scooters () {
				return scooters.scooters;
			},

			chips () {
				return {
					free: {
						color: 'succes',
						icon: 'mdi-scooter'
					},
					use: {
						color: 'danger',
						icon: 'mdi-human-scooter'
					},		
					repair: {
						color: 'error',
						icon: 'mdi-scooter-electric'
					}
				}
			},
		},

		methods: {

			totalByStatus (status) {

				return this.scooters.reduce((sum, elem) => {
					const temp = elem.status == status ? 1 : 0;
					return sum + temp;
				}, 0);
			}
		},

		// mounted () {

		// 	const statuses = ['use', 'free', 'repair'].forEach((status) => {
		// 		console.log(status, this.totalByStatus(status));
		// 	})
		// },
	}

</script>