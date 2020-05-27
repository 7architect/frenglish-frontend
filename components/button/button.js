require('./default.css')

export default {
  name: 'o-button',
  render(h) {
    return <button staticClass="button">{this.$slots.default}</button>
  }
}
