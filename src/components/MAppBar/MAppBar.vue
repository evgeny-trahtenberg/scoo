<template>
	<v-app-bar
		color="teal accent-4"
		dense
		flat
		max-height="48px"
		rounded
	>
		<v-app-bar-nav-icon
			@click="emitOpenDrawer"
		>
			<v-icon
				color="icontrast"
				dense
			>mdi-menu
			</v-icon>
		</v-app-bar-nav-icon>
		<v-spacer></v-spacer>
			<v-badge
				color="negative"
				dot
				overlap
			>
				<v-btn
					icon
				>
					<v-icon
						color="icontrast"
						dense
					>mdi-bell-outline
					</v-icon>
				</v-btn>
			</v-badge>
			<v-btn
				icon
			>
				<v-avatar
					size="24"
				>
					<img
						src="@/assets/john.png"
						alt="John"
					>
				</v-avatar>
			</v-btn> 
	</v-app-bar>
</template>


<script>

	export default {

		name: 'MAppBar',

		methods: {
			emitOpenDrawer () {
				this.$emit('open-drawer');
			} 
		}

}
  
</script>