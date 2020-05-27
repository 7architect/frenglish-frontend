import { mapActions } from 'vuex'

export default {
  // TODO: pagename mixin
  head() {
    this.title = 'Frenglish app'
    // eslint-disable-next-line
    return { title: this.title }
  },
  methods: {
    ...mapActions(['toggleDarkMode'])
  },
  render(h) {
    return (
      <div>
        <h1>{this.$t('welcome')}</h1>
        <p>
          <button onClick={this.toggleDarkMode}>
            переключить цветовую схему
          </button>
          <nuxt-link to="/next">next page</nuxt-link>
        </p>
        <nuxt />
      </div>
    )
  }
}
