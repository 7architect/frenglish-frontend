import OAvatar from '~/components/avatar/avatar'
import OIcon from '~/components/icon/icon'
require('./nav.default.css')

export default {
  name: 'o-sidebar-nav',
  components: {
    OAvatar,
    OIcon
  },
  data() {
    return {
      menu: [
        {
          location: '/',
          icon: 'add-outline',
          title: this.$t('welcome')
        },
        {
          location: '/questions',
          icon: 'at-outline',
          title: this.$t('welcome')
        },
        {
          location: '/questions',
          icon: 'chatbubbles-outline',
          title: this.$t('welcome')
        },
        {
          location: '/fave',
          icon: 'bookmarks-outline',
          title: this.$t('welcome')
        }
      ]
    }
  },
  render(h) {
    const renderMenu = this.menu.map(item => {
      return (
        <nuxt-link to={item.location} staticClass="sidebar__nav-item">
          <o-icon name={item.icon} />
          <span staticClass="sidebar__nav-item-title">{item.title}</span>
        </nuxt-link>
      )
    })

    return (
      <nav staticClass="sidebar__nav">
        <nuxt-link to="/" staticClass="sidebar__nav-item sidebar__nav-avatar">
          <o-avatar avatar="/ava.jpg" />
          <span staticClass="sidebar__nav-item-title">Alexander</span>
        </nuxt-link>
        {renderMenu}
      </nav>
    )
  }
}
