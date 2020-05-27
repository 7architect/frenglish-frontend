import OButton from '~/components/button/button'
require('./default.css')

export default {
  name: 'o-header',
  components: {
    OButton
  },
  computed: {
    title() {
      return process.server ? '' : document.querySelector('title').textContent
    }
  },
  render(h) {
    return (
      <header>
        <div staticClass="header__breadcrumbs">{this.title}</div>
        <div staticClass="header__nav">
          <o-button>Create a question</o-button>
        </div>
      </header>
    )
  }
}
