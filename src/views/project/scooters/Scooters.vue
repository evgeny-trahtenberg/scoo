<template>
	<div>
		<v-toolbar
			flat
			rounded
			dense
		>
			<v-tabs
				center-active
				color="teal darken-3"
			>
				<v-tab
					v-for="tab in tabs"
					:key="tab.name"
					:to="tab.link"
				>
					<v-icon
						left
						:color="tab.color"
					>
						{{ tab.icon }}
					</v-icon> {{ tab.name }}
				</v-tab>
			</v-tabs>
			<v-spacer/>
			<m-scooter-list-info-panel/>
		</v-toolbar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</div>
</template>

<script>

import MScooterListInfoPanel from '@/components/MToolBar/MScooterListInfoPanel/MScooterListInfoPanel'

export default {

	name: 'Scooters',

	components: {

	MScooterListInfoPanel,

	},

	computed: {

		tabs () {
			return {
				list: {
					name: 'Scooters list',
					color: 'imain',
					icon: 'mdi-scooter',
					link:'/scooters/foo/List'
				},
				map: {
					name: 'Maps',
					color: 'imain',
					icon: 'mdi-map-marker-outline',
					link:'/scooters/foo/Maps'
				},
			}
		},
	},
}

</script>