export default {
  head() {
    this.title = 'Frenglish app next page'

    return { title: this.title }
  },
  render(h) {
    return (
      <div>
        <nuxt-link to="/">Home page</nuxt-link>
        <img src="https://source.unsplash.com/random" />
        <nuxt />
      </div>
    )
  }
}
