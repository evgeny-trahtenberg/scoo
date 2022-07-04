<template>	
	<div class="m-chip">
			<v-icon
				:color="color"
				left
			>
				{{icon}}
			</v-icon>
		<p class="subtitle-2">{{value}}</p>
	</div>
</template>

<script>

	export default {

		name: 'MChip',

		props: {

			icon: {
				type: String,
				default: 'mdi-scooter'
			},

			color: {
				type: String,
				default: 'main'
			},
	
			value: {
				type: Number,
				default: 0
			},
		},
	}

</script>