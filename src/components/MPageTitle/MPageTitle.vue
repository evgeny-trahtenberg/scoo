<template>
	<v-container>
		<div
			class="page-title"
			color="#FFF"
		>
			{{pageTitle}}
		</div>
	</v-container>
</template>

<script>

	export default {

		name: 'm-page-title',

		props: {
			pageTitle: {
				type: String,
				default: 'Page Title'
			},
			
		},
	
}

</script>