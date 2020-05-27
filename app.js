// Global layout
import css from '~/assets/css/common.css?module'
import { mapActions, mapGetters } from 'vuex'
import { cookieSharedList } from '~/config/store/main'

export default {
  name: 'v-app-root',
  data() {
    return {
      __extendedRoot: true,
      themeClasses: {
        darkClass: 'app_dark',
        lightClass: 'app_light'
      }
    }
  },
  computed: {
    style() {
      return css
    },
    theme() {
      const classes = this.style
      return {
        [classes.app__viewport]: true,
        [classes[this.themeClasses.darkClass]]: this.darkMode,
        [classes[this.themeClasses.lightClass]]: !this.darkMode
      }
    },
    ...mapGetters(['darkMode'])
  },
  methods: { ...mapActions(['toggleDarkMode']) },
  created() {
    this.$store.subscribe((curMutation, state) => {
      const cookieName = cookieSharedList[curMutation.type]
      if (cookieName) {
        this.$cookies.set(cookieName, curMutation.payload)
      }
    })
  },
  head() {
    return {
      bodyAttrs: {
        class: this.style.app
      }
    }
  }
}
