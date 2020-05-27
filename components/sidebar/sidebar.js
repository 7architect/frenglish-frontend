import OSidebarNav from './nav'
require('./default.css')

export default {
  name: 'o-sidebar',
  components: { OSidebarNav },

  render(h) {
    return (
      <aside>
        <nuxt-link to="/" class="sidebar__logo">
          Fr
        </nuxt-link>
        <o-sidebar-nav />
      </aside>
    )
  }
}
