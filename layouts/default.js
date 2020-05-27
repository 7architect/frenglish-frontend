import root from '~/app'
import OIcon from '~/components/icon/icon'
import OSidebar from '~/components/sidebar/sidebar'
import OHeader from '~/components/header/header'
import OMultiTasking from '~/components/multitasking/multitasking'

export default {
  name: 'default',

  /*
   * This layout state has been extend from "~/app.js"
   * -------------------------------------------------------------------------------------------
   * ⚠ WARNING  All layouts MUST been extended from "~/app.js" like this
   *            that's need because:
   *            1. "~/app" loads a "~/assets/css/common.css" in "this.style" computed property
   *             . full class list see in "~/assets/css/common.css"
   *            2. for share a global variables assigned in "~/app.js" data() property
   * -------------------------------------------------------------------------------------------
   * ⚠ WARNING: Copy this comment to all layouts if it extended from "~/app.js"
   * -------------------------------------------------------------------------------------------
   * ❕ NOTICE:   All data assigned here will overwrite a global section assigned in "~/app.js"
   *             Please 😊, comment all your changes that's can be overwrites
   */
  extends: root,

  components: {
    OIcon,
    OSidebar,
    OHeader,
    OMultiTasking
  },
  computed: {
    title() {
      return process.server ? '' : document.querySelector('title').textContent
    }
  },
  render(h) {
    return (
      <div id="default">
        <div
          staticClass={this.style.app__viewport}
          class={{
            ...this.theme
          }}
        >
          <o-header staticClass={this.style.app__header} />
          <o-sidebar staticClass={this.style.app__sidenav} />
          <div staticClass={this.style.app__grid}>
            <main staticClass={this.style.app__main} ref="main">
              <nuxt />
              <a href={this.switchLocalePath('en')}>English</a>
              <a href={this.switchLocalePath('ru')}>Русский</a>
              <footer staticClass={this.style.app__footer}>footer</footer>
            </main>
          </div>
          <div staticClass={this.style.app__controlbar}>
            <div staticClass={this.style['app__controlbar-header']}>
              <o-icon name="notifications-outline" />
            </div>
            <div />
          </div>
        </div>
      </div>
    )
  }
}
