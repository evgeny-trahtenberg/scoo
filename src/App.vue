<template>
	<v-app
		app
	>
		<m-navigation-drawer
			:visible="drawerVisible"
			@close="handleCloseDrawer"
		/>
		<m-app-bar
			@open-drawer="handleOpenDrawer"
		/>
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>

	import MAppBar from '@/components/MAppBar/MAppBar';
	import MNavigationDrawer from '@/components/MNavigationDrawer/MNavigationDrawer';

	export default {

		name: 'App',

		components: {
			MAppBar,
			MNavigationDrawer,
		},

		data: () => ({
			drawerVisible: false,
		}),

		methods: {
			handleOpenDrawer () {
				this.drawerVisible=true;
			},
			handleCloseDrawer () {
				this.drawerVisible=false;
			},
		}
}
  
</script>
