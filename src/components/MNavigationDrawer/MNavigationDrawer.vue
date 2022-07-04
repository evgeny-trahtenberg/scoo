<template>
	<v-navigation-drawer
		v-model="drawerVisible"
		absolute
		temporary
		@input="emitCloseDrawer"	
	>
		<v-list
			nav
			dense
		>
			<v-list-item-group
				v-model="group"
				active-class="teal lighten-4"
			>
				<router-link
					v-for="link in links"
					:key="link.name"
					:to="link.link"
				>
					<v-list-item>
						<v-list-item-title>
							{{ link.name }}
						</v-list-item-title>
					</v-list-item>
				</router-link>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	
	export default {

		name: 'MNavigationDrawer',

		props: {
			visible: {
				default: false,
				type: Boolean,
			}
		},

		data: () => ({
			group: null,
			drawerVisible: false,
		}),

		computed: {
			links () {
				return {
					Home: {
						name: 'Home',
						link:'/'
					},
					Scooterlist: {
						name: 'App',
						link:'/scooters/foo/List'
					},
					Icons: {
						name: 'Icons',
						link:'/styleguide/icons'
					},
					Colors: {
						name: 'Colors',
						link:'/styleguide/colors'
					},
					Typography: {
						name: 'Typography',
						link:'/styleguide/typography'
					},
				}
			},
		},

		watch: {
			visible (state) {
				this.drawerVisible=state;
			}
		},

		methods: {
			emitCloseDrawer(state){
				if (!state) {
					this.$emit('close');
				}
			}
		}
}
	
</script>