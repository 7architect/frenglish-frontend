require('./default.css')
require('vue-ionicons/ionicons.css')

export default {
  name: 'o-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    icon() {
      return require(`~/assets/ionicons-5.0.0/${this.name}.svg`).default
    }
  },

  render(h) {
    const IconComponent = this.icon
    return <IconComponent staticClass="icon" width={25} height={25} />
  }
}
