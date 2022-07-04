import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/mdi/css/materialdesignicons.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({

	icons: {
		iconfont: 'mdi'
	},

	theme: {
		themes: {
			light: {
				accent: colors.teal.accent4,
				main: colors.white,
				contrast: colors.grey.darken4,

				error: colors.red.accent2,
				succes: colors.green.darken1,
				danger: colors.orange.accent2,

				low: colors.red.accent2,
				medium: colors.orange.darken2,
				high: colors.green.darken1,

				imain: colors.blueGrey.darken2,
				icontrast: colors.grey.lighten5,

				background: colors.grey.lighten5,
			},
		},
	},

});
