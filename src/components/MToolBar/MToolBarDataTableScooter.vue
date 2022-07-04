<template>
	<v-toolbar
		dense
		flat
		max-height="48px"
		rounded
	>
			<v-spacer/>
		<m-scooter-list-info-panel/>
	</v-toolbar>
</template>

<script>

	import MScooterListInfoPanel from './MScooterListInfoPanel/MScooterListInfoPanel'

	export default {
		
		name: 'MToolBarDataTableScooter',

		components: {
			MScooterListInfoPanel,
		},

	}
	
</script>