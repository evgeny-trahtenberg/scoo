<template>
	<div
		class="slider-img"
	>
		<div
			class="slider-content"
		>
			<div
				class="text-h2"
			>
				ScoO
			</div>
			<h1
				class="text-h1"
			>
				Design system
			</h1>
			<v-row
				class="gap"
			>
			<v-chip
				outlined
				color="teal lighten-4"
				v-for="link in links"
				:key="link.name"
				:to="link.link"
			>
				{{ link.name }}
			</v-chip>
			</v-row>
		</div>
	</div>	
</template>

<script>

	export default {

		name: 'Home',

		components: {
		},

		computed: {
			links () {
				return {
					app: {
						name: 'App',
						link:'/scooters/foo/List'
					},
					styleGuide: {
						name: 'Style Guide',
						link:'/scooters/foo/List'
					},
					components: {
						name: 'Components',
						link:'/scooters/foo/List'
					},
				}
			}
		}
	}

</script>
 