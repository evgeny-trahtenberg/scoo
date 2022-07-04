<template>
	<div>
		<m-page-title
		pageTitle="Buttons"
	>
		</m-page-title>
		<v-row
			align="center"
			justify="space-around"
		>
			<v-btn
				color="imain"
				icon
				x-small
				elevation="1"
			>
				<v-icon>mdi-scooter</v-icon>
			</v-btn>
			<v-btn
				color="imain"
				icon
				small
				elevation="1"
			>
				<v-icon>mdi-scooter</v-icon>
			</v-btn>
			<v-btn
				color="imain"
				icon
				large
				loading
				elevation="1"
			>
				<v-icon>mdi-scooter</v-icon>
			</v-btn>
			<v-btn
				color="imain"
				icon
				x-large
				elevation="1"
			>
				<v-icon>mdi-scooter</v-icon>
			</v-btn>
		</v-row>
		<v-row
			align="center"
			justify="space-around"
		>
			<v-btn
				color="main"
				depressed
				elevation="1"
			>
				Normal
			</v-btn>
			<v-btn
				depressed
				color="succes"
			>
				Succes
			</v-btn>
			<v-btn
				depressed
				color="error"
			>
				Error
			</v-btn>
			<v-btn
				depressed
				disabled
			>
				Disabled
			</v-btn>
		</v-row>
	</div>
</template>

<script>

	import MPageTitle from '@/components/MPageTitle/MPageTitle';

	export default {
		
		name: 'Buttons',

		components: {
			MPageTitle,
		}

	}
	
</script>