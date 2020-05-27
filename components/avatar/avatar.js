require('./default.css')

export default {
  name: 'o-avatar',
  props: {
    avatar: {
      type: String,
      require: false,
      defult: 'ava.jpg'
    }
  },
  render(h) {
    return <img src={this.avatar} staticClass="avatar" />
  }
}
