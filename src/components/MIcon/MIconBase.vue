<template>
	<div
		:color="color"
		:class="color"
		:width="computedSize" 
		:height="computedSize"
	>
		<svg xmlns="http://www.w3.org/2000/svg" 
			:viewBox="viewBox" 
			:aria-labelledby="name"
		>
			<title
				:id="name"
				lang="en"
			>{{name}}
			</title>
			<component
				v-bind:is="name"
			>    
			</component>
		</svg>
	</div>
</template>

<script>

import MIconBell from './Elements/MIconBell.vue';
import MIconClose from './Elements/MIconClose.vue';
import MIconErase from './Elements/MIconErase.vue';
import MIconScaner from './Elements/MIconScaner.vue';
import MIconGpsPoint from './Elements/MIconGpsPoint.vue';
import MIconSpeedMetr from './Elements/MIconSpeedMetr.vue';
import MIconFilters from './Elements/MIconFilters.vue';
import MIconArrowDownAction from './Elements/MIconArrowDownAction.vue';
import MIconBurger from './Elements/MIconBurger.vue';
import MIconLocked from './Elements/MIconLocked.vue';
import MIconUnlocked from './Elements/MIconUnlocked.vue';
import MIconCheckbox from './Elements/MIconCheckbox.vue';
import MIconCheckboxChecked from './Elements/MIconCheckboxChecked.vue';
import MIconMapPoint from './Elements/MIconMapPoint.vue';
import MIconArrowUpSort from './Elements/MIconArrowUpSort.vue';
import MIconArrowDownSort from './Elements/MIconArrowDownSort.vue';
import MIconStatus from './Elements/MIconStatus.vue';
import MIconBatteryEmpty from './Elements/MIconBatteryEmpty.vue';
import MIconBatteryDanger from './Elements/MIconBatteryDanger.vue';
import MIconBatteryMiddle from './Elements/MIconBatteryMiddle.vue';
import MIconBatteryFull from './Elements/MIconBatteryFull.vue';
import MIconScooter from './Elements/MIconScooter.vue';
import ICONS from './Elements/icons.js'

	const SIZE_MAP = {
		sm: 16,
		md: 24,
		lg: 32
	};

export default {

	components: {
		MIconBell,
		MIconClose,
		MIconErase,
		MIconScaner,
		MIconGpsPoint,
		MIconSpeedMetr,
		MIconFilters,
		MIconArrowDownAction,
		MIconBurger,
		MIconLocked,
		MIconUnlocked,
		MIconCheckbox,
		MIconCheckboxChecked,
		MIconMapPoint, 
		MIconArrowUpSort,
		MIconArrowDownSort,
		MIconStatus,
		MIconBatteryEmpty,
		MIconBatteryDanger,
		MIconBatteryMiddle,
		MIconBatteryFull,
		MIconScooter
	},

	props: {
		color: {
			type:String,
			default: 'main'
		},
		viewBox: {
			type:String,
			default: '0 0 16 16'
		},
		name: {
			type: String,
			default: ''
		},
		size: { 
			type: String,
			default: 'sm'
		},
	},

	computed: {
		computedSize () {
			return SIZE_MAP[this.size];
		},
		computedClass () {
			return SIZE_MAP[this.size];
		},
	},

	mounted () {
		console.log('${size}');
	},
}

</script>