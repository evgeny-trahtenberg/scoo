<template>	
	<v-btn
		icon
		small
		elevation="1"
	>
		<v-icon
			:color="color"
		>
			{{icon}}
		</v-icon>
	</v-btn>
</template>

<script>

	export default {

		name: 'MBtn',

		props: {

			icon: {
				type: String,
				default: 'mdi-scooter'
			},

			color: {
				type: String,
				default: 'main'
			},
		},
	}

</script>